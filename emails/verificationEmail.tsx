import * as React from "react";

interface EmailTemplateProps {
  username: string;
  otp: string;
}

export function EmailTemplate({ username, otp }: EmailTemplateProps) {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f4f4f5",
        padding: "40px 20px",
        color: "#18181b",
      }}
    >
      <div
        style={{
          maxWidth: "500px",
          margin: "0 auto",
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          padding: "40px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        }}
      >
        <h1
          style={{
            margin: "0 0 10px",
            fontSize: "28px",
            fontWeight: "700",
          }}
        >
          Verify your account
        </h1>

        <p
          style={{
            margin: "0 0 24px",
            fontSize: "16px",
            color: "#52525b",
            lineHeight: "1.6",
          }}
        >
          Hi <strong>{username}</strong>,
        </p>

        <p
          style={{
            margin: "0 0 24px",
            fontSize: "15px",
            color: "#52525b",
            lineHeight: "1.6",
          }}
        >
          Use the One-Time Password below to verify your account. This OTP is
          valid for a limited time.
        </p>

        <div
          style={{
            backgroundColor: "#f4f4f5",
            borderRadius: "10px",
            padding: "20px",
            textAlign: "center",
            marginBottom: "24px",
          }}
        >
          <p
            style={{
              margin: "0 0 8px",
              fontSize: "13px",
              color: "#71717a",
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            Your OTP
          </p>

          <div
            style={{
              fontSize: "32px",
              fontWeight: "700",
              letterSpacing: "8px",
              color: "#18181b",
            }}
          >
            {otp}
          </div>
        </div>

        <p
          style={{
            margin: "0 0 8px",
            fontSize: "13px",
            color: "#71717a",
            lineHeight: "1.5",
          }}
        >
          If you did not request this OTP, you can safely ignore this email.
        </p>

        <p
          style={{
            margin: "24px 0 0",
            fontSize: "13px",
            color: "#a1a1aa",
          }}
        >
          © {new Date().getFullYear()} Your App. All rights reserved.
        </p>
      </div>
    </div>
  );
}
