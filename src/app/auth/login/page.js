// app/auth/login/page.js
"use client"; 
import { signIn } from "next-auth/react";

export default function SignIn() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = event.target;

    const result = await signIn("credentials", {
      redirect: false,
      email: email.value,
      password: password.value,
    });

    if (result?.error) {
      alert("Invalid email or password");
    } else {
      window.location.href = "/"; // Weiterleitung nach erfolgreicher Anmeldung
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email:</label>
      <input type="email" name="email" required />
      <label htmlFor="password">Password:</label>
      <input type="password" name="password" required />
      <button type="submit">Sign In</button>
    </form>
  );
}
