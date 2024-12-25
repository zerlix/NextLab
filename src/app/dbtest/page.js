"use client"; 
import { useEffect, useState } from 'react'; 
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material'; 


export default function Page() {

  const [users, setUsers] = useState([]); // Speichert die Benutzerdaten (initial leer)
  const [loading, setLoading] = useState(true); // Speichert den Ladezustand (initial auf 'true', weil Daten geladen werden)
  const [error, setError] = useState(null); // Speichert Fehlermeldungen (initial auf 'null', da kein Fehler vorliegt)

  // useEffect wird nach der ersten Renderung ausgeführt und ruft die API auf, um die Benutzerdaten zu holen
  useEffect(() => {
    

    async function fetchUsers() { // API-Aufruf zum Abrufen der Benutzerdaten
      try {
        const response = await fetch('/api/users'); 
        if (!response.ok) { 
          throw new Error('Failed to fetch users'); 
        }

        // Umwandeln der Antwort in JSON
        const data = await response.json(); 
        setUsers(data); // Setzt die Benutzerdaten in den Zustand

      } catch (error) {
        setError(error.message); // Wenn ein Fehler auftritt, wird die Fehlermeldung im Zustand gespeichert
      } finally {
        setLoading(false); // Setzt den Ladezustand auf 'false', egal ob der API-Aufruf erfolgreich war oder nicht
      }
    }

    fetchUsers(); 

  }, []); // Der leere Abhängigkeits-Array stellt sicher, dass die Funktion nur einmal nach dem ersten Rendern ausgeführt wird


  // Wenn die Seite noch lädt, wird ein Ladehinweis angezeigt
  if (loading) {
    return <p>Loading...</p>; // Zeigt "Loading..." an, solange die Daten geladen werden
  }

  // Wenn ein Fehler aufgetreten ist, wird eine Fehlermeldung angezeigt
  if (error) {
    return <p>Error: {error}</p>; // Zeigt den Fehler an, wenn einer auftritt
  }

  // Wenn keine Fehler und keine Ladeanzeige vorhanden sind, wird die Tabelle mit den Benutzerdaten angezeigt
  return (
    <>
      <h1>Tabelle User</h1> 
      <TableContainer component={Paper}> 
        <Table> 
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell> 
              <TableCell>Email</TableCell> 
            </TableRow>
          </TableHead>
          <TableBody> 
            {users.map((user) => ( // Iteriert über alle Benutzer und zeigt ihre Daten an
              <TableRow key={user.id}> 
                <TableCell>{user.name}</TableCell> 
                <TableCell>{user.email}</TableCell> 
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
