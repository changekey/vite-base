import { useState, useEffect } from "react";
import styles from "./index.module.less";

const Index = ({
  title = "",
  state = "theme",
  type = "default",
  children = null,
}: any) => {
  const color = {
    success: { background: "#34bf6b", color: "#fff" },
    error: { background: "#e65d3e", color: "#fff" },
    default: { background: "#DDDDDD", color: "#797979" },
    warning: { background: "#c4c710", color: "#fff" },
    theme: { background: "#006666", color: "#fff" },
    info: { background: "#5DB1F5", color: "#fff" },
    success1: { color: "#34bf6b" },
    error1: { color: "#e65d3e" },
    default1: { color: "#797979" },
    warning1: { color: "#c4c710" },
    theme1: { color: "#006666" },
    info1: { color: "#5DB1F5" },
    success2: {
      color: "#34bf6b",
      border: "0.033488rem solid #34bf6b",
    },
    error2: {
      color: "#e65d3e",
      border: "0.033488rem solid #e65d3e",
    },
    default2: {
      color: "#797979",
      border: "0.033488rem solid #797979",
    },
    warning2: {
      color: "#c4c710",
      border: "0.033488rem solid #c4c710",
    },
    theme2: {
      color: "#006666",
      border: "0.033488rem solid #006666",
    },
    info2: {
      color: "#5DB1F5",
      border: "0.033488rem solid #5DB1F5",
    },
    success3: {
      background: "#34bf6b",
      color: "#fff",
      borderRadius: "0.2232rem",
    },
    error3: { background: "#e65d3e", color: "#fff", borderRadius: "0.2232rem" },
    default3: {
      background: "#ddd",
      color: "#797979",
      borderRadius: "0.2232rem",
    },
    warning3: {
      background: "#c4c710",
      color: "#fff",
      borderRadius: "0.2232rem",
    },
    theme3: { background: "#006666", color: "#fff", borderRadius: "0.2232rem" },
    info3: { background: "#5DB1F5", color: "#fff", borderRadius: "0.2232rem" },
    success4: {
      color: "#34bf6b",
      border: "0.033488rem solid #34bf6b",
      borderRadius: "0.2232rem",
    },
    error4: {
      color: "#e65d3e",
      border: "0.033488rem solid #e65d3e",
      borderRadius: "0.2232rem",
    },
    default4: {
      color: "#797979",
      border: "0.033488rem solid #797979",
      borderRadius: "0.2232rem",
    },
    warning4: {
      color: "#c4c710",
      border: "0.033488rem solid #c4c710",
      borderRadius: "0.2232rem",
    },
    theme4: {
      color: "#006666",
      border: "0.033488rem solid #006666",
      borderRadius: "0.2232rem",
    },
    info4: {
      color: "#5DB1F5",
      border: "0.033488rem solid #5DB1F5",
      borderRadius: "0.2232rem",
    },
    success5: {
      background: "#34bf6b",
      color: "#fff",
      borderRadius: "0 0.4465rem 0 0.4465rem",
    },
    error5: {
      background: "#e65d3e",
      color: "#fff",
      borderRadius: "0 0.4465rem 0 0.4465rem",
    },
    default5: {
      background: "#ddd",
      color: "#797979",
      borderRadius: "0 0.4465rem 0 0.4465rem",
    },
    warning5: {
      background: "#c4c710",
      color: "#fff",
      borderRadius: "0 0.4465rem 0 0.4465rem",
    },
    theme5: {
      background: "#006666",
      color: "#fff",
      borderRadius: "0 0.4465rem 0 0.4465rem",
    },
    info5: {
      background: "#5DB1F5",
      color: "#fff",
      borderRadius: "0 0.4465rem 0 0.4465rem",
    },
  };

  return (
    <>
      {type === "small" && (
        <span className={styles.statusLabel} style={color[state]}>
          {title}
          {children}
        </span>
      )}
      {type === "default" && (
        <span className={styles.statusLabelBig} style={color[state]}>
          {title}
        </span>
      )}
    </>
  );
};
export default Index;
