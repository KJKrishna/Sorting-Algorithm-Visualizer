import VisualizerTemplate from "../components/VisualizerTemplate";
import { bubbleSort } from "../algorithms/bubbleSort";

const BubbleSort = () => (
  <VisualizerTemplate algorithmName="bubble" sortFunction={bubbleSort} />
);

export default BubbleSort;
