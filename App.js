
import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import './App.css';
import Add_Users from './component/Add_Users';
import AllUsers from './component/AllUsers';
import EditUsers from './component/Edituser';
import Home from './component/Home';
import Navbar from './component/Navbar';

const App=()=>{
  return<>
  <BrowserRouter>
  <Navbar/>
  <Routes>
  <Route path="/" element={< Home/>}/>
  <Route path="/AllUsers" element={<AllUsers/>}/>
  <Route path= "/Add_Users" element={<Add_Users/>}/>
  <Route path='/edit/:id' element={<EditUsers/>}/>

  </Routes>
  </BrowserRouter>
  </>
}

export default App;
