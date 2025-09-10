import { sleep } from "./utils";

export async function selectionSort(arr, setArray, delay, shouldContinue) {
  const n = arr.length;
  for (let i = 0; i < n - 1 && shouldContinue.current; i++) {
    let minIdx = i;
    for (let j = i + 1; j < n && shouldContinue.current; j++) {
      if (arr[j] < arr[minIdx]) minIdx = j;
    }
    if (minIdx !== i) {
      [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
      setArray([...arr]);
      await sleep(delay);
    }
  }
}
