import VisualizerTemplate from "../components/VisualizerTemplate";
import { selectionSort } from "../algorithms/selectionSort";

const SelectionSort = () => (
  <VisualizerTemplate algorithmName="selection" sortFunction={selectionSort} />
);

export default SelectionSort;
