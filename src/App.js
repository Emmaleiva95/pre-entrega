import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  
  return (
   <div style={{textAlign:'center'}}>
      <NavBar bgColor='#222' txtColor='#fff'/>

      <Routes>


        <Route path='/' element={<Home/>} />

        <Route path='/items' element={ <ItemListContainer greetings={'Nuestros Productos'}/>}/>
        <Route path='/items/category/:categoria' element={ <ItemListContainer greetings={'Productos filtrados'}/>}/>
        <Route path='/items/detail/:id' element={ <ItemDetailContainer/>}/>

        <Route path='*' element={<NotFound/>} />

      </Routes>
      

    

   </div>
  );
}

export default App;
