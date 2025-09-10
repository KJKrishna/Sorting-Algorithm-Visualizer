import React, { useState, useEffect, useRef, useCallback } from "react";
import styles from "./VisualizerTemplate.module.css";
import { generateRandomArray } from "../algorithms/utils";
import DescriptionBox from "./DescriptionBox";


const VisualizerTemplate = ({ algorithmName, sortFunction }) => {
  const [array, setArray] = useState([]);
  const [sorting, setSorting] = useState(false);
  const [speed, setSpeed] = useState(50);
  const [size, setSize] = useState(30);
  const shouldContinue = useRef(true);
  const [highlightIndices, setHighlightIndices] = useState({ i: null, j: null, swap: null });;


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

    const delay = 1000 - speed * 9;



  await sortFunction(arrCopy, setArray, delay, shouldContinue, setHighlightIndices);
  setHighlightIndices({ i: null, j: null, swap: null });



  //   await sortFunction(arrCopy, setArray, delay, shouldContinue);
  //   setSorting(false);
  }, [array, speed, sorting, sortFunction]);

  return (
    <div className={styles.container}>
      <h4 className={styles.heading}>{algorithmName} Sort Visualizer</h4>

      <div className={styles.controls}>
        <button
          className={styles.startButton}
          onClick={startSorting}
        >
          {sorting ? "Pause" : "Start"}
        </button>

        <button
          className={styles.resetButton}
          onClick={resetArray}
          disabled={sorting}
        >
          Reset
        </button>

        <div className={styles.sliderGroup}>
          <label>Speed</label>
          <input
            type="range"
            min="1"
            max="100"
            value={speed}
            onChange={(e) => setSpeed(Number(e.target.value))}
          />
        </div>

        <div className={styles.sliderGroup}>
          <label>Size</label>
          <input
            type="range"
            min="5"
            max="100"
            value={size}
            onChange={(e) => setSize(Number(e.target.value))}
            disabled={sorting}
          />
        </div>
      </div>

      <DescriptionBox algorithm={algorithmName} />

      <div className={styles.barContainer}>

        {array.map((value, index) => (
          <div
            key={index}
            className={styles.bar}
            style={{
              height: `${value * 3}px`,
              width: `${Math.max(5, 600 / array.length)}px`,
              // backgroundColor: index === highlightIndex ? "#81d4fa" : "#f57c00",
              backgroundColor:highlightIndices.swap?.includes(index)
              ? "#e53935"   // red for swap
              : highlightIndices.i === index
              ? "#43a047"   // green for outer loop index i
              : highlightIndices.j === index
              ? "#ffeb3b"   // yellow for comparison index j
              : "#f57c00",  // default orange
            }}
          ></div>









          // <div
          //   key={index}
          //   className={styles.bar}
          //   style={{ height: `${value * 2}px`, width: `${Math.max(5, 600 / array.length)}px` }}
          // ></div>
        ))}
      </div>
    </div>
  );
};

export default VisualizerTemplate;
