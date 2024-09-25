import { useEffect, useState } from "react";
import { Popup } from "antd-mobile";
import { QRCode } from "antd";
import { ClockCircleOutlined, EnvironmentOutlined } from "@ant-design/icons";
import styles from "./index.module.less";

const Index = ({ visible, setVisible, codeQR, texts }: any) => {
  const [codeQRs, setCodeQRs] = useState<any>(codeQR);
  const [text, setText] = useState<any>(texts);

  useEffect(() => {
    setCodeQRs(codeQR);
  }, [codeQR]);

  useEffect(() => {
    setText(texts);
  }, [texts]);

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
        afterClose={() => {
          window.location.reload();
        }}
        bodyStyle={{
          borderTopLeftRadius: "8px",
          borderTopRightRadius: "8px",
        }}
        // onMaskClick={() => setVisible(false)}
      >
        <div className={styles.container}>
          <div className={styles.title}>{text?.exchange_goods}</div>
          {/* <div className={styles.textContent}>
            <div className={styles.text}>
              <ClockCircleOutlined />
              {text?.conversion_time_note}
            </div>
            <div className={styles.text}>
              <EnvironmentOutlined />
              {text?.place_of_exchange_note}
            </div>
          </div> */}
          <QRCode value={codeQRs || "-"} className={styles.qrcodes} />
        </div>
      </Popup>
    </>
  );
};
export default Index;
