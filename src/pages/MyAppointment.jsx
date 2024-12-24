// import { useState, useContext } from "react";
// import { AppContext } from "../context/AppContext";
// import { useNavigate } from "react-router-dom";

// const MyAppointment = () => {
//   const { appointments, cancelAppointment } = useContext(AppContext);
//   const navigate = useNavigate();

//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [appointmentToCancel, setAppointmentToCancel] = useState(null);

//   const handleCancelClick = (appointment) => {
//     setAppointmentToCancel(appointment);
//     setIsModalOpen(true);
//   };
//   const handlePayOnline = (appointments) => {
//     navigate("/paymentConfirmation", {
//       state: { appointments: appointments }, // Pass the appointment data to the payment confirmation page
//     });
//   };

//   const handleConfirmCancel = () => {
//     if (appointmentToCancel) {
//       cancelAppointment(appointmentToCancel);
//     }
//     setIsModalOpen(false);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <div>
//       <p className="pb-3 mt-12 font-medium text-zinc-700 border-b">
//         My Appointment
//       </p>
//       <div>
//         {appointments.length === 0 ? (
//           <p>No appointments confirmed yet.</p>
//         ) : (
//           appointments.map((appointment, index) => (
//             <div
//               className="grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b"
//               key={index}
//             >
//               <div>
//                 <img
//                   className="w-32 bg-indigo-50"
//                   src={appointment.doctor.image}
//                   alt=""
//                 />
//               </div>
//               <div className="flex-1 text-sm text-zinc-600">
//                 <p className="text-neutral-800 font-semibold">
//                   {appointment.doctor.name}
//                 </p>
//                 <p>{appointment.doctor.speciality}</p>
//                 <p className="text-zinc-800 font-medium mt-1">Address:</p>
//                 <p className="text-xs">{appointment.doctor.address.line1}</p>
//                 <p className="text-xs">{appointment.doctor.address.line2}</p>
//                 <p className="text-xs mt-1">
//                   <span className="text-sm text-neutral-700 font-medium">
//                     Date & Time:
//                   </span>
//                   {new Date(appointment.date).toLocaleDateString()} |{" "}
//                   {appointment.time}
//                 </p>
//               </div>
//               <div className="flex flex-col gap-2 justify-end">
//                 {appointment.paymentStatus !== "paid" && (
//                   <button
//                     onClick={() => handlePayOnline(appointment)} // Redirect to payment confirmation page
//                     className="text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded hover:bg-primary hover:text-white transition-all duration-300"
//                   >
//                     Pay Online
//                   </button>
//                 )}
//                 <button
//                   onClick={() => handleCancelClick(appointment)} // Open modal to confirm cancellation
//                   className="text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded hover:bg-red-600 hover:text-white transition-all duration-300"
//                 >
//                   Cancel appointment
//                 </button>
//               </div>
//             </div>
//           ))
//         )}
//       </div>

//       {/* Modal for confirmation */}
//       {isModalOpen && (
//         <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
//           <div className="bg-white rounded-lg p-8 max-w-sm mx-auto text-center">
//             <p className="text-lg font-semibold text-gray-700">
//               Are you sure you want to cancel this appointment?
//             </p>
//             <div className="mt-4 flex justify-center gap-4">
//               <button
//                 onClick={handleConfirmCancel}
//                 className="bg-red-500 text-white py-2 px-6 rounded-md hover:bg-red-600"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleCloseModal}
//                 className="bg-primary text-white py-2 px-6 rounded-md hover:bg-gray-600"
//               >
//                 Keep Appointment
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MyAppointment;

// MyAppointment.jsx
import { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const MyAppointment = () => {
  const { appointments, cancelAppointment } = useContext(AppContext);
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [appointmentToCancel, setAppointmentToCancel] = useState(null);

  const handleCancelClick = (appointment) => {
    setAppointmentToCancel(appointment);
    setIsModalOpen(true);
  };

  const handlePayOnline = (appointment) => {
    navigate("/paymentConfirmation", {
      state: { appointments: appointment }, // Pass the current appointment to PaymentConfirmation
    });
  };

  const handleConfirmCancel = () => {
    if (appointmentToCancel) {
      cancelAppointment(appointmentToCancel);
    }
    setIsModalOpen(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <p className="pb-3 mt-12 font-medium text-zinc-700 border-b">
        My Appointment
      </p>
      <div>
        {appointments.length === 0 ? (
          <p>No appointments confirmed yet.</p>
        ) : (
          appointments.map((appointment, index) => (
            <div
              className="grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b"
              key={index}
            >
              <div>
                <img
                  className="w-32 bg-indigo-50"
                  src={appointment.doctor.image}
                  alt=""
                />
              </div>
              <div className="flex-1 text-sm text-zinc-600">
                <p className="text-neutral-800 font-semibold">
                  {appointment.doctor.name}
                </p>
                <p>{appointment.doctor.speciality}</p>
                <p className="text-zinc-800 font-medium mt-1">Address:</p>
                <p className="text-xs">{appointment.doctor.address.line1}</p>
                <p className="text-xs">{appointment.doctor.address.line2}</p>
                <p className="text-xs mt-1">
                  <span className="text-sm text-neutral-700 font-medium">
                    Date & Time:
                  </span>
                  {new Date(appointment.date).toLocaleDateString()} |{" "}
                  {appointment.time}
                </p>
              </div>
              <div className="flex flex-col gap-2 justify-end">
                {appointment.paymentStatus !== "paid" && (
                  <button
                    onClick={() => handlePayOnline(appointment)}
                    className="text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    Pay Online
                  </button>
                )}
                <button
                  onClick={() => handleCancelClick(appointment)}
                  className="text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded hover:bg-red-600 hover:text-white transition-all duration-300"
                >
                  Cancel appointment
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Modal for confirmation */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-8 max-w-sm mx-auto text-center">
            <p className="text-lg font-semibold text-gray-700">
              Are you sure you want to cancel this appointment?
            </p>
            <div className="mt-4 flex justify-center gap-4">
              <button
                onClick={handleConfirmCancel}
                className="bg-red-500 text-white py-2 px-6 rounded-md hover:bg-red-600"
              >
                Cancel
              </button>
              <button
                onClick={handleCloseModal}
                className="bg-primary text-white py-2 px-6 rounded-md hover:bg-gray-600"
              >
                Keep Appointment
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyAppointment;
