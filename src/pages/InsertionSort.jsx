import VisualizerTemplate from "../components/VisualizerTemplate";
import { insertionSort } from "../algorithms/insertionSort";

const InsertionSort = () => (
  <VisualizerTemplate algorithmName="insertion" sortFunction={insertionSort} />
);

export default InsertionSort;
