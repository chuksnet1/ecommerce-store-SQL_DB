import React from 'react';
import Navbar from '../../component/Navbar/Navbar';
import SlideBar from '../../component/SlideBar/SlideBar';
import Popular from '../../component/Popular/Popular';
import BestSeller from '../../component/BestSeller/BestSeller';
import Footer from '../../component/Footer/Footer';
import NewArrival from '../../component/NewArrival/NewArrival';


const Home=()=>{
    return(
        <div>
            <Navbar/>
            <SlideBar/>
            <Popular/>
            <BestSeller/>
            <NewArrival/>
            <Footer/>
        </div>
    )
}

export default Home;