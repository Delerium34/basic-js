const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const stats = {};

  domains.forEach(domain => {
    const parts = domain.split('.').reverse();
    let subdomain = '';
    parts.forEach(part => {
      subdomain = `${subdomain}.${part}`;
      if (stats[subdomain]) {
        stats[subdomain]++;
      } else {
        stats[subdomain] = 1;
      }
    });
  });

  return stats;
}

module.exports = {
  getDNSStats
};
