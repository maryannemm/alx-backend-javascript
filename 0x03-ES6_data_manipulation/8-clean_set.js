// 8-clean_set.js
export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') {
    return '';
  }

  return Array.from(set)
    .filter((value) => value.startsWith(startString))  // Filter values that start with startString
    .map((value) => value.slice(startString.length))   // Remove startString from each value
    .join('-');                                        // Join the values with a hyphen
}

