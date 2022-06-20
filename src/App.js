
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from './components/register';

function App() {
  return (
    <Router>
    <Routes>
    <Route path="/" element={<Register />}>
     
    </Route>
  </Routes>
  </Router>
  );
}

export default App;
