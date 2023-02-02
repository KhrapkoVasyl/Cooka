import { PlayCircle } from '@mui/icons-material';
import { Button, Chip, IconButton, TextField } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { useStore } from '@/hooks';
import Router from './utils/router';
import Navbar from '@/components/navbar/Navbar';

const App = () => {
  const { count, inc } = useStore('testStore');

  return (
    <div className="App">
      <Navbar />
      {/* Just an example -> remove later */}
      <div>
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
    </div>
  );
};

export default observer(App);
