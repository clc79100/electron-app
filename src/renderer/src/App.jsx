import { Container, Button, Typography } from '@mui/material';

export default function App() {

  return (
    <Container sx={{
      display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center', 
        gap: 2, 
        height: '100vh' 
    }}>
      <Typography variant="h4">Bienvenido</Typography>
      <Button variant="contained" >Iniciar sesión</Button>
      <Button variant="contained">Registrarse</Button>
    </Container>
  );
}


