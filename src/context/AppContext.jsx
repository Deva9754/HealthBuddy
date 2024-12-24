import { createContext, useEffect, useState } from "react";
import { doctors } from "../assets/assets";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [token, setToken] = useState(null);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const storedToken = localStorage.getItem("userToken");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  useEffect(() => {
    if (token) {
      localStorage.setItem("userToken", token);
    } else {
      localStorage.removeItem("userToken");
    }
  }, [token]);

  const addAppointment = (appointment) => {
    setAppointments((prevAppointments) => [...prevAppointments, appointment]);
  };

  const updatePaymentStatus = (appointmentToUpdate) => {
    setAppointments((prevAppointments) =>
      prevAppointments.map((appointment) =>
        appointment.id === appointmentToUpdate.id
          ? { ...appointment, paymentStatus: "paid" }
          : appointment
      )
    );
  };

  const cancelAppointment = (appointmentToCancel) => {
    setAppointments((prevAppointments) =>
      prevAppointments.filter(
        (appointment) => appointment !== appointmentToCancel
      )
    );
  };
  const currencySymbol = "$";
  const value = {
    doctors,
    currencySymbol,
    token,
    setToken,
    appointments,
    addAppointment,
    cancelAppointment,
    updatePaymentStatus,
  };
  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
export default AppContextProvider;
