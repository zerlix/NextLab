// app/user/login/page.js
"use client";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";

export default function SignIn() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/user/"; // Standard-Weiterleitung ist "/"

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
      //// TODO: Funktioniert nicht
      // Weiterleitung zur Callback-URL oder Standard-Seite 
      router.push(callbackUrl);
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

