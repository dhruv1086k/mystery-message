import { resend } from "@/app/lib/resend";
import { EmailTemplate } from "../emails/verificationEmail";
import { ApiResponse } from "../types/ApiResponse";

export async function SendVerificationEmail(
  email: string,
  username: string,
  verifyCode: string,
): Promise<ApiResponse> {
  try {
    await resend.emails.send({
      from: "<onboarding@resend.dev>",
      to: email,
      subject: "Mystery Message | Verification Code",
      react: EmailTemplate({ username, otp: verifyCode }),
    });

    return { success: true, message: "Verification email sent successfully" };
  } catch (err) {
    console.error("Error sending verification email", err);
    return { success: false, message: "Failed to send verification email" };
  }
}
