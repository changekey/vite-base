import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Result } from "antd-mobile";
import styles from "./index.module.less";

const Index = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [data, setData] = useState<any>({});
  const color = sessionStorage.getItem("themeColor") || "#fff";

  useEffect(() => {
    setData(location.state);
  }, []);

  // const getData = async () => {
  //   const { data, code }: any = await getHome();
  //   if (code === 1) {
  //     setData(data);
  //   }
  // };
  const getStyles = (type: number) => {
    switch (type) {
      case 0:
        return {
          backgroundColor: "rgba(102, 102, 102, 1)",
          color: "#fff",
        };
      case 1:
        return {
          backgroundColor: "#fff",
          border: `1px solid rgba(102, 102, 102, 1)`,
          color: "rgba(102, 102, 102, 1)",
        };
      case 3:
        return {
          backgroundColor: color,
          color: "#fff",
        };
      case 4:
        return {
          backgroundColor: "#fff",
          border: `1px solid ${color}`,
          color: color,
        };
      default:
        return {};
    }
  };
  return (
    <>
      <div className={styles.result}>
        <Result
          // icon={<span>2233232</span>}
          status="warning"
          title={data?.title}
          description={data?.content}
        />
        <div className={styles.btns}>
          {data?.btns &&
            data?.btns.length > 0 &&
            data?.btns.map((item, index) => (
              <Button
                className={styles.btn}
                key={index}
                style={getStyles(item.type)}
                onClick={() => {
                  if (item.href === "BACK") {
                    window.history.go(-1);
                  } else if (item.href === "CANCEL") {
                    navigate(item.href, { replace: true });
                  } else {
                    navigate(item.href, { replace: true });
                  }
                }}
              >
                {item.text}
              </Button>
            ))}
        </div>
      </div>
    </>
  );
};
export default Index;
