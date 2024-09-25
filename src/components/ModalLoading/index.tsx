// handleResponse.ts
import { Toast } from "antd-mobile";
import styles from "./index.module.less";
let loadingCount = 0;
// 完善loading组件 并发请求时显示loading效果
function modalLoading(state) {
  const modalRef = Toast.show({
    icon: "loading",
    content: "loading...",
    duration: 60000,
    maskClickable: false,
  });
  if (!state) {
    modalRef.close();
    return null;
  }
}
const showLoading = () => {
  if (loadingCount === 0) {
    modalLoading(true);
  }
  loadingCount++;
};

const hideLoading = () => {
  if (loadingCount <= 1) {
    modalLoading(false);
    loadingCount = 0;
  } else {
    loadingCount--;
  }
};

export { showLoading, hideLoading };
