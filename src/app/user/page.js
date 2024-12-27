"use client"; 
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation"; // Importiere den Router
import { useEffect } from "react";
import LogoutButton from "./components/Logout.Button";

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    // Redirect zum Login, wenn der Benutzer nicht eingeloggt ist
    if (status === "unauthenticated") {
      router.push("/user/login");
    }
  }, [status, router]); // Effekt wird ausgelöst, wenn sich der Status oder der Router ändert

  if (status === "loading") {
    return <p>Lade...</p>; // Zeige einen Ladezustand an, während die Session geprüft wird
  }

  if (!session) {
    return null; // Rückgabe null, während der Redirect verarbeitet wird
  }

  return (
    <div>
      <h1>Willkommen {session.user.name}</h1>
      <p>Deine E-Mail: {session.user.email}</p>
      <LogoutButton />
    </div>
  );
}
