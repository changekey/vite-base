import { useState, useEffect } from "react";
import { Input, Picker } from "antd-mobile";
import { DownOutlined, CloseCircleFilled } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import deleteIcon from "@/assets/image/searchDeleteIcon.png";
import more from "@/assets/image/searchOpen.png";
import styles from "./index.module.less";
export const basicColumns = [
  [
    { label: "展商", value: "/range" },
    { label: "展品", value: "/product" },
  ],
];
const recordList = [
  "汽车部件",
  "摩托车零配件",
  "汽车",
  "汽ololo",
  "上海",
  "青岛",
  "深圳",
  "宁波",
];
const Index = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<any>({});
  const [value, setValue] = useState<any>({ type: [], value: "" });
  const [name, setName] = useState<any>("展商");
  const [visible, setVisible] = useState(false);
  const [searchList, setSearchList] = useState<any[]>([]);

  useEffect(() => {
    setName(basicColumns?.[0]?.[0]?.label);
    setValue({ type: [basicColumns?.[0]?.[0]?.value], value: "" });
  }, [basicColumns]);

  useEffect(() => {
    setSearchList(recordList?.map((m, i) => ({ id: i + 1, name: m })));
  }, []);

  // const getData = async () => {
  //   const { data, code }: any = await getHome();
  //   if (code === 1) {
  //     setData(data);
  //   }
  // };

  const onSearch = () => {
    console.log(value);
    navigate(`${value.type[0]}?name=${value.value}`);
  };
  const onSearchLabel = (name) => {
    navigate(`${value.type[0]}?name=${name}`);
  };

  const onClose = (id) => {
    const newList = searchList.filter((m) => m.id !== id);
    setSearchList(newList);
    console.log(id, "onClose");
  };

  const onCloseAll = () => {
    setSearchList([]);
    console.log("onCloseAll");
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.search}>
          <div className={styles.clearable}>取消</div>
          <div className={styles.input}>
            <div className={styles.type} onClick={() => setVisible(true)}>
              <span className={styles.typeText}>{name}</span>
              <DownOutlined className={styles.icon} />
            </div>
            <Input
              className={styles.searchInput}
              placeholder="请输入内容"
              value={value.value}
              onChange={(val) => setValue({ ...value, value: val })}
              onEnterPress={onSearch}
              clearable
            />
            <div className={`${styles.line} -bg`}></div>
            <div className={`${styles.searchBtn} -color`} onClick={onSearch}>
              搜索
            </div>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.record}>
            <div className={styles.recordLeft}>搜索记录</div>
            <div className={styles.recordRight}>
              <img src={deleteIcon} alt="" onClick={onCloseAll} />
            </div>
          </div>
          <div className={styles.recordList}>
            {searchList &&
              searchList?.length > 0 &&
              searchList?.map((item, index) => (
                <div className={styles.recordItem} key={item.id}>
                  <span onClick={() => onSearchLabel(item.name)}>
                    {item.name}
                  </span>
                  <CloseCircleFilled
                    className={styles.closeIcon}
                    onClick={() => onClose(item.id)}
                  />
                </div>
              ))}
            {searchList?.length > 0 && (
              <img src={more} alt="" className={styles.moreImg} />
            )}
          </div>
          <div className={styles.hot}>
            <div className={styles.hotTitle}>热门搜索</div>
            <div className={styles.hotList}>
              {recordList &&
                recordList?.length > 0 &&
                recordList?.map((item, index) => (
                  <div className={styles.hotItem} key={index}>
                    <div className={styles.hotoRder}>{index + 1}</div>
                    <div className={styles.hotoText}>
                      宁波圣龙汽车动力系统股份有限公司
                    </div>
                    <div className={styles.hotoLabel}>
                      {index % 2 === 0 ? (
                        <div className={styles.merchant}>商</div>
                      ) : (
                        <div className={styles.product}>品</div>
                      )}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      {/* 类型选择 */}
      <Picker
        columns={basicColumns}
        visible={visible}
        onClose={() => {
          setVisible(false);
        }}
        value={value.type}
        onConfirm={(v, extend) => {
          setValue({ ...value, type: v });
          setName(extend?.items?.[0]?.label);
          console.log(v, extend);
        }}
      />
    </>
  );
};
export default Index;
