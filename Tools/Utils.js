// 格式化金钱
function formatPriceByReg(price) {
  return String(price).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function formatPriceByFn(price) {
  return String(price)
    .split('')
    .reverse()
    .reduce((prev, next, index) => {
      return (index % 3 ? next : next + ',') + prev;
    });
}

function formatPrice(price, options = {
  style: 'currency',
  currency: 'CNY',
  maximumFractionDigits: 2, //两位小数
}) {
  return price.toLocaleString('zh-CN', options);
}

/**
 * 字符串转 txt 文件
 * @param {*} text
 * @param {*} filename
 */
function exportTxt(text, filename) {
  const eleLink = document.createElement('a');
  eleLink.download = filename;
  eleLink.style.display = 'none';
  // 将内容转为 blob
  const blob = new Blob([text]);
  eleLink.href = URL.createObjectURL(blob);
  document.body.appendChild(eleLink);
  eleLink.click();
  document.body.removeChild(eleLink);
}

// 脱敏处理
const encryptReg = (before = 3, after = 4) => {
  return new RegExp('(\\d{' + before + '})\\d*(\\d{' + after + '})');
};

// 下划线与驼峰
const toHump = name => {
  return name.replace(/\_(\w)/g, function (all, letter) {
    return letter.toUpperCase();
  });
};

const toLine = name => {
  return name.replace(/([A-Z])/g, '_$1').toLowerCase();
};