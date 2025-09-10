import styles from "./DescriptionBox.module.css";

const descriptions = {
  bubble: {
    name: "Bubble Sort",
    description: "Repeatedly compares adjacent elements and swaps them if out of order.",
    time: "O(n²)",
    space: "O(1)",
  },
  quick: {
    name: "Quick Sort",
    description: "Divides and conquers using a pivot for partitioning.",
    time: "O(n log n) average, O(n²) worst",
    space: "O(log n)",
  },
  merge: {
    name: "Merge Sort",
    description: "Divides the array into halves, sorts, and merges them.",
    time: "O(n log n)",
    space: "O(n)",
  },
  selection: {
    name: "Selection Sort",
    description: "Selects the smallest element and moves it to the sorted part.",
    time: "O(n²)",
    space: "O(1)",
  },
  insertion: {
    name: "Insertion Sort",
    description: "Builds the sorted array one item at a time.",
    time: "O(n²)",
    space: "O(1)",
  },
};

const DescriptionBox = ({ algorithm }) => {
  const algo = descriptions[algorithm];

  return (
    <div className={styles.box}>
      <h5 className={styles.title}>{algo.name}</h5>
      <p className={styles.description}>{algo.description}</p>
      <p className={styles.stats}>
        <strong>Time Complexity:</strong> {algo.time} &nbsp;|&nbsp;
        <strong>Space Complexity:</strong> {algo.space}
      </p>
    </div>
  );
};

export default DescriptionBox;

