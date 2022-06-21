import React from 'react'
import { Link } from 'react-router-dom'
import './Carousel.css'
import bgImg from '../../assets/image/background-img.jpg';

function Carousel() {

    return (
        <div className="carousel">
            <div className="image-wrapper overlay">
                <img src={bgImg} alt="main" className="rsp-img" />
            </div>
            <div className="overlay-text">
                <div className="title">
                    Welcome To <span className='name-color'>ANAKYA FITNESS</span>
                </div>
                <Link to="/products">
                    <button
                        className="btn btn-black">SHOP NOW
                    </button>
                </Link>
                <div className="up-title">Get Started with Fitness Journey...</div>
            </div>
        </div>
    )
}

export default Carousel
