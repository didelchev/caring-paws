import React from "react";
import { Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./contexts/AuthContext";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import PetDetails from "./pages/PetDetails/PetDetails";
import PostPet from "./pages/PostPet/PostPet";
import EditPet from "./pages/EditPet/EditPet";
import PetCatalog from "./pages/PetCatalog/PetCatalog";
import Logout from "./components/Logout/Logout";
import Dashboard from "./pages/Dashboard/Dashboard";

const App = () => {
  return (
    <AuthContextProvider>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/petcatalog" element={<PetCatalog />} />
          <Route path="/petcatalog/:id" element={<PetDetails />} />
          <Route path="/post-pet" element={<PostPet />} />
          <Route path="/petcatalog/:id/edit" element={<EditPet />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </AuthContextProvider>
  );
};

export default App;