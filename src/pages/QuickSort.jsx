import VisualizerTemplate from "../components/VisualizerTemplate";
import { quickSort } from "../algorithms/quickSort";

const QuickSort = () => (
  <VisualizerTemplate algorithmName="quick" sortFunction={(arr, set, d, ref) =>
    quickSort(arr, 0, arr.length - 1, set, d, ref)} />
);

export default QuickSort;
