import { sleep } from "./utils";

async function partition(arr, low, high, setArray, delay, shouldContinue) {
  const pivot = arr[high];
  let i = low - 1;

  for (let j = low; j < high && shouldContinue.current; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
      setArray([...arr]);
      await sleep(delay);
    }
  }

  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  setArray([...arr]);
  await sleep(delay);

  return i + 1;
}

export async function quickSort(arr, low, high, setArray, delay, shouldContinue) {
  if (low < high && shouldContinue.current) {
    const pi = await partition(arr, low, high, setArray, delay, shouldContinue);
    await quickSort(arr, low, pi - 1, setArray, delay, shouldContinue);
    await quickSort(arr, pi + 1, high, setArray, delay, shouldContinue);
  }
}
