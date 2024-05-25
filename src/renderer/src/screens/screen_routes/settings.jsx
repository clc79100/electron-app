import { Container, Typography} from '@mui/material';

export default function Settings() {

  return (
    <Container sx={{
        display: 'flex', 
        flexDirection: 'column', 
        gap: 2, 
        height: '100vh' 
    }}>
        <Typography variant="h2" fontWeight={500}>Settings</Typography>
        <Typography variant='h6'></Typography>

    </Container>
  );
}