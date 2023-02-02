import { AppBar, Container, Toolbar } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar
      color="inherit"
      position="sticky"
      sx={{ mb: '1rem', boxShadow: 'none' }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters></Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
