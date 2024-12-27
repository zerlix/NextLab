"use client";
import { useSession } from "next-auth/react";


export default function Dashboard() {
  const { data: session } = useSession();

  if (!session) {
    return <p>Bitte anmelden!</p>;
  }

  return (
    <div>
      <h1>Willkommen {session.user.name}</h1>
      <p>Deine E-Mail: {session.user.email}</p>
    </div>
  );
}