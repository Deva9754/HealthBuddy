//   return (
//     <div>
//       <h2>Pay ₹{amount}</h2>
//       <button
//         onClick={handlePayment}
//         disabled={isProcessing}
//         className="py-2 px-6 border rounded text-white bg-blue-500 hover:bg-blue-600"
//       >
//         {isProcessing ? "Processing..." : "Pay with Razorpay"}
//       </button>
//     </div>
//   );
// };

// // PropTypes validation for amount
// RazorpayButton.propTypes = {
//   amount: PropTypes.number.isRequired,
// };

// export default RazorpayButton;

import PropTypes from "prop-types";
import { useState } from "react";

const RazorpayButton = ({ amount }) => {
  const [isProcessing, setIsProcessing] = useState(false);

  if (amount <= 0) {
    return <p>Error: Invalid amount</p>;
  }

  const handlePayment = async () => {
    setIsProcessing(true);
    console.log("Amount passed to Razorpay: ", amount); // Debugging log to confirm amount is correct

    try {
      // Step 1: Create an order from the backend
      const response = await fetch("http://localhost:5000/api/createOrder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount }),
      });

      const orderData = await response.json();
      console.log("Order Data: ", orderData);

      if (!orderData || !orderData.id) {
        alert("Error creating order.");
        setIsProcessing(false);
        return;
      }

      // Step 2: Configure Razorpay payment options
      const options = {
        key: "rzp_test_nsBoHTjeS3qpls", // Your Razorpay key
        amount: amount * 100, // Convert amount to paise (1 INR = 100 paise)
        currency: "INR",
        order_id: orderData.id, // Order ID from backend
        handler: async (response) => {
          const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
            response;

          console.log("Payment Response:", response);

          // Step 3: Verify the payment on the backend
          const verificationResponse = await fetch(
            "http://localhost:5000/api/verifyPayment",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                paymentId: razorpay_payment_id,
                orderId: razorpay_order_id,
                signature: razorpay_signature,
              }),
            }
          );

          const result = await verificationResponse.text();
          alert(result); // Display verification result
          setIsProcessing(false);
        },
        prefill: {
          name: "Test User",
          email: "testuser@example.com",
          contact: "1234567890",
        },
        theme: {
          color: "#3399cc", // Change color as needed
        },
      };

      if (window.Razorpay) {
        const razorpay = new window.Razorpay(options);
        razorpay.open(); // Open Razorpay payment modal
      } else {
        console.error("Razorpay is not available.");
        alert("Razorpay not available.");
      }
    } catch (error) {
      console.error("Error during payment process:", error);
      alert("Error processing payment.");
      setIsProcessing(false);
    }
  };

  return (
    <button onClick={handlePayment} disabled={isProcessing} className="btn-pay">
      {isProcessing ? "Processing..." : "Pay with Razorpay"}
    </button>
  );
};

RazorpayButton.propTypes = {
  amount: PropTypes.number.isRequired,
};

export default RazorpayButton;
