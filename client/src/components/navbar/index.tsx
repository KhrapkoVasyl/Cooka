import {
  AppBar,
  Avatar,
  Chip,
  Container,
  Menu,
  MenuItem,
  Toolbar,
} from '@mui/material';
import { useState, MouseEvent } from 'react';
import { styles } from './styles';

const Navbar = () => {
  const [username] = useState('Test');
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // TODO: Write store integration to actually logout user
  const handleLogout = () => alert('Logout!');

  return (
    <AppBar
      color="inherit"
      position="sticky"
      sx={{ mb: '1rem', boxShadow: 'none' }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={styles.toolbar}>
          <Chip
            avatar={<Avatar alt={username} src="../avatar/foo/bar" />}
            label={username}
            sx={styles.chip}
            onClick={handleClick}
          />
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            sx={styles.menu}
          >
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
