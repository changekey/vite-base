import { useState, useEffect } from "react";
import { colorToRgb } from "@/utils/utils";
import styles from "./index.module.less";

const Index = () => {
  // `${
  //   colorToRgb(sessionStorage.getItem("themeColor"), 0.7) || ""
  // }`
  useEffect(() => {}, []);

  return (
    <div className={styles.container}>
      <div></div>
      <div>text</div>
    </div>
  );
};
export default Index;
