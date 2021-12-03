import { Route , Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Pages/Dashboard';
import Home from './Pages/Home';
import Login from './Pages/Login';


function App() {
  return (
    <div>
     <Routes>
     <Route exact path="/login" element={<Login />}/>
     <Route exact path="/" element={<Home />} />
     <Route exact path="/app/users" element={<Dashboard />} />
    </Routes>
    </div>
  );
}

export default App;
