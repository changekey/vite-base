// 提取手机型号
export const getMobileModel = () => {
  const userAgent = window.navigator.userAgent;
  let model = "";
  if (/Android/i.test(userAgent)) {
    const androidMatch = userAgent.match(
      /Android\s([0-9\.]+);\s([a-zA-Z0-9\-]+)/
    );
    model = androidMatch
      ? `Android ${androidMatch[1]} - ${androidMatch[2]}`
      : "Unknown Android model";
  } else if (/iPhone/i.test(userAgent)) {
    const iPhoneMatch = userAgent.match(/iPhone OS\s([0-9\_]+)/);
    model = iPhoneMatch
      ? `iPhone - iOS ${iPhoneMatch[1].replace(/_/g, ".")}`
      : "Unknown iPhone model";
  } else if (/iPad/i.test(userAgent)) {
    const iPadMatch = userAgent.match(/iPad OS\s([0-9\_]+)/);
    model = iPadMatch
      ? `iPad - iOS ${iPadMatch[1].replace(/_/g, ".")}`
      : "Unknown iPad model";
  } else {
    model = "Unknown device";
  }
  return model;
};
// 去除字符串两端空格及换行
export const trmString = (str) => {
  return str?.replace(/^\s+|\s+$/g, "")?.replace(/\n+/g, "");
};
// 去除对象中的字符串两端空格及换行
export const trmObject = (object) => {
  const newObject = JSON.parse(JSON.stringify(object));
  if (Object.keys(newObject)?.length === 0) return newObject;
  for (let key in newObject) {
    if (typeof newObject[key] === "string") {
      newObject[key] = trmString(newObject[key]);
    } else if (newObject[key] instanceof Object) {
      newObject[key] = trmObject(newObject[key]);
    }
  }
  return newObject;
};
// 格式化参数
export function parseQuery(search) {
  return search
    ? search
        .replace(/^\?/, "")
        .split("&")
        .reduce((acc, part) => {
          const [key, value] = part.split("=").map(decodeURIComponent);
          acc[key] = value;
          return acc;
        }, {})
    : {};
}

// 三位逗号分隔符
export const addCommasToNumber = (number) => {
  return (number * 1).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
// 取颜色
export function colorToRgb(color, num: number = 0) {
  if (!color) return "none";
  function hexToRgb(hex) {
    // 移除开头的 '#'
    hex = hex.replace(/^#/, "");

    // 如果是缩写格式 (#RGB), 转换为标准格式 (#RRGGBB)
    if (hex.length === 3) {
      hex = hex
        .split("")
        .map(function (hexChar) {
          return hexChar + hexChar;
        })
        .join("");
    }

    // 提取红、绿、蓝色的值
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    if (num) {
      return `rgba(${r}, ${g}, ${b}, ${num})`;
    }
    return `rgb(${r}, ${g}, ${b})`;
  }

  function namedColorToRgb(colorName) {
    // 创建一个临时的div元素，用于获取颜色的rgb值
    const tempDiv = document.createElement("div");
    tempDiv.style.color = colorName;
    document.body.appendChild(tempDiv);

    const rgb = getComputedStyle(tempDiv).color;
    document.body.removeChild(tempDiv);
    const rgbaColor = rgb.replace("rgb", "rgba").replace(")", `, ${num})`);
    if (num) {
      return rgbaColor;
    } else {
      return rgb;
    }
  }
  // 判断是否为十六进制颜色代码
  if (color.startsWith("#")) {
    return hexToRgb(color);
  } else {
    // 否则假定为命名颜色
    return namedColorToRgb(color);
  }
}
// 更改主题色
export function updatePrimaryColor(color) {
  document.documentElement.style.setProperty("--swiper-theme-color", color);
  document.documentElement.style.setProperty("--adm-color-primary", color);
  document.documentElement.style.setProperty("--checked-color", color);
  document.documentElement.style.setProperty(
    "--adm-font-size-9",
    "0.8930232558139535rem"
  );
}
interface Option {
  label: string;
  value: string;
  children?: Option[];
}
// 树形结构搜索函数
export function searchOptions(
  options: Option[],
  str: string,
  level: number,
  currentLevel: number = 1
): Option[] {
  let results: Option[] = [];
  console.log(options, str, level, currentLevel, "搜索");
  if (level < currentLevel) {
    // 如果当前层级超过了目标层级，直接返回空结果集
    return results;
  }
  for (const option of options) {
    const label = option?.label?.toLowerCase(); // 将标签转换为小写
    if (currentLevel === level && label.includes(str)) {
      // 如果当前层级等于目标层级并且标签包含搜索字符串
      results.push(option);
    }
    // 如果存在子节点，并且当前层级没有超过目标层级，递归搜索子节点
    if (option?.children && currentLevel < level) {
      results = results.concat(
        searchOptions(option?.children, str, level, currentLevel + 1)
      );
    }
  }

  return results;
}
// 给树形结构添加 '全部' 选项 递归调用
export function addNewDatas(data, text = "") {
  if (!data || data?.length === 0) return [];
  const arr = JSON.parse(JSON.stringify(data));
  // data.
  return arr.map((item) => {
    let newItem = { ...item }; // 创建当前项目的浅拷贝
    if (item.children) {
      // 为当前 item 的 children 添加 '全部' 选项，并递归处理子项
      newItem.children = [
        { label: text, value: item.value },
        ...addNewDatas(item.children, text), // 递归处理，并展开返回的新数组
      ];
    }
    return newItem;
  });
}
// 给树形结 指定字段格式化
export function convertToNewFormat(data) {
  if (!data || data.length === 0) {
    return [];
  }
  const newData = data.map((item) => {
    const newItem = {
      title: item.name,
      key: item.id,
      children: [],
      keyword: item.keyword,
    };
    if (item.childs && item.childs.length > 0) {
      newItem.children = convertToNewFormat(item.childs);
    }
    return newItem;
  });
  return newData;
}

// 过滤对象中值为 '' 或 0 的属性&& obj[key] !== 0 && obj[key] !== false
export function filterObject(obj) {
  const newObj = {};
  Object.keys(obj).forEach((key) => {
    // 检查属性值不为空或者不为某些特定的值
    if (obj[key]) {
      newObj[key] = obj[key];
    }
  });
  return newObj;
}
// 根据主题动态加载 CSS 文件的函数
export const loadThemeCSS = (theme) => {
  // const baseUrl = new URL(".", import.meta.url).href;
  const linkId = "theme-style"; // 用于唯一标识我们的<link>元素
  let link = document.getElementById(linkId) as HTMLLinkElement;

  if (!link) {
    link = document.createElement("link");
    link.id = linkId;
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }
  // console.log(window.location.origin, baseUrl, "location.href");
  link.href = `${window.location.origin}/vite-base/css/${theme}.css`;
};
// 使用正则表达式匹配数字部分
export function extractNumber(str) {
  const match = str.match(/(\D+)(\d+)(\D+)/);
  return match ? [match[1], match[2], match[3]] : null;
}

// 设置 cookie
export function setCookie(name, value, days = 365) {
  let expires = "";
  let domain = import.meta.env.VITE_API_BASE_URL;
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
  // "; SameSite=None ; Secure";
  // + `; domain=${domain}`
}
// 获取 cookie

export function getCookie(name) {
  let nameEQ = name + "=";
  let ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}
// 删除 cookie
export function deleteCookie(name) {
  document.cookie = name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
}
// 递归查找函数 根据末尾id值返回路径数组
export function findPathById(data, id, path = []) {
  for (const item of data) {
    const newPath: any = [...path, item.label];
    if (item.value === id) {
      return newPath;
    }
    if (item.children) {
      const result = findPathById(item.children, id, newPath);
      if (result) {
        return result;
      }
    }
  }
  return null;
}
// 递归查找函数 根据末尾id值返回路径数组 自定义 label 字段
export function findPathByIdLabel(data, id, label = "label", path = []) {
  for (const item of data) {
    const newPath: any = [...path, item[label]];
    if (item.value === id) {
      return newPath;
    }
    if (item.children) {
      const result = findPathByIdLabel(item.children, id, label, newPath);
      if (result) {
        return result;
      }
    }
  }
  return null;
}
// 多级联动返回 选中的 label 值数组
export function findLabelsByValues(options, values) {
  // 用于存储结果标签
  let labels: any = [];

  // 递归搜索匹配的子项
  function searchOptions(currentOptions, index) {
    if (index >= values.length) {
      return; // 如果索引超过了values长度，结束递归
    }
    let foundOption = currentOptions.find(
      (option) => option.value === values[index]
    );

    if (foundOption) {
      labels.push(foundOption.label); // 找到匹配，添加标签
      if (foundOption.children) {
        searchOptions(foundOption.children, index + 1); // 继续在子项中搜索
      }
    }
  }

  // 从根节点开始搜索
  searchOptions(options, 0);

  return labels;
}
// 过滤最后的叶子节点
export const filterLeafNodes = (treeData, selectedValues) => {
  const result: any = [];
  const traverse = (nodes) => {
    nodes.forEach((node) => {
      if (node.children) {
        traverse(node.children);
      } else if (selectedValues.includes(node.value)) {
        result.push(node.value);
      }
    });
  };

  traverse(treeData);
  return result;
};
// 根据类型返回颜色
export const colorText = (type) => {
  const color = {
    success: "#34bf6b",
    error: "#e65d3e",
    default: "#797979",
    warning: "#c4c710",
  };
  return color[type] || "#34bf6b";
};

// 计算当前的缩放比例 相当于多少 px
export const resize = function (number) {
  let emCount = 24;
  let fontSize =
    (document.documentElement.clientWidth > 750
      ? 750
      : document.documentElement.clientWidth) / emCount || 0;
  if (fontSize > 40) {
    fontSize = 40;
  }
  return Math.round(fontSize * number);
};
// 复制文本内容的函数
export const handleCopy = (url) => {
  const textToCopy = url;
  const textArea = document.createElement("textarea");
  textArea.value = textToCopy;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
};
