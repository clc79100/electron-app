import { Container, Typography} from '@mui/material';

export default function Stats() {

  return (
    <Container sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: 2, 
        height: '100vh' 
    }}>
        <Typography variant="h3" fontWeight={500}>Stats</Typography>
    </Container>
  );
}