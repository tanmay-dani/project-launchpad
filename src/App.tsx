import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Adobe from "./pages/Adobe";
import ThankYou from "./pages/ThankYou";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/adobe" element={<Adobe />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
