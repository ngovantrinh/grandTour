import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePageLayout from "./layouts/HomePageLayout";
import HomePage from "./Pages/HomePage/HomePage";
import MenuRight from "components/MenuRight";

function App() {
  return (
    <div className="app">
      <MenuRight />
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
