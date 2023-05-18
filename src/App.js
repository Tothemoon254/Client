import './App.css';

import { Routes, Route } from 'react-router-dom';
import Home from './pages/Homes'
import Inbox from './pages/inbox'
import WriteMessage from './pages/Writemessage';



console.log('Smiley face:)')




function App() {
  return (
    <div>
       <Routes>
          
          <Route path='/write' element={<WriteMessage />} />
          <Route path='/inbox' element={<Inbox />} />
          <Route path='/' element={<Home />} />

       </Routes>   
    </div>
  );
}

export default App;
