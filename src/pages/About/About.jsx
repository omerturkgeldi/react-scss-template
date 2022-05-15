import React from 'react'
import { Link } from 'react-router-dom'
import Counter from '../../components/Counter/Counter'

const About = () => {
  return (
    <div style={{ marginBottom: '100px', textAlign: 'center' }}>
      <h3>About</h3>

      <Link to={'/rakip-bul'} style={{textDecoration: 'none'}}>
      <div className='my-card' style={{
        background:
          '#FFB443'
      }}>
        <h1 className='card-text'>Rakip Bul</h1>
        <img className='card-icon' style={{ width: '40px' }} src='https://www.svgrepo.com/show/416782/arrow-direction-pointer-3.svg' />
      </div>
      </Link>

      <Link to={'/etkinlikler'} style={{textDecoration: 'none'}}>
      <div className='my-card' style={{
        background:
          '#DD7DFF'
      }}>
        <h1 className='card-text'>Etkinlikler</h1>
        <img className='card-icon' style={{ width: '40px' }} src='https://www.svgrepo.com/show/361340/symbol-event.svg' />
      </div>
      </Link>

      <Link to={'/mesajlar'} style={{textDecoration: 'none'}}>
      <div className='my-card' style={{
        background:
          '#39DBFF'
      }}>
        <h1 className='card-text'>Mesajlar</h1>
        <img className='card-icon' style={{ width: '40px' }} src='https://www.svgrepo.com/show/110910/message.svg' />
      </div>
      </Link>

      <Counter />
    </div>
  )
}

export default About