import logoImg from '@/assets/logo.svg';
import { Stack } from '@mui/material';

const Logo = () => {
  return (
    <Stack justifyContent="center" alignItems="center" padding="5px">
      <img src={logoImg} />
    </Stack>
  );
};

export default Logo;
