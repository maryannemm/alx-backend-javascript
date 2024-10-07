// 10-update_uniq_items.js
export default function updateUniqueItems(map) {
  // Check if the input is a Map
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  // Iterate through the map and update quantities
  for (const [key, value] of map.entries()) {
    if (value === 1) {
      map.set(key, 100);  // Update quantity from 1 to 100
    }
  }
}

