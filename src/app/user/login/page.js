"use client";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";

export default function SignIn() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/user/"; // Standard-Weiterleitung ist "/"

  // State für die Eingabewerte
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const result = await signIn("credentials", {
      redirect: false,
      email: email,
      password: password,
    });

    if (result?.error) {
      alert("Invalid email or password");
    } else {
      // Weiterleitung zur Callback-URL oder Standard-Seite 
      router.push(callbackUrl);
    }
  };

  return (
    <>
      <Box 
        component="form" 
        onSubmit={handleSubmit} 
        sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, flexDirection: 'column', width: '300px', margin: 'auto', padding: '20px' }}
      >
        <TextField 
          name="email" 
          id="outlined-email" 
          label="Email" 
          variant="outlined" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required 
        />
        <TextField 
          name="password" 
          id="outlined-password" 
          label="Passwort" 
          variant="outlined" 
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required 
        />
        <Button type="submit" variant="contained">Login</Button>
      </Box>
    </>
  );
}