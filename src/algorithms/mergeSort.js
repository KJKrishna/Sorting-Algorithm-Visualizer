import { sleep } from "./utils";

async function merge(arr, l, m, r, setArray, delay, shouldContinue) {
  const n1 = m - l + 1;
  const n2 = r - m;
  const L = arr.slice(l, m + 1);
  const R = arr.slice(m + 1, r + 1);

  let i = 0, j = 0, k = l;
  while (i < n1 && j < n2 && shouldContinue.current) {
    arr[k++] = L[i] <= R[j] ? L[i++] : R[j++];
    setArray([...arr]);
    await sleep(delay);
  }

  while (i < n1 && shouldContinue.current) {
    arr[k++] = L[i++];
    setArray([...arr]);
    await sleep(delay);
  }

  while (j < n2 && shouldContinue.current) {
    arr[k++] = R[j++];
    setArray([...arr]);
    await sleep(delay);
  }
}

export async function mergeSortHelper(arr, l, r, setArray, delay, shouldContinue) {
  if (l < r && shouldContinue.current) {
    const m = Math.floor((l + r) / 2);
    await mergeSortHelper(arr, l, m, setArray, delay, shouldContinue);
    await mergeSortHelper(arr, m + 1, r, setArray, delay, shouldContinue);
    await merge(arr, l, m, r, setArray, delay, shouldContinue);
  }
}

export async function mergeSort(arr, setArray, delay, shouldContinue) {
  await mergeSortHelper(arr, 0, arr.length - 1, setArray, delay, shouldContinue);
}
