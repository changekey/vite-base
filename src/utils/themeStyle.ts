// 根据 rgb 值生成主题样式
export function generateThemeStyles(themeColor) {
  const rgb = themeColor?.match(/\d+/g)?.map(Number);
  const rgba = (alpha) =>
    `rgba(${rgb?.[0]}, ${rgb?.[1]}, ${rgb?.[2]}, ${alpha})`;

  const styles = `
      .-color {
        color: ${rgba(1)} !important;
      }
      .-co-8 {
        color: ${rgba(0.8)};
      }
      .-bg {
        opacity: 1 !important;
        background: ${rgba(1)} !important;
      }
      .-bg-1 {
        background: ${rgba(0.1)};
      }
      .-bg-2 {
        background: ${rgba(0.2)} !important;
      }
      .-bg-4 {
        background: ${rgba(0.4)};
      }
      .-bg-5 {
        background: ${rgba(0.5)};
      }
      .-bg-6 {
        background: ${rgba(0.6)};
      }
      .-bg-7 {
        background: ${rgba(0.7)};
      }
      .-bg-8 {
        background: ${rgba(0.8)};
      }
      .-bg-9 {
        background: ${rgba(0.9)} !important;
      }
      .-bg-card {
        background: linear-gradient(
          127.12deg,
          ${rgba(0.75)} 0%,
          ${rgba(0.75)} 51.33%,
          ${rgba(0.75)} 100%
        );
      }
      .-bo-color {
        color: ${rgba(1)};
        border: 0.5px solid ${rgba(1)};
      }
      .-active-select {
        background: rgba(143, 255, 255, 0.2);
        border: 0.5px solid ${rgba(0.4)};
      }
      .-login-btn {
        background: linear-gradient(
          128.24deg,
          ${rgba(1)} 0%,
          ${rgba(1)} 100%
        );
      }
      .-login-bg {
        background: linear-gradient(
          205.1deg,
          rgba(10, 201, 201, 0.15) 0%,
          rgba(10, 201, 201, 0.05) 100%
        );
      }
      .-login-btn-bg {
        background: linear-gradient(128.24deg, #008787 0%, #006666 100%);
      }
      .-visit-bg {
        background: linear-gradient(
          250.06deg,
          rgba(10, 201, 201, 0.15) 0%,
          rgba(10, 201, 201, 0.05) 100%
        );
      }
      .-certificate-bg {
        background: linear-gradient(
          132.38deg,
          ${rgba(1)} 0%,
          ${rgba(1)} 100%
        );
      }
      .-certificate-btn {
        background: rgba(139, 204, 200, 0.5);
      }
      .-exhibitorCenter-bg {
        background: linear-gradient(
          132.38deg,
          ${rgba(1)} 0%,
          ${rgba(1)} 100%
        );
      }
      .-contract-bor {
        border-left: 0.08372093023255814rem solid ${rgba(0.7)};
      }
      .-buyers-bg {
        background: linear-gradient(
          0deg,
          rgba(10, 201, 201, 0.2) 60%,
          rgba(10, 201, 201, 0) 100%
        );
      }
      .-vip {
        background: linear-gradient(
          0deg,
          rgba(10, 201, 201, 0.15) 0%,
          rgba(10, 201, 201, 0) 100%
        );
      }
      .-personal-bg {
        background: ${rgba(1)};
      }
      .-bo-bottom {
        border-bottom: 1px solid ${rgba(1)} !important;
      }
      .-bo1-color {
        color: ${rgba(1)} !important;
        border: 1px solid ${rgba(1)} !important;
      }
      .-news-bg {
        background: linear-gradient(
          0deg,
          ${rgba(1)} 69%,
          ${rgba(0.9)} 42.64%,
          ${rgba(0)} 100%
        ) !important;
      }
      .-contact-bg {
        background: linear-gradient(
          180deg,
          ${rgba(1)} 0%,
          ${rgba(0.7)} 57.43%,
          ${rgba(0.3)} 100%
        );
      }
      .-svg-color {
        color: rgba(139, 204, 200, 1);
      }
    `;

  return styles;
}
