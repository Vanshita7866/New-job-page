
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import Header from "./Header";
import HomePage from './Homepage'
import Login from './Login'
import Signup from "./Signup";
import { Routes, Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './user.context';
import JobForm from "./jobform";

function App() {
  return (
    <BrowserRouter>
     <UserProvider>
     <Routes>
        <Route element={<Header />} />
        <Route index element={<HomePage />} />
        <Route path='/JobForm' element={<JobForm />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Signup' element={<Signup />} />
      </Routes>

     </UserProvider>
     </BrowserRouter>
  );
}

export default App;
