import { Container, Button, Typography, TextField, Box } from '@mui/material';

export default function Login() {

  return (
    <Container sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center', 
        gap: 2, 
        height: '100vh' 
    }}>
        <Typography variant="h4">Inciar Sesion</Typography>
        <TextField id="outlined-basic" label="Correo" variant="outlined" />
        <TextField id="outlined-basic" label="Contraseña" variant="outlined" />
        <Button variant="contained">Inciar Sesion</Button>
    </Container>
  );
}