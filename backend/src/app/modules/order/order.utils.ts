import Shurjopay, { PaymentResponse, VerificationResponse } from "shurjopay";
import config from "../../config";
import { ObjectId } from "bson";

const shurjopay = new Shurjopay();

shurjopay.config(
  config.sp.endpoint!,
  config.sp.username!,
  config.sp.password!,
  config.sp.prefix!,
  config.sp.return_url!
);

function generateTransactionId(length: number): string {
  return Math.round(
    Math.pow(36, length + 1) - Math.random() * Math.pow(36, length)
  )
    .toString(36)
    .slice(1);
}

const makePaymentAsync = (paymentDetails: any): Promise<PaymentResponse> => {
  return new Promise((resolve, reject) => {
    shurjopay.makePayment(
      paymentDetails,
      (response) => resolve(response), // Success callback
      (error) => reject(error) // Error callback
    );
  });
};

// const initiatePayment = async () => {
//   await shurjopay.makePayment(
//     {
//       amount: 1000,
//       order_id: "order123",
//       currency: "BDT",
//       customer_name: "John Doe",
//       customer_address: "Dhaka",
//       customer_phone: "01712345678",
//       customer_city: "Dhaka",
//       client_ip: req.ip,

//       customer_email: "sdklfj@saldkf.sdf",
//     },
//     (response) => {
//       sendResponse(res, {
//         statusCode: 201,
//         message: "Order placed successfully",
//         data: response,
//       });
//     },
//     (error) => {
//       sendResponse(res, {
//         statusCode: 400,
//         message: error.message,
//         data: error,
//       });
//     }
//   );
// };

const verifyPayment = async (
  sp_trxn_id: string
): Promise<VerificationResponse[]> => {
  return new Promise((resolve, reject) => {
    shurjopay.verifyPayment(
      sp_trxn_id,
      (response) => resolve(response),
      (error) => reject(error)
    );
  });
};

const paymentStatus = async (sp_trxn_id: string) => {
  return new Promise((resolve, reject) => {
    shurjopay.paymentStatus(
      sp_trxn_id,
      (response) => resolve(response),
      (error) => reject(error)
    );
  });
};

export const orderUtils = {
  generateTransactionId,
  makePaymentAsync,
  verifyPayment,
  paymentStatus,
};
