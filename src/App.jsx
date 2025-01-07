// import "./App.css";
// import { Route, Routes } from "react-router-dom";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Doctors from "./pages/Doctors";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import MyAppointment from "./pages/MyAppointment";

// export default App;

import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Doctors from "./pages/Doctors";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MyAppointment from "./pages/MyAppointment";
import MyProfile from "./pages/MyProfile";
import Appointments from "./pages/Appointments";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppointmentConfirmation from "./pages/AppointmentConfirmation";
import PaymentConfirmation from "./pages/PaymentConfirmation";
import RazorpayButton from "./components/RazorpayButton";

function App() {
  const { token } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  return (
    <>
      <div className="mx-4 sm:mx-[10%]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/doctors/:speciality" element={<Doctors />} />
          <Route path="/login" element={<Login />} />
          <Route path="/my-appointments" element={<MyAppointment />} />
          <Route path="/my-profile" element={<MyProfile />} />
          <Route path="/appointment/:docId" element={<Appointments />} />
          <Route
            path="/appointment-confirmation"
            element={<AppointmentConfirmation />}
          />
          <Route
            path="/paymentConfirmation"
            element={<PaymentConfirmation />}
          />
          <Route path="/RazorpayButton" element={<RazorpayButton />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
