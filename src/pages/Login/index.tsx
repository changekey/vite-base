import { useEffect, useState, useRef } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import {
  Form,
  Input,
  Button,
  Checkbox,
  Modal,
  Divider,
  Toast,
  SearchBar,
  Cascader,
} from "antd-mobile";
import { DownOutlined } from "@ant-design/icons";
import { getLogin, login, sendCode } from "@/utils/request";
import { colorToRgb, setCookie, searchOptions } from "@/utils/utils";
import weChat from "@/assets/image/weChat.png";
import styles from "./index.module.less";
import { message } from "antd";

const Index = () => {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const [state, setState] = useState("phone");
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState("");
  const [option, setOption] = useState<any[]>([]);
  const regionOption = useRef<any[]>([]);
  const [codeState, setCodeState] = useState<any>({
    phone: 0,
    email: 0,
  });
  const [data, setData] = useState<any>({});
  const [areaCode, setAreaCode] = useState<string>("86");
  const [form] = Form.useForm();
  const colot = colorToRgb(sessionStorage.getItem("themeColor"), 0.5);

  useEffect(() => {
    const getData = async () => {
      const { data, code }: any = await getLogin();
      if (code === 1) {
        setData(data);
        regionOption.current = data?.phonePrefixs?.map((item: any, index) => ({
          label: item.Name,
          value: item.Prefix + "-" + index,
        }));
      }
    };
    getData();
  }, []);

  // 协议回填
  useEffect(() => {
    const savedValue = sessionStorage.getItem("userInput");
    if (savedValue) {
      form.setFieldsValue(JSON.parse(savedValue));
    }
  }, []);

  useEffect(() => {
    setOption(regionOption.current);
  }, [regionOption.current]);

  // 登录
  const handleSubmit = async (values: any) => {
    // console.log(values, "submit");
    if (state === "phone") {
      const { code, msg, data }: any = await login({
        phone_area: areaCode,
        mobile: values.phone,
        mobileCode: values.phoneCode,
      });
      if (code === 1) {
        setCookie("token", data.token);
        navigate(sessionStorage.getItem("redirectPath") || "/", {
          replace: true,
        });
        sessionStorage.removeItem("redirectPath");
      } else {
        message.error(msg);
      }
      // console.log(code, msg, data, "phone");
    } else if (state === "email") {
      const { code, msg, data }: any = await login({
        mobile: values.email,
        mobileCode: values.emailCode,
      });
      if (code === 1) {
        setCookie("token", data.token);
        navigate(sessionStorage.getItem("redirectPath") || "/", {
          replace: true,
        });
        sessionStorage.removeItem("redirectPath");
      } else {
        message.error(msg);
      }
      // console.log(code, msg, data, "email");
    }
  };

  // 切换登录方式
  const handleSwitch = (type) => {
    setState(type);
  };

  // 协议
  const handleProtocol = () => {
    sessionStorage.setItem("userInput", JSON.stringify(form.getFieldsValue()));
    // navigate("/protocol");
  };

  // 请求验证码
  const handleCode = async (type) => {
    // console.log(type, form.getFieldsValue([type]), "code");

    await form.validateFields([type]);

    if (type === "phone") {
      await sendCode({
        mobile: form.getFieldValue([type]),
        type: 4,
        phone_area: areaCode,
      });
    } else if (type === "email") {
      await sendCode({
        email: form.getFieldValue([type]),
        type: 4,
      });
    }

    setCodeState((pre) => ({ ...pre, [type]: 59 }));
    let time = 59;
    const timer = setInterval(() => {
      time--;
      setCodeState((pre) => ({ ...pre, [type]: time }));
      if (time === 0) {
        clearInterval(timer);
        setCodeState((pre) => ({
          ...pre,
          [type]: 0,
        }));
      }
    }, 1000);
  };

  const handleChange = (val: string) => {
    setValue(val);
    if (val.length === 0) setOption(regionOption.current);
  };
  const handleSearch = () => {
    setOption(searchOptions(regionOption.current, value, 1));
  };
  //
  const SelectInput = ({ value, onChange }: any) => {
    return (
      <div className={styles.selectInput}>
        <div>
          <div className={styles.select}>
            <span onClick={() => setVisible(true)}>+{areaCode}</span>
            <DownOutlined />
          </div>
        </div>
        <Input
          placeholder={data?.texts?.enter_mobile}
          value={value}
          onChange={onChange}
          type="tel"
          clearable
        />
      </div>
    );
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={`${styles.flex} -login-bg`}>
            <div className={styles.header}>
              <img src={data?.expoLogo} alt="logo" />
            </div>
            <div className={styles.titleTab}>
              <div
                className={styles.tabItem}
                onClick={() => handleSwitch("phone")}
              >
                <span style={{ fontWeight: state === "phone" ? "700" : "400" }}>
                  {data?.texts?.phone_login}
                </span>
                {state === "phone" && (
                  <div style={{ background: colot || "" }}></div>
                )}
              </div>
              <div
                className={styles.tabItem}
                onClick={() => handleSwitch("email")}
              >
                <span style={{ fontWeight: state === "email" ? "700" : "400" }}>
                  {data?.texts?.email_login}
                </span>
                {state === "email" && (
                  <div style={{ background: colot || "" }}></div>
                )}
              </div>
            </div>
            <Form
              layout="horizontal"
              className="adm_form"
              mode="card"
              form={form}
              onFinish={handleSubmit}
              footer={
                <Button
                  block
                  type="submit"
                  color="primary"
                  className={`${styles.btn} -login-btn-bg`}
                >
                  {data?.texts?.sign_in_now}
                </Button>
              }
            >
              <Form.Header></Form.Header>

              {state === "phone" ? (
                <Form.Item
                  name="phone"
                  rules={[
                    {
                      required: true,
                      message: data?.texts?.enter_mobile,
                    },
                  ]}
                >
                  <SelectInput />
                </Form.Item>
              ) : (
                <Form.Item
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: data?.texts?.enter_email,
                    },
                    {
                      type: "email",
                      message: data?.texts?.please_input_valid_email,
                    },
                  ]}
                >
                  <Input placeholder={data?.texts?.enter_email} clearable />
                </Form.Item>
              )}

              <Form.Header></Form.Header>
              {state === "phone" ? (
                <Form.Item
                  name="phoneCode"
                  extra={
                    <Button
                      color="primary"
                      fill="none"
                      disabled={codeState.phone > 0}
                      onClick={() => handleCode("phone")}
                    >
                      {codeState.phone > 0
                        ? codeState.phone + "s"
                        : data?.texts?.send_verification_code}
                    </Button>
                  }
                  rules={[
                    {
                      required: true,
                      message: data?.texts?.enter_verification_code,
                    },
                  ]}
                >
                  <Input
                    type="text"
                    maxLength={6}
                    placeholder={data?.texts?.enter_verification_code}
                    clearable
                  />
                </Form.Item>
              ) : (
                <Form.Item
                  name="emailCode"
                  extra={
                    <Button
                      color="primary"
                      fill="none"
                      disabled={codeState.email > 0}
                      onClick={() => handleCode("email")}
                    >
                      {codeState.email > 0
                        ? codeState.email + "s"
                        : data?.texts?.send_verification_code}
                    </Button>
                  }
                  rules={[
                    {
                      required: true,
                      message: data?.texts?.enter_verification_code,
                    },
                  ]}
                >
                  <Input
                    type="text"
                    maxLength={6}
                    placeholder={data?.texts?.enter_verification_code}
                    clearable
                  />
                </Form.Item>
              )}

              <Form.Header></Form.Header>
              <Form.Item
                name="checkbox"
                className="checkbox"
                rules={[
                  {
                    required: true,
                    message: data?.texts?.please_read_and_agree,
                  },
                ]}
              >
                <Checkbox.Group>
                  <Checkbox value="1" className="checkbox_item">
                    {data?.texts?.i_read_and_agree}
                    <Button
                      color="primary"
                      fill="none"
                      className="link_btn"
                      onClick={() => handleProtocol()}
                    >
                      {data?.texts?.user_agreement}
                    </Button>
                  </Checkbox>
                </Checkbox.Group>
              </Form.Item>
            </Form>
          </div>
          <div className={styles.footer}>
            <Divider className={styles.divider}>
              {data?.texts?.other_login_methods}
            </Divider>
            <div className={styles.other}>
              <div
                className={styles.otherItem}
                onClick={() => {
                  console.log("weChat");
                }}
              >
                <img src={weChat} alt="weChat" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.cascader}>
          <Cascader
            options={option}
            visible={visible}
            onClose={() => {
              setVisible(false);
            }}
            title={
              <div className={styles.search}>
                <SearchBar
                  placeholder={data?.texts?.input_name_search_placeholder}
                  value={value}
                  onChange={handleChange}
                  onSearch={handleSearch}
                />
                <Button
                  className={styles.searchBtn}
                  color="primary"
                  fill="none"
                  onClick={() => handleSearch()}
                >
                  {data?.texts?.search}
                </Button>
              </div>
            }
            onSelect={(value, extend) => {
              let itmes: any = [];
              if (extend.items.length) {
                itmes = extend.items[extend.items.length - 1];
                if (itmes && !itmes.children) {
                  // let arr = extend.items.map((item) => item?.label);
                  setVisible(false);
                  let str = String(value[0]) || "";
                  setAreaCode(str.split("-")[0]);
                  console.log(value, str.split("-")[0], "value");
                  // selsect.current.area_id = value.pop();
                }
              }
            }}
            cancelText={""}
            confirmText={""}
          />
        </div>
      </div>
    </>
  );
};

export default Index;
