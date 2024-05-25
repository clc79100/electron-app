import { Container, Typography} from '@mui/material';

export default function Stats() {

  return (
    <Container sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center', 
        gap: 2, 
        height: '100vh' 
    }}>
        <Typography variant="h4">Stats</Typography>
    </Container>
  );
}