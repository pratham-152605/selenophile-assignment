import React from 'react'
import image_url from '../../assets/image2.jpg';

const Hero = () => {
  return (
    <div className='img-fluid min-h-50 min-w-100' style={{backgroundImage: `url(${image_url})`, backgroundSize: "100%", backgroundRepeat: "no-repeat", height: "100%", objectFit: "contain", display: "flex", justifyContent: "center", alignItems: "center"}}>
        <div className='d-flex flex-column gap-1 text-light' style={{width: "27%"}}>
            <h1 className='text-wrap text-center' style={{fontFamily: "Oswald"}}>A New Digital Canteen Experience Awaits You</h1>
            <div className='d-flex gap-2 justify-content-center align-items-center pb-3'>
                <button className='btn bg-success px-4 py-2 text-light fw-bold border-1 rounded-pill' style={{fontSize: "1rem"}}>Register Now</button>
                <button className='btn bg-transparent px-4 py-2 text-light border-light border-1 rounded-pill' style={{fontSize: "1rem"}}>Food For Events</button>
            </div>
        </div>
    </div>
  )
}

export default Hero