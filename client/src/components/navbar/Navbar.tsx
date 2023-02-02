import { AppBar, Container, Toolbar } from '@mui/material';
import logo from '@/assets/logo.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar color={'inherit'} position={'sticky'} sx={{ mb: '1rem' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to={'/'}>
            <img src={logo} alt="" />
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
