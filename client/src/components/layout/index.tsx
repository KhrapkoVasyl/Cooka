import { Box, Stack } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Navbar from '../navbar';

import { styles } from './styles';

const Layout = () => {
  return (
    <Stack height="100vh" flexDirection="row" gap="50px">
      <Stack sx={styles.siderWrapper} flex="1">
        Sider
      </Stack>
      <Stack flex="5">
        <Box sx={styles.navbarWrapper}>
          <Navbar />
        </Box>
        <Box sx={styles.mainWrapper}>
          Main
          <Outlet />
        </Box>
      </Stack>
    </Stack>
  );
};

export default Layout;
