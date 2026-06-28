"use client";
import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <main style={{ padding: "40px" }}>
      <h1>Login to RoCore</h1>

      <button
        onClick={() => signIn("google")}
        style={{ padding: "12px 20px", marginTop: "20px", background: "#4285F4", color: "white", borderRadius: "8px" }}
      >
        Login with Google
      </button>

      <button
        onClick={() => signIn("discord")}
        style={{ padding: "12px 20px", marginTop: "20px", background: "#5865F2", color: "white", borderRadius: "8px" }}
      >
        Login with Discord
      </button>
    </main>
  );
}
