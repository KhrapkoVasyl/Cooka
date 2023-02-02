import React from 'react';
import { FormControl, Input, InputLabel, Stack } from '@mui/material';
import { styles } from '@/components/signInForm/styles';

const SignInForm = () => {
  return (
    <Stack component="form" sx={styles.container}>
      <FormControl>
        <InputLabel htmlFor="email">Email</InputLabel>
        <Input id="email" type="email" />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="password">Password</InputLabel>
        <Input id="password" type="password" />
      </FormControl>
    </Stack>
  );
};

export default SignInForm;
