import { Container, Button, Typography, TextField, Box } from '@mui/material';

export default function Register() {

  return (
    <Container sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center', 
        gap: 2, 
        height: '100vh' 
    }}>
        <Typography variant="h4">Crear Cuenta</Typography>
        <TextField id="outlined-basic" label="Nombre" variant="outlined" />
        <TextField id="outlined-basic" label="Correo" variant="outlined" />
        <TextField id="outlined-basic" label="Contraseña" variant="outlined" />
        <TextField id="outlined-basic" label="Confirmar Contraseña" variant="outlined" />
        <Button variant="contained">Crear Cuenta</Button>
    </Container>
  );
}