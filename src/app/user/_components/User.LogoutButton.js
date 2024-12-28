// app/user/_components/User.LogoutButton.js
"use client";
import { signOut } from "next-auth/react";

export default function LogoutButton() {
  const handleSignOut = async () => {
    await signOut({ callbackUrl: "/" }); // Weiterleitung nach Abmeldung
  };

  return (
    <button onClick={handleSignOut}>
      Abmelden
    </button>
  );
}