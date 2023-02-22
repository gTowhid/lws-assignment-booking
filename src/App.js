import Header from './components/Header';
import Input from './components/Input';
import Previews from './components/Previews';
import store from './redux/store';

import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Input />
        <Previews />
      </div>
    </Provider>
  );
}

export default App;
