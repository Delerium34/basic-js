const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disksNumber number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  // Минимальное количество ходов для решения головоломки
  const turns = Math.pow(2, disksNumber) - 1;
  
  // Время в секундах для выполнения этого количества ходов при заданной скорости
  const seconds = Math.floor(turns * 3600 / turnsSpeed);
  
  // Возвращаем объект с свойствами turns и seconds
  return { turns, seconds };
}

module.exports = {
  calculateHanoi
};
