import './App.css';
import Homepage from './pages/Homepage/Homepage';
import Dashboard from './pages/Dashboard/Dashboard';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";
function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<Homepage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          
        </Routes>
     
    </BrowserRouter>
      
    </div>
  );
}

export default App;
