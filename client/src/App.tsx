import { observer } from 'mobx-react-lite';
import { useStore } from './hooks/use-store';

const App = () => {
  const { count, inc } = useStore('testStore');

  return (
    <div className="App">
      <div>Cooka {count}</div>
      <button onClick={inc}>Inc</button>
    </div>
  );
};

export default observer(App);
