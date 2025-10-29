import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './screens/LoginPage';
import HomePage from './screens/HomePage';

function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/" element={<LoginPage />}/>
        <Route path="/home" element={<HomePage />} />
      </Routes>
      </div>
      
    </Router>
  )
}

export default App
