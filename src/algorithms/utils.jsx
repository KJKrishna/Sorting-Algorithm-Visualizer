

export const generateRandomArray = (size) => {
  const arr = Array.from({ length: size }, () => Math.floor(Math.random() * 100) + 5);
  console.log("Generated Array:", arr); // ✅ This will print the values
  return arr;
};


export const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
