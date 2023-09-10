import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { RoutePath } from "./Utilities/UrlPath/RoutePath";
import Home from "./screens/Home";
import SideNav from "./components/SideNav";
import PlayMusic from "./screens/SongDetail";
import SignUp from "./screens/SignUp";
import SignIn from "./screens/SignIn";
import CreatePlayList from "./screens/CreatePlayList";
import PlayListDetail from "./screens/PlayListDetail";
import toast, { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <div className="container-fluid">
        <SideNav />

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path={RoutePath.homePage} element={<Home />} />
            <Route path={RoutePath.browseId} element={<PlayMusic />} />
            <Route path={RoutePath.registerPage} element={<SignUp />} />
            <Route path={RoutePath.loginPage} element={<SignIn />} />
            <Route
              path={RoutePath.CreatePlayList}
              element={<CreatePlayList />}
            />
            <Route path={RoutePath.PlayListId} element={<PlayListDetail />} />
          </Routes>
        </BrowserRouter>
        <Toaster position="bottom-right" reverseOrder={false} />
      </div>
    </div>
  );
}

export default App;
