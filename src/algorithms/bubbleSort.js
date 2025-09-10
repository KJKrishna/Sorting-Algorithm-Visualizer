// import { sleep } from "../algorithms/utils";


// export const bubbleSort = async (arr, setArray, delay, shouldContinue, setHighlightIndex) => {
//   const n = arr.length;
//   for (let i = 0; i < n - 1; i++) {
//     for (let j = 0; j < n - i - 1; j++) {
//       if (!shouldContinue.current) return;

//       setHighlightIndex(j); // highlight current comparison

//       if (arr[j] > arr[j + 1]) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//         setArray([...arr]);
//         await sleep(delay);
//       }
//     }
//   }
// };


import { sleep } from "../algorithms/utils";

export const bubbleSort = async (
  arr,
  setArray,
  delay,
  shouldContinue,
  setHighlightIndices // <-- instead of single index
) => {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (!shouldContinue.current) return;

      // highlight current i and j
      setHighlightIndices({ i, j, swap: null });

      if (arr[j] > arr[j + 1]) {
        // highlight swap
        setHighlightIndices({ i, j, swap: [j, j + 1] });

        // // swap
        // [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        // setArray([...arr]);

        // await sleep(delay);

        // highlight swap
        setHighlightIndices({ i, j, swap: [j, j + 1] });
        await sleep(delay / 2); // short flash before swap

        // do swap
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        setArray([...arr]);
        await sleep(delay);
      }
    }
  }

  // clear highlight at end
  setHighlightIndices({ i: null, j: null, swap: null });
};





