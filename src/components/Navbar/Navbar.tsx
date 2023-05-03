import Menu from '../../assets/menu.svg'
import './Navbar.css'
function Navbar() {
  return (
    <nav>
        <img src={Menu} alt="" className='menu'/>
        <h2>About us</h2>
    </nav>
  )
}

export default Navbar