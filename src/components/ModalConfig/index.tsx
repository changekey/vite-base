// handleResponse.ts
import { Modal, Button } from "antd-mobile";
import routers from "@/router/router";
import styles from "./index.module.less";

function handleStatusCode(data: any) {
  const { content, btns, title } = data;
  const color = sessionStorage.getItem("themeColor") || "#fff";

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
  const modalRef = Modal.show({
    className: styles.modal,
    content: (
      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        <div className={styles.text}>{content}</div>
        <div className={styles.footerButton}>
          {btns.length > 0 &&
            btns.map((item, index) => (
              <Button
                className={styles.btn}
                key={index}
                style={getStyles(item.type)}
                onClick={() => {
                  if (item.href === "BACK") {
                    window.history.go(-1);
                  } else if (item.href === "CANCEL") {
                    modalRef.close();
                  } else {
                    routers.navigate(item.href);
                    modalRef.close();
                  }
                }}
              >
                {item.text}
              </Button>
            ))}
        </div>
      </div>
    ),
    closeOnAction: true,
    actions: [],
  });
}

export default handleStatusCode;
