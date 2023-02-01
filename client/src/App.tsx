import { PlayCircle } from '@mui/icons-material';
import { Button, Chip, Typography, IconButton, TextField } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { useStore } from './hooks/use-store';
import Router from './router';

const App = () => {
  const { count, inc } = useStore('testStore');

  return (
    <div className="App">
      {/* Just an example -> remove later */}
      <Typography variant="h4" fontWeight={700}>
        Cooka
      </Typography>
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
