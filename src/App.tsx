import './App.css';
import UserProvider from './contexts/UserProvider';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Home />
        <Home />
        <Home />
      </UserProvider>
    </div>
  );
}

export default App;
