import { useState, useEffect } from "react";
// import { clone } from "lodash";
import CameraSvg from "@/components/CameraSvg";
import styles from "./index.module.less";

const Index = () => {
  const [data, setData] = useState<any>({});

  useEffect(() => {
    // getData();
    // console.log(clone(data), "12");
  }, []);

  // const getData = async () => {
  //   const { data, code }: any = await getHome();
  //   if (code === 1) {
  //     setData(data);
  //   }
  // };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.top}>demo，欢迎来到我的世界！噢噢噢噢</div>
        <div className={styles.icon}>
          <CameraSvg />
        </div>
      </div>
    </>
  );
};
export default Index;
