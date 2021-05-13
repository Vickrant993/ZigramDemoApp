import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import UserList from './components/userList'

function App() {
  return (
    <div className="App">      
      <header className="App-header">
        <UserList />
      </header>
    </div>
  );
}

export default App;
