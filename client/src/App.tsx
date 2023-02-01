import { observer } from 'mobx-react-lite';
import { useStore } from './hooks/use-store';
import Router from './router';

const App = () => {
  const { count, inc } = useStore('testStore');

  return (
    <div className="App">
      {/* Just an example -> remove later */}
      <div>Cooka {count}</div>
      <button onClick={inc}>Inc</button>
      {/* Just an example -> remove later */}
      <Router />
    </div>
  );
};

export default observer(App);
