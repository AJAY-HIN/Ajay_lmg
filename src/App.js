import { Route, Routes } from "react-router-dom";
import { Table } from "./components/Table/Table";
import Home from "./Home";
import Navbar from "./components/Nav/Navbar";
import Login from "./components/forms/Login";
import Signup from "./components/forms/Signup";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Table" element={<Table />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
