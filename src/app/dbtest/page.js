"use client";
import { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, CircularProgress, Box } from '@mui/material';
import LoadingOverlay from '@/components/LoadingOverlay';"@/components/LoadingOverlay";



export default function Page() {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    // API-Aufruf zum Abrufen der Benutzerdaten
    async function fetchUsers() {
      try {
        const response = await fetch('/api/users');
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const data = await response.json();
        setUsers(data);

      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);


 
  // Wenn ein Fehler aufgetreten ist, wird eine Fehlermeldung angezeigt
  if (error) {
    return <p>Error: {error}</p>; 
  }


  // Wenn keine Fehler und keine Ladeanzeige vorhanden sind, wird die Tabelle mit den Benutzerdaten angezeigt
  return (
    <>
      <LoadingOverlay loading={loading} /> 
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
