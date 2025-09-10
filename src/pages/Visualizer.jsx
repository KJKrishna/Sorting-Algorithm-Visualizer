import { useState, useEffect, useRef, useCallback } from "react";
import { generateRandomArray } from "../algorithms/utils";
import DescriptionBox from "../components/DescriptionBox";
import {
  bubbleSort,
  quickSort,
  mergeSort,
  selectionSort,
  insertionSort,
} from "../algorithms/sortingAlgorithms";

const Visualizer = () => {
  const [array, setArray] = useState([]);
  const [sorting, setSorting] = useState(false);
  const [speed, setSpeed] = useState(50);
  const [size, setSize] = useState(30);
  const [algorithm, setAlgorithm] = useState("bubble");
  const shouldContinue = useRef(true);

  useEffect(() => {
    resetArray();
  }, [size]);

  const resetArray = useCallback(() => {
    setArray(generateRandomArray(size));
    setSorting(false);
    shouldContinue.current = true;
  }, [size]);

  const startSorting = useCallback(async () => {
    if (sorting) {
      shouldContinue.current = false;
      setSorting(false);
      return;
    }

    setSorting(true);
    shouldContinue.current = true;
    const arrCopy = [...array];
    const delay = 101 - speed;

    switch (algorithm) {
      case "bubble":
        await bubbleSort(arrCopy, setArray, delay, shouldContinue);
        break;
      case "quick":
        await quickSort(arrCopy, 0, arrCopy.length - 1, setArray, delay, shouldContinue);
        break;
      case "merge":
        await mergeSort(arrCopy, setArray, delay, shouldContinue);
        break;
      case "selection":
        await selectionSort(arrCopy, setArray, delay, shouldContinue);
        break;
      case "insertion":
        await insertionSort(arrCopy, setArray, delay, shouldContinue);
        break;
      default:
        break;
    }

    setSorting(false);
  }, [array, algorithm, speed, sorting]);

  return (
    <div className="container py-4">
      <h2 className="text-center mb-4">Sorting Visualizer</h2>

      {/* Controls */}
      <div className="d-flex flex-wrap justify-content-center gap-3 mb-4">
        <select
          className="form-select w-auto"
          value={algorithm}
          onChange={(e) => setAlgorithm(e.target.value)}
          disabled={sorting}
        >
          <option value="bubble">Bubble Sort</option>
          <option value="quick">Quick Sort</option>
          <option value="merge">Merge Sort</option>
          <option value="selection">Selection Sort</option>
          <option value="insertion">Insertion Sort</option>
        </select>

        <button
          className={`btn btn-${sorting ? "danger" : "success"}`}
          onClick={startSorting}
        >
          {sorting ? "Pause" : "Start"}
        </button>

        <button className="btn btn-secondary" onClick={resetArray} disabled={sorting}>
          Reset
        </button>

        <div className="d-flex align-items-center gap-2">
          <label className="form-label mb-0">Speed</label>
          <input
            type="range"
            min="1"
            max="100"
            value={speed}
            onChange={(e) => setSpeed(Number(e.target.value))}
            className="form-range"
          />
        </div>

        <div className="d-flex align-items-center gap-2">
          <label className="form-label mb-0">Size</label>
          <input
            type="range"
            min="5"
            max="100"
            value={size}
            onChange={(e) => setSize(Number(e.target.value))}
            className="form-range"
            disabled={sorting}
          />
        </div>
      </div>

      <DescriptionBox algorithm={algorithm} />

      {/* Bar Visualization */}
      <div
        className="d-flex align-items-end justify-content-center flex-wrap bg-light p-3"
        style={{ minHeight: "300px", overflowX: "auto" }}
      >
        {array.map((value, index) => (
          <div
            key={`${index}-${value}`}
            style={{
              height: `${value * 2}px`,
              width: `${Math.max(5, 600 / array.length)}px`,
              backgroundColor: "#0d6efd",
              margin: "0 1px",
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Visualizer;
