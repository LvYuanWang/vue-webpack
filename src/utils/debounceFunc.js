/**
 * 防抖函数
 * @param {Function} func 需要防抖的函数
 * @param {Number} delay 延迟时间
 * @param {Number} timerId 定时器id
 */
// const debounceFunc = (func, delay) => {
//   let timerId = null;
//   return function () {
//     clearTimeout(timerId);
//     timerId = setTimeout(func, delay);
//   }
// }
const debounceFunc = (func, delay, timerId) => {
  timerId && clearTimeout(timerId);
  return setTimeout(func, delay);
}

export default debounceFunc;