import styles from "./index.module.less";

const Index = ({ row = 1, text, className = "" }) => {
  return (
    <div
      className={`${styles.ellipsis} ${className}`}
      style={{ WebkitLineClamp: row }}
    >
      {text}
    </div>
  );
};
export default Index;
