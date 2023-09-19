import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePageLayout from "./layouts/HomePageLayout";
import HomePage from "./Pages/HomePage/HomePage";

function App() {
  return (
    <div className="App">
      <HomePageLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <span className="ti-shopping-cart"></span>
      </HomePageLayout>
    </div>
  );
}

export default App;
