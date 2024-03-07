import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import H from "./components/Home";
import { Dashboard } from "./components/Dashboard";

function App() {
  const routers = [
    {
      route: "/dash",
      comp: Dashboard,
    },
  ];

  return (
    <>
      {/* <LandingPage /> */}

      <BrowserRouter>
        <Routes>
          {/* {routers.map(({ route, comp }) => (
            <Route key={route} path={route} element={<comp/>} />
          ))} */}

          <Route path="/" element={<LandingPage />} />
          <Route path="/h" element={<H />} />
          <Route path="/d" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

function LandingPage() {
  return (
    <>
      <div className="flex justify-center items-center h-screen ">
        <h1
          className="text-6xl text-black font-bold hover:text-blue-300 hover:shadow-xl hover:shadow-blue-800 bg-gradient-to-tr from-blue-600 to-blue-300
          p-4 rounded-xl hover:bg-gradient-to-tl hover:from-purple-600  hover:to-violet-300
         "
        >
          LandingPage
        </h1>
      </div>
    </>
  );
}
export default App;
