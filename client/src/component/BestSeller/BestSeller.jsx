import React from 'react';
import './BestSeller.css'
import ps5 from '../../Asset/Image/ps5.jpg'
import lastPs from '../../Asset/Image/lastPs.jpg'
import godOfWar from '../../Asset/Image/godOfWar.jpeg'
import iphone from '../../Asset/Image/iphone.jpeg'
import groceries from '../../Asset/Image/groceries.jpg'



const BestSeller=()=>{
    return(
        <div className='bestseller-container'>
            <h2>Best Sellers</h2>
            <div className='bestseller'>
            <div className='img1'><img src={ps5} alt=''/></div>
            <div className='img2'><img src={groceries} alt=''/></div>
            <div className='img3'><img src={godOfWar} alt=''/></div>
            <div className='img4'><img src={iphone} alt=''/></div>
            <div className='img5'><img src={lastPs} alt=''/></div>
            </div>
            
        </div>
    )
}

export default BestSeller;