import './App.css';
import CakeContainer from './components/CakeContainer';
import { Provider } from 'react-redux';
import store from './app/store';
import IcecreamContainer from './components/IcecreamContainer';
import UserView from './components/UserView';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer/>
        <IcecreamContainer/>
        <UserView/>
      </div>
    </Provider>
  );
}

export default App;
