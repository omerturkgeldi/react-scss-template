import React from 'react'
import { Link } from 'react-router-dom'
import Counter from '../../components/Counter/Counter'

const About = () => {
  return (
    <div style={{ marginBottom: '100px', textAlign: 'center' }}>
      <h3>About</h3>


      <div >
        <Link className='my-card' to={'/rakip-bul'} style={{
          textDecoration: 'none', background:
            '#FFB443'
        }}>
          <h1 className='card-text'>Rakip Bul</h1>
          <img className='card-icon' style={{ width: '40px' }} src='https://www.svgrepo.com/show/416782/arrow-direction-pointer-3.svg' />
        </Link>

      </div>


      <div >
        <Link className='my-card' to={'/etkinlikler'} style={{
          textDecoration: 'none', background:
            '#DD7DFF'
        }}>
          <h1 className='card-text'>Etkinlikler</h1>
          <img className='card-icon' style={{ width: '40px' }} src='https://www.svgrepo.com/show/361340/symbol-event.svg' />
        </Link>
      </div>



      <div>
        <Link to={'/mesajlar'} style={{
          textDecoration: 'none', background:
            '#39DBFF'
        }} className="my-card">
          <h1 className='card-text'>Mesajlar</h1>
          <img className='card-icon' style={{ width: '40px' }} src='https://www.svgrepo.com/show/110910/message.svg' />
        </Link>
      </div>

      <Counter />
    </div >
  )
}

export default About