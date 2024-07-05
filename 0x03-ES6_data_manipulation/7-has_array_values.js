/**
 * Checks a set contains each element in an array
 * @param {Set} set - collection of unique items
 * @param {*} array - array of items
 * @author Bezaleel Olakunori <https://github.com/B3zaleel>
 * @returns {Boolean}
 */
export default function hasValuesFromArray(set, array) {
  return array.every((value) => set.has(value));
}
