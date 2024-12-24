// import { useState, useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { AppContext } from "../context/AppContext";
// import { useContext } from "react";

// const PaymentConfirmation = () => {
//   const navigate = useNavigate();
//   const { updatePaymentStatus } = useContext(AppContext);
//   const location = useLocation();
//   const { appointments } = location.state || {};

//   const [isLoading, setIsLoading] = useState(false);
//   const [paymentSuccess, setPaymentSuccess] = useState(false);

//   useEffect(() => {
//     if (!appointments) {
//       navigate("/");
//       return;
//     }

//     setIsLoading(true);
//     setTimeout(() => {
//       setIsLoading(false);
//       setPaymentSuccess(true);

//       updatePaymentStatus(appointments);

//       setTimeout(() => {
//         navigate("/");
//       }, 3000);
//     }, 2000);
//   }, [appointments, navigate, updatePaymentStatus]);

//   return (
//     <div className="payment-confirmation">
//       {isLoading ? (
//         <div className="loading">
//           <p>Processing payment...</p>
//           <div className="loader border-t-4 border-b-4 border-primary rounded-full w-12 h-12 mx-auto animate-spin"></div>
//         </div>
//       ) : (
//         <>
//           {paymentSuccess && (
//             <div className="payment-success text-center">
//               <h2 className="text-2xl font-semibold">Payment Completed</h2>
//               <p>Your payment has been successfully processed!</p>
//               <div className="mt-4">
//                 <div className="loader border-t-4 border-b-4 border-green-500 rounded-full w-12 h-12 mx-auto animate-spin"></div>
//                 <p className="mt-2">Redirecting to home page...</p>
//               </div>
//             </div>
//           )}
//         </>
//       )}
//     </div>
//   );
// };

// export default PaymentConfirmation;

// PaymentConfirmation.jsx

import { useState, useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const PaymentConfirmation = () => {
  const navigate = useNavigate();
  const { updatePaymentStatus } = useContext(AppContext);
  const location = useLocation();
  const { appointments } = location.state || {};

  const [isLoading, setIsLoading] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  useEffect(() => {
    if (!appointments) {
      navigate("/");
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setPaymentSuccess(true);

      updatePaymentStatus(appointments);

      setTimeout(() => {
        navigate("/");
      }, 3000);
    }, 2000);
  }, [appointments, navigate, updatePaymentStatus]);

  return (
    <div className="payment-confirmation">
      {isLoading ? (
        <div className="loading">
          <p>Processing payment...</p>
          <div className="loader border-t-4 border-b-4 border-primary rounded-full w-12 h-12 mx-auto animate-spin"></div>
        </div>
      ) : (
        <div>
          {paymentSuccess && (
            <div className="payment-success text-center">
              <h2 className="text-2xl font-semibold">Payment Completed</h2>
              <p>Your payment has been successfully processed!</p>
              <div className="mt-4">
                <div className="loader border-t-4 border-b-4 border-green-500 rounded-full w-12 h-12 mx-auto animate-spin"></div>
                <p className="mt-2">Redirecting to home page...</p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PaymentConfirmation;
