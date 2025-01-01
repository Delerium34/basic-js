const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  // Извлекаем элементы, которые не равны -1, и сортируем их
  const heights = arr.filter(el => el !== -1).sort((a, b) => a - b);
  
  // Индекс для прохода по отсортированным высотам
  let index = 0;

  // Создаем новый массив, вставляя отсортированные высоты на нужные места
  return arr.map(el => (el === -1 ? el : heights[index++]));
}

module.exports = {
  sortByHeight
};
