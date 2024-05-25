import { Container, Switch, Typography, TextField } from '@mui/material';

export default function Settings() {

  const label = { inputProps: { 'aria-label': 'Switch demo' } };

  return (
    <Container sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      height: '100vh'
    }}
    >
      <Typography variant="h3" fontWeight={500}>Settings</Typography>

      <Container
        sx={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <Typography>Cambiar contraseña</Typography>
        <TextField id="outlined-basic" label="CambiarContraseña" variant="outlined" />
      </Container>

      <Container
        sx={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <Typography variant="h4" fontWeight={400}>Dark Mode</Typography>
        <Switch {...label} />
      </Container>


    </Container>
  );
}