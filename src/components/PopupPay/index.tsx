import { useEffect, useState } from "react";
import { Popup, Button, Radio } from "antd-mobile";
import { message } from "antd";
import wx from "weixin-js-sdk";
import PopupQRCode from "./PopupQRCode";
import weChat from "@/assets/image/WeChats.png";
import Wallet from "@/assets/image/Wallet.png";
import Alipay from "@/assets/image/Alipay.png";
import UnionPay from "@/assets/image/UnionPay.png";
import styles from "./index.module.less";

const Index = ({
  visible,
  setVisible,
  payData,
  texts = "",
  params,
  onPays,
}: any) => {
  const [data, setData] = useState<any>(payData);
  const [value, setValue] = useState<string>("weixin");
  const [visibleQR, setVisibleQR] = useState(false);
  const [codeQR, setCodeQR] = useState<string>("");
  const paylist = [
    { name: "微信支付", value: "weixin", icon: weChat },
    { name: "支付宝", value: "alipay", icon: Alipay },
    { name: "余额", value: "balance", icon: Wallet },
    { name: "银联支付", value: "balances", icon: UnionPay },
  ];
  useEffect(() => {
    const arr = payData?.paylist?.map((item, i) => ({
      ...paylist[i],
      value: item,
    }));
    let obj = {
      ...payData,
      paylist: arr,
    };
    setData(obj);
    console.log("payData", payData, params);
  }, [payData]);

  const onChange = (val) => {
    console.log("radio", val);
    setValue(val);
  };

  const payWithWechat = async () => {
    setVisible(false);
    const param = {
      ...params,
      pay_channel: value,
    };
    try {
      const { data, msg, code }: any = await onPays(param);
      if (code === 1) {
        //成功之后的操作

        console.log(data, "pay");
        if (value === "balance") {
          message.success(msg);
        }
        // 跳转到微信支付页面
        if (data?.wxMwebUrl || data?.aliPayPage) {
          let url = data?.wxMwebUrl || data?.aliPayPage;
          window.location.href = url;
        }
        // 二维码支付
        if (data?.wxPayQrcode) {
          setCodeQR(data?.wxPayQrcode);
          setVisibleQR(true);
        }

        // 微信支付
        if (data?.wxConfig || data?.wxPayObj) {
          wx.config({
            ...data?.wxConfig,
            debug: false,
            jsApiList: ["chooseWXPay"], // 必填，需要使用的微信支付功能列表
          });

          wx.ready(() => {
            wx.chooseWXPay({
              timestamp: data?.wxPayObj?.timeStamp,
              nonceStr: data?.wxPayObj?.nonceStr,
              package: data?.wxPayObj?.package,
              signType: data?.wxPayObj?.signType,
              paySign: data?.wxPayObj?.paySign,
              success: function (res) {
                // 支付成功后的回调函数
                window.location.reload();
              },
            });
          });
          wx.error((err) => {
            // 微信配置失败
            console.error("wx config error", err);
          });
        }
      } else {
        message.error(msg);
      }
    } catch (error) {
      console.error("获取支付参数失败", error);
    }
  };

  return (
    <>
      {/*popup  弹出层 */}
      <Popup
        className={styles.popup}
        visible={visible}
        showCloseButton
        onClose={() => {
          setVisible(false);
        }}
        bodyStyle={{
          borderTopLeftRadius: "8px",
          borderTopRightRadius: "8px",
        }}
        // onMaskClick={() => {
        //   setVisible(false);
        // }}
      >
        <div className={styles.container}>
          <div className={styles.titleBox}>
            <div className={styles.text}>
              ￥<span>{data?.price}</span>
            </div>
          </div>
          <div className={styles.content}>
            <Radio.Group
              value={value}
              onChange={(val) => {
                console.log("radio", val);
                setValue(val as string);
              }}
            >
              {data?.paylist &&
                data?.paylist?.map((item, index) => (
                  <div
                    className={styles.radio}
                    key={index}
                    style={
                      index === data?.paylist?.length - 1
                        ? { borderBottom: "none" }
                        : {}
                    }
                  >
                    <Radio
                      value={item.value}
                      // onChange={() => onChange(item.value)}
                    >
                      <div className={styles.radioItem}>
                        <div className={styles.radioItemImg}>
                          <img src={item.icon} className={styles.icon} alt="" />
                        </div>
                        <div className={styles.radioText}>{item.name}</div>
                      </div>
                    </Radio>
                  </div>
                ))}
            </Radio.Group>
          </div>
          <div className={styles.footerBtn}>
            <Button
              className={styles.btn}
              block
              color="primary"
              size="large"
              onClick={payWithWechat}
            >
              确认支付
            </Button>
          </div>
        </div>
      </Popup>
      <PopupQRCode
        visible={visibleQR}
        setVisible={setVisibleQR}
        codeQR={codeQR}
        texts={{}}
      />
    </>
  );
};
export default Index;
