// 100-weak.js
export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  // Check if the endpoint is already in the WeakMap
  if (!weakMap.has(endpoint)) {
    // Initialize the count to 0 if it's a new endpoint
    weakMap.set(endpoint, 0);
  }

  // Increment the count for this endpoint
  const currentCount = weakMap.get(endpoint) + 1;
  weakMap.set(endpoint, currentCount);

  // Throw an error if the count is 5 or more
  if (currentCount >= 5) {
    throw new Error('Endpoint load is high');
  }
}

