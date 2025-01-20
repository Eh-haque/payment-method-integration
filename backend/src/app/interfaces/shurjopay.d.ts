declare module "shurjopay" {
  import { Logger } from "winston";

  interface Credentials {
    root_url: string;
    merchant_username: string;
    merchant_password: string;
    merchant_key_prefix: string;
    return_url: string;

    readonly token_url: string;
    readonly verification_url: string;
    readonly payment_status_url: string;
  }

  interface TokenDetails {
    token: string;
    token_type: string;
    token_create_time: string; // Format: YYYY-MM-DD hh:mm:ssa
    token_valid_duration: number; // Duration in seconds
  }

  interface PaymentRequest {
    amount: number;
    currency: string;
    order_id: string;
    customer_name: string;
    customer_phone: string;
    customer_address: string;
    customer_city: string;
    client_ip?: string;
    customer_email: string;
    prefix?: string;
    store_id?: string;
    token?: string;
    return_url?: string;
    cancel_url?: string;
  }

  interface PaymentResponse {
    checkout_url: string;
    sp_order_id: string;
    sp_code: string;
    message: string;
    execute_url: string;
  }

  interface VerificationResponse {
    sp_order_id: string;
    sp_code: string;
    sp_message: string;
    amount: number;
    currency: string;
    transaction_status: string;
  }

  type Callback<T> = (response: T) => void;
  type ErrorHandler = (error: any) => void;

  class Shurjopay {
    data: { sp_token?: TokenDetails };
    credentials: Credentials;
    logger: Logger;

    constructor(): Shurjopay;

    config(
      root_url: string,
      merchant_username: string,
      merchant_password: string,
      merchant_key_prefix: string,
      return_url: string
    ): void;

    randomString(length: number): string;

    log(message: string, level: "info" | "warn" | "error"): void;

    authentication(callback: Callback<TokenDetails>): void;

    makePayment(
      checkout_params: PaymentRequest,
      checkout_callback?: Callback<PaymentResponse>,
      error_handler?: ErrorHandler
    ): void;

    verifyPayment(
      order_id: string,
      callback: Callback<VerificationResponse>,
      error_handler: ErrorHandler
    ): void;

    paymentStatus(
      order_id: string,
      callback: Callback<VerificationResponse>,
      error_handler: ErrorHandler
    ): void;

    token_valid(): boolean;
  }

  export default Shurjopay;
}
