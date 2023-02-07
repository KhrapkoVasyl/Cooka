import { Box, Stack } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Navbar from '../navbar';
import Sidebar from '../sidebar';
import { styles } from './styles';

const Layout = () => {
  return (
    <Stack height="100vh" flexDirection="row" gap="50px">
      <Stack sx={styles.siderWrapper} flex="0 0 250px">
        <Sidebar />
      </Stack>
      <Stack flex="1">
        <Box>
          <Navbar />
        </Box>
        <Box sx={styles.mainWrapper}>
          <Outlet />
        </Box>
      </Stack>
    </Stack>
  );
};

export default Layout;
