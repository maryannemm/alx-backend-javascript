export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // You can resolve or reject with any value, for now we'll resolve with "Success".
    resolve("Success");
  });
}

