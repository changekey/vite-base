import { Button } from "antd-mobile";
import { useNavigate } from "react-router-dom";
import styles from "./index.module.less";
import _left from "@/assets/image/404_1.png";
import _right from "@/assets/image/404_2.png";

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.left}>
          <img src={_left} alt="404" />
        </div>
        <div className={styles.right}>
          <img src={_right} alt="404" />
          <div className={styles.text}>
            <p>抱歉，该页面暂时不能访问</p>
            <p>Sorry, the page you visited doesn’t exist</p>
          </div>
        </div>
      </div>
      <Button
        block
        size="large"
        style={{
          background: sessionStorage.getItem("themeColor") || "",
          color: "#fff",
        }}
        onClick={() => {
          navigate("/");
        }}
      >
        返回首页
      </Button>
    </div>
  );
};

export default NotFoundPage;
