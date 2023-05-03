import './Card.css'
import Black from '../../assets/black.png'
import Blue from '../../assets/blue.png'
import Green from '../../assets/green.png'
import Purple from '../../assets/purp.png'


function Card() {
  return (
    <div className='main-container'>
        <div className='container'>
            <img src={Black} alt="" />
            <h2>some texts here</h2>
        </div>
        <div className='container'>
            <img src={Blue} alt="" />
            <h2>some texts here</h2>
        </div>
        <div className='container'>
            <img src={Green} alt="" />
            <h2>some texts here</h2>
        </div>
        <div className='container'>
            <img src={Purple} alt="" />
            <h2>some texts here</h2>
        </div>

    </div>
  )
}

export default Card