import './App.css';
import Home from './screens/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './screens/Login';
import Signup from './screens/Signup';
import Logout from './screens/Logout';
import Taskboard from './screens/Taskboard';
import Profile from './screens/Profile';


function App() {
  return (
    <Router>
    <div> 
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/signup" element={<Signup/>} />
        <Route exact path="/logout" element={<Logout/>} />
        <Route exact path="/taskboard" element={<Taskboard/>} />
        <Route exact path="/profile" element={<Profile/>} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
