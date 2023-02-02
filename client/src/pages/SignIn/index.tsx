import { Button, Container, Stack, Typography } from '@mui/material';
import React from 'react';
import SignInForm from '@/components/signInForm';
import { Link } from 'react-router-dom';
import { styles } from './styles';
import Logo from '@/components/logo';

const SignInPage = () => {
  return (
    <Container sx={styles.mainContainer}>
      <Stack sx={styles.formContainer}>
        <Stack sx={styles.logoBox}>
          <Logo />
          <Typography variant="h4" sx={{ fontWeight: 700 }}>
            Sign in
          </Typography>
        </Stack>
        <SignInForm />
        <Stack sx={styles.buttonBox}>
          <Button>Sign In</Button>
          <Link to="/auth/sign-up" style={{ textDecoration: 'none' }}>
            <Button color="secondary">Sign Up</Button>
          </Link>
        </Stack>
      </Stack>
    </Container>
  );
};

export default SignInPage;
