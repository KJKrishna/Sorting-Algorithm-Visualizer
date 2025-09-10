// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AnimatedHeader from "./components/AnimatedHeader";
import BubbleSort from "./pages/BubbleSort";
import SelectionSort from "./pages/SelectionSort";
import InsertionSort from "./pages/InsertionSort";
import QuickSort from "./pages/QuickSort";
import MergeSort from "./pages/MergeSort";

function App() {
  return (
    <>
      <AnimatedHeader />
      <Navbar />
      <Routes>
        <Route path="/bubble" element={<BubbleSort />} />
        <Route path="/selection" element={<SelectionSort />} />
        <Route path="/insertion" element={<InsertionSort />} />
        <Route path="/quick" element={<QuickSort />} />
        <Route path="/merge" element={<MergeSort />} />
        {/* Optional fallback */}
        <Route path="*" element={<BubbleSort />} />
      </Routes>
    </>
  );
}

export default App;



