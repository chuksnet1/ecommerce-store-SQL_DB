import React from 'react';
import './Navbar.css'
import logo from '../../Asset/Image/amazon1.png'
import location from '../../Asset/Image/location2.png'
import search from '../../Asset/Image/search.png'
import cart from '../../Asset/Image/cart.png'
import menu from '../../Asset/Image/menu1.png'



const Navbar=()=>{
    return(
        <div className='outer-container'>
            <div className='top-container'>
                <div className='logo-area'>
                    <img src={logo} alt=''/>
                </div>
                <div className='location'>
                    <img src={location}/>
                    <div className='inside-location'>
                        <p>Deliver to chukwuka</p>
                        <p>Eastbourne BN21 4AR</p>
                    </div>
                </div>
                <div className='search-box'>
                    <input placeholder='Search the All Store'/>
                    <img src={search} alt=''/>
                </div>
                <div className='account-owner'>
                    <p>Hello, chukwuka</p>
                    <h5>Account & Lists</h5>
                </div>
                <div className='cart-order'>
                    <img src= {cart} alt=''/>
                    <h5>Basket</h5>
                </div>
            </div>
            <div className='bottom-container'>
                <div className='menu'>
                    <img src={menu}/>
                    <h5>All</h5>
                    </div>
                <li>Morrisins</li>
                <li>Buy Again</li>
                <li>Amazon Business</li>
                <li>Browsing History</li>
                <li>Today's Deals</li>
            </div>
        </div>
    )
}

export default Navbar;