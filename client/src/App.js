import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {useState} from 'react'
import './App.css';
import AddPet from './components/AddPet';
import Home from './components/Home';
import EditPet from './components/EditPet'
import ViewPet from './components/ViewPet';

function App() {
  
  return (
    <div className="App">
      <div>
        <h1 className='mt-5 mb-5'>Dojo Pet Shelter</h1>
      </div>
      <BrowserRouter>
        <Routes>
          
          <Route path='/' element={<Home/>}/>

          <Route path='/addPet' element={<AddPet/>} />

          <Route path='/edit/:id' element={<EditPet/>} />

          <Route path='/view/:id' element={<ViewPet />} />
          
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
