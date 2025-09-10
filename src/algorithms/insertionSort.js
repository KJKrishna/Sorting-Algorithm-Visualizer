// import { sleep } from "./utils";

// export async function insertionSort(arr, setArray, delay, shouldContinue) {
//   const n = arr.length;
//   for (let i = 1; i < n && shouldContinue.current; i++) {
//     let key = arr[i];
//     let j = i - 1;
//     while (j >= 0 && arr[j] > key && shouldContinue.current) {
//       arr[j + 1] = arr[j];
//       j--;
//       setArray([...arr]);
//       await sleep(delay);
//     }
//     arr[j + 1] = key;
//     setArray([...arr]);
//     await sleep(delay);
//   }
// }


import { sleep } from "./utils";

export async function insertionSort(
  arr,
  setArray,
  delay,
  shouldContinue,
  setHighlightIndices // pass highlight state handler
) {
  const n = arr.length;

  for (let i = 1; i < n && shouldContinue.current; i++) {
    let j = i;

    // highlight "i" as current boundary of sorted portion
    setHighlightIndices({ i, j: null, sorted: [...Array(i).keys()] });
    await sleep(delay);

    while (j > 0 && arr[j - 1] > arr[j] && shouldContinue.current) {
      // highlight j while swapping
      setHighlightIndices({ i, j, sorted: [...Array(i).keys()] });

      // swap arr[j] and arr[j-1]
      [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      j--;

      setArray([...arr]);
      await sleep(delay);
    }

    // after placing key, highlight updated sorted portion
    setHighlightIndices({ i, j, sorted: [...Array(i + 1).keys()] });
    await sleep(delay);
  }

  // clear highlights
  setHighlightIndices({ i: null, j: null, sorted: [] });
}
