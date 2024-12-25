import { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";

const PaymentConfirmation = () => {
  const location = useLocation();
  const [appointment, setAppointment] = useState(null);
  const [redirectToHome, setRedirectToHome] = useState(false);
  const [paymentError, setPaymentError] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top of the page
  }, []);

  useEffect(() => {
    // Extract the appointment data passed from the previous page
    if (location.state && location.state.appointment) {
      setAppointment(location.state.appointment);
      console.log("Received appointment data:", location.state.appointment);
    } else {
      console.error("No appointment data passed!");
    }
  }, [location.state]);

  const handlePayment = () => {
    if (appointment) {
      // Proceed with Razorpay payment gateway integration
      console.log("Proceeding to payment with amount:", appointment.fees);

      const options = {
        key: "rzp_test_2M8trlzYdAwjMC", // Your Razorpay Key ID
        amount: appointment.fees * 100, // Convert to paise
        currency: "INR",
        name: appointment.doctor.name,
        description: `Consultation with Dr. ${appointment.doctor.name}`,
        image: appointment.doctor.image,
        handler: function (response) {
          console.log("Payment successful:", response);

          const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
            response;

          if (
            !razorpay_payment_id ||
            !razorpay_order_id ||
            !razorpay_signature
          ) {
            console.error("Missing payment details");
            setPaymentError(true); // Trigger error state
            return;
          }

          // Call backend API to verify the payment
          fetch("http://localhost:5000/api/verifyPayment", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              razorpay_payment_id,
              razorpay_order_id,
              razorpay_signature,
            }),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.status === "success") {
                console.log("Payment verification successful");
                setRedirectToHome(true); // Trigger redirection
              } else {
                console.error("Payment verification failed");
                setPaymentError(true); // Trigger error state
              }
            })
            .catch((err) => {
              console.error("Error in payment verification:", err);
              setPaymentError(true); // Trigger error state
            });
        },
        prefill: {
          name: "Devashish Sahu", // You can dynamically set this based on user data if available
          email: "john.doe@example.com",
        },
        notes: {
          appointmentId: appointment.id, // Add any custom notes if needed
        },
        // Cancel handler (will be invoked if user cancels the payment)
        modal: {
          ondismiss: function () {
            console.log("Payment modal dismissed (cancelled by user)");
            setPaymentError(true); // Trigger error state
          },
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } else {
      console.error(
        "Appointment data is missing, cannot proceed with payment."
      );
    }
  };

  // If `redirectToHome` is true, redirect to the home page
  if (redirectToHome) {
    console.log("Redirecting to home...");
    return <Navigate to="/" />;
  }

  // Show an error message if payment failed or was cancelled
  if (paymentError) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
          <h1 className="text-2xl font-bold text-red-600 mb-4">
            Payment Failed or Cancelled
          </h1>
          <p className="text-lg mb-4">Please try again or contact support.</p>
          <button
            onClick={() => setRedirectToHome(true)}
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Go to Home
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h1 className="text-2xl font-bold text-center mb-6">
          Payment Confirmation
        </h1>
        {appointment ? (
          <div>
            <p className="text-xl font-medium mb-2">
              <span className="font-semibold">Doctor:</span>{" "}
              {appointment.doctor.name}
            </p>
            <p className="text-lg mb-2">
              <span className="font-semibold">Speciality:</span>{" "}
              {appointment.doctor.speciality}
            </p>
            <p className="text-lg mb-4">
              <span className="font-semibold">Fees:</span> ₹{appointment.fees}
            </p>
            <button
              onClick={handlePayment}
              className="bg-primary text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300 w-full"
            >
              Pay Now
            </button>
          </div>
        ) : (
          <p className="text-lg text-center">Loading appointment details...</p>
        )}
      </div>
    </div>
  );
};

export default PaymentConfirmation;
