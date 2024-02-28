import Aboutus from './pages/Aboutus';
import Principal from './pages/Principal';
import Bimbo from './pages/Bimbo';
import JyQ from './pages/JyQ';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBq91b_t2oKCD8S-JD6vqVPUJg3xLXDH1A",
  authDomain: "distribuidora-b9ea2.firebaseapp.com",
  projectId: "distribuidora-b9ea2",
  storageBucket: "distribuidora-b9ea2.appspot.com",
  messagingSenderId: "376573395203",
  appId: "1:376573395203:web:eeee7737643a4c76026936"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route index element={<Principal/>}/>
        <Route path="home" element={<Principal/>}/>
        <Route path="sobrenosotros" element={<Aboutus/>}/>
        <Route path="panes" element={<Bimbo/>}/>
        <Route path="jyq" element={<JyQ/>}/>
      </Routes>
    </BrowserRouter>      
    </>
  )
}

export default App
