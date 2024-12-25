// components/LoadingOverlay.js
import { CircularProgress, Box } from '@mui/material';

export default function LoadingOverlay({ loading }) {
  if (!loading) return null; // Wenn nicht geladen wird, wird nichts angezeigt

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dunkles Overlay
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999, // Overlay immer oben
      }}
    >
      <CircularProgress />
    </Box>
  );
}
