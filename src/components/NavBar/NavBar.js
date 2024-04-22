import { NavLink } from 'react-router-dom';
import './navbar.css';
import CartWidget from './CartWidget';
import logo from './assets/logo.jpeg';
const NavBar = ({bgColor}) => {

  

  return (
    <nav style={{backgroundColor:bgColor}}>
      
        <img style={{width:'100px'}} src={logo} alt="logo empresa"/>

        <div className='d-flex justify-content-center py-3'>
            <NavLink className='mx-3 text-primary' to='/'>Home</NavLink>
            <NavLink className='mx-3 text-primary' to='/items'>Productos</NavLink>
          
        </div>

        <CartWidget/>

    </nav>
  )
}

export default NavBar