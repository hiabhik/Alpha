import React from 'react'
import Banner from '../../assets/img/yellowCar.png'
import Logo from '../../assets/img/logoMain.png'
import Quality from '../../assets/img/svg/Quality.svg'
import High from '../../assets/img/svg/High.svg'
import Exchanged from '../../assets/img/svg/Exchanged.svg'
import './HomeFrame1.css'
let style={
  background:`url(${Banner})`,
  height:"100vh",
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition:"center",
  // backgroundAttachment:"center"
}
const HomeFrame1 = () => {
  return (
    <div style={style}>
      <div className='HomeContent'>
          <img src={Logo} className='logo' alt="logo"  />
          <h1>Take your graphics protection to the next level with DOL Max overlaminates</h1>
          <h4>Pair with MPI 1105 wrapping film for ramped up protection</h4>
          <div className='homeSpecification'>
              <div className='specChild'>
                  <div className='cirlce'>
                    <img src={Quality} alt="Quality" />
                  </div>
                  <p>Maximum Durability</p>
              </div>
              <div className='specChild'>
                  <div className='cirlce'>
                    <img src={Exchanged} alt="Quality" />
                  </div>
                  <p>Enhanced Appearance</p>
              </div>
              <div className='specChild'>
                  <div className='cirlce'>
                    <img src={High} alt="Quality" />
                  </div>
                  <p>High Gloss Finish</p>
              </div>
          </div>
      </div>
    </div>
  )
}

export default HomeFrame1