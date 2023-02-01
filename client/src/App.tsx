import { PlayCircle } from '@mui/icons-material';
import { Button, Chip, Typography, IconButton, TextField } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { useStore } from './hooks/use-store';
import Router from './router';
import logo from './assets/logo.svg';

const App = () => {
  const { count, inc } = useStore('testStore');

  return (
    <div className="App">
      {/* Just an example -> remove later */}
      <img src={logo} alt="" />
      <Chip label={count} />
      <Button disableElevation onClick={inc}>
        Inc
      </Button>
      <Button variant="outlined">Outline Inc</Button>
      <IconButton color="primary">
        <PlayCircle />
      </IconButton>
      <TextField variant="filled" label="Name" placeholder="Name" />
      {/* Just an example -> remove later */}
      <Router />
    </div>
  );
};

export default observer(App);
