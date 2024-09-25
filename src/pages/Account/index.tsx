import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { deleteCookie } from "@/utils/utils";
import styles from "./index.module.less";

const Index = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<any>({});

  useEffect(() => {
    // getData();
  }, []);

  // const getData = async () => {
  //   const { data, code }: any = await getHome();
  //   if (code === 1) {
  //     setData(data);
  //   }
  // };
  const handleLogout = () => {
    sessionStorage.setItem(
      "redirectPath",
      window.location.pathname + window.location.search
    );
    deleteCookie("token");
    navigate("/login");
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>111</div>
        <div className={styles.content}>
          <div className={styles.card}></div>
          <div className={styles.menu}></div>
          <div className={styles.btn} onClick={handleLogout}>
            退出登录
          </div>
        </div>
      </div>
    </>
  );
};
export default Index;
