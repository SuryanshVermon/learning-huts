import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Donar from "./pages/donar";
import { Receiver } from "./pages/Receiver";
import { Route, Routes } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { Home } from "./pages/Home";
import { Footer } from "./components/Footer";
import Ngo from "./pages/Ngo";
import axiosInstance from "./api/axios";
import About from "./pages/about-us";
import Event from "./pages/events";

function App() {
  axiosInstance
    .get("/")
    .then((res) => {
      console.log(res.data.message);
    })
    .catch((err) => {
      toast.error("API not working");
    });
    

  return (
    <ChakraProvider>
      <Toaster position="top-center" />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donar" element={<Donar />} />
        <Route path="/receiver" element={<Receiver />} />
        <Route path="/ngo" element={<Ngo />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Event/>} />
      </Routes>
      <Footer />
    </ChakraProvider>
  );
}

export default App;
