import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import H from "./components/Home";
import { Dashboard } from "./components/Dashboard";
import { Login } from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <>
        <Appbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/h" element={<H />} />
          <Route path="/d" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

function Appbar() {
  const navigate = useNavigate();

  return (
    <>
      <div
        style={{ background: "black", borderRadius: "8px", padding: "8px" }}
        className="hover:shadow-lg hover:shadow-black"
      >
        <h1 className="text-6xl text-blue-500 font-bold hover:text-blue-300">
          topbar
        </h1>
      </div>

      <div className="btns flex flex-row justify-center gap-[40px] mt-[40px] h-[100px]">
        <button
          className="w-28 h-12 bg-gradient-to-r from-blue-500 to-blue-700 rounded-md text-white hover:shadow-black hover:shadow-2xl hover:bg-gradient-to-l"
          onClick={() => {
            window.location.href = "/h";
          }}
        >
          Home
        </button>
        <button
          className="w-28 h-12 bg-gradient-to-r from-blue-500 to-blue-700 rounded-md text-white hover:shadow-black hover:shadow-2xl hover:bg-gradient-to-l"
          onClick={() => {
            window.location.href = "/d";
          }}
        >
          DashBoard
        </button>
        <button
          className="w-28 h-12 bg-gradient-to-r from-blue-500 to-blue-700 rounded-md text-white hover:shadow-black hover:shadow-2xl hover:bg-gradient-to-l"
          onClick={() => {
            navigate("/login");
          }}
        >
          Login
        </button>
      </div>
    </>
  );
}

function LandingPage() {
  return (
    <div className="flex justify-center items-center h-screen">
      <h1 className="text-6xl text-black font-bold hover:text-blue-300 hover:shadow-xl hover:shadow-blue-800 bg-gradient-to-tr from-blue-600 to-blue-300 p-4 rounded-xl hover:bg-gradient-to-tl hover:from-purple-600  hover:to-violet-300">
        LandingPage
      </h1>
    </div>
  );
}

export default App;
