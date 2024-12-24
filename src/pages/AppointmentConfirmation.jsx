import { useLocation, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const AppointmentConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { addAppointment } = useContext(AppContext); // Access the addAppointment function from the context

  const { doctor, date, time, fees, currencySymbol } = location.state || {};

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleConfirmAppointment = () => {
    setIsModalOpen(true);
    setIsLoading(true);

    const newAppointment = {
      doctor,
      date,
      time,
      fees,
      currencySymbol,
    };

    addAppointment(newAppointment);

    setTimeout(() => {
      setIsLoading(false);
      navigate("/");
      window.scrollTo(0, 0);
    }, 3000);
  };
  return (
    <div className="appointment-confirmation">
      {/* Doctor Details */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div>
          <img
            className="bg-primary w-full sm:max-w-72 rounded-lg"
            src={doctor?.image}
            alt="doctor-image"
          />
        </div>
        <div className="flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
          <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">
            {doctor?.name}{" "}
            <img
              className="w-5"
              src={assets.verified_icon}
              alt="verified icon"
            />
          </p>
          <div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
            <p>
              {doctor?.degree} - {doctor?.speciality}
            </p>
            <button className="py-0.5 px-2 border text-xs rounded-full">
              {doctor?.experience}
            </button>
          </div>

          <p className="text-sm text-gray-500 max-w-[700px] mt-1">
            {doctor?.about}
          </p>
          <p className="text-gray-500 font-medium mt-4">
            Appointment fee:{" "}
            <span className="text-gray-600">
              {currencySymbol}
              {fees}
            </span>
          </p>
        </div>
      </div>

      {/* Appointment Details */}
      <div className="appointment-details mt-6">
        <p className="text-lg font-semibold text-gray-900">
          Appointment Details
        </p>
        <div className="mt-4 text-gray-700">
          <p>
            <strong>Date:</strong> {new Date(date).toLocaleDateString()}
          </p>
          <p>
            <strong>Time:</strong> {time}
          </p>
        </div>
      </div>

      {/* Confirmation Button */}
      <div className="mt-6">
        <button
          onClick={handleConfirmAppointment}
          className="bg-primary text-white text-sm px-14 py-3 my-6 rounded-full font-light"
        >
          {isLoading ? "Confirming..." : "Confirm Appointment"}
        </button>
      </div>
      {/* Modal Confirmation */}
      {isModalOpen && (
        <div className="modal fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="modal-content bg-white rounded-lg p-8 max-w-sm mx-auto text-center">
            <p className="text-lg font-semibold text-gray-700">
              Your appointment is being confirmed!
            </p>
            {isLoading && (
              <div className="mt-4">
                <div className="loader border-t-4 border-b-4 border-primary rounded-full w-12 h-12 mx-auto animate-spin"></div>
                <p className="mt-2 text-gray-600">Please wait...</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AppointmentConfirmation;
