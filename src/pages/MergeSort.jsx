import VisualizerTemplate from "../components/VisualizerTemplate";
import { mergeSort } from "../algorithms/mergeSort";

const MergeSort = () => (
  <VisualizerTemplate algorithmName="merge" sortFunction={mergeSort} />
);

export default MergeSort;
