import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Donar from "./pages/donar";
import { Receiver } from "./pages/Receiver";
import { Route, Routes } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { Home } from "./pages/Home";
import { Footer } from "./components/Footer";
import Ngo from "./pages/Campaign";
import axiosInstance from "./api/axios";
import About from "./pages/About";
import Event from "./pages/Event";
import EducatingInSlums from "./pages/campaign/EducatingInSlums";
import FabrikShala from "./pages/campaign/Fabrikshala";
import EcoHabits from "./pages/campaign/EcoHabits";
import GreenYourPeriods from "./pages/campaign/GreenYourPeriods";
// import JoinUs from "./pages/JoinUs";

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
        {/* <Route path="/campaign" > */}
          <Route path="/campaign/educating_in_slums" element={<EducatingInSlums/>} />
          <Route path="/campaign/fabrikshala" element={<FabrikShala/>} />
          <Route path="/campaign/eco_habits" element={<EcoHabits/>} />
          <Route path="/campaign/green_your_periods" element={<GreenYourPeriods />} />
        {/* </Route> */}
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Event />} />
        {/* <Route path="/joinus" element={<JoinUs />} /> */}
      </Routes>
      <Footer />
    </ChakraProvider>
  );
}

export default App;
