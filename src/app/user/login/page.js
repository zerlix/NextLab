// app/auth/login/page.js
"use client";
import { signIn } from "next-auth/react";

export default function SignIn() {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = event.target;
    const callbackUrl = searchParams.get("callbackUrl") || "/user/profile";

    const result = await signIn("credentials", {
      redirect: false,
      email: email.value,
      password: password.value,
    });

    if (result?.error) {
      alert("Invalid email or password");
    } else {
      // Weiterleitung zur Callback-URL oder Standard-Seite
      router.push(callbackUrl);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email:</label>
      <input type="email" name="email" required />
      <label htmlFor="password">Passwort:</label>
      <input type="password" name="password" required />
      <button type="submit">Einloggen</button>
    </form>
  );
}
