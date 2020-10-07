import React from 'react'

const Hero = () => {
    return (
        <div className="hero-medium">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 454 480" version="1.1">
                <defs>
                    <linearGradient id="herolinear" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#f25bd1"></stop>
                        {/* <stop offset="50%" stopColor="#ff17c6"></stop> */}
                        <stop offset="100%" stopColor="#e3a3dd"></stop>
                    </linearGradient>
                </defs>
                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="Artboard" stroke="url(#herolinear)" strokeWidth="8">
                        <rect id="Rectangle" transform="translate(95.617637, 89.324587) rotate(-110.000000) translate(-95.617637, -89.324587) " x="-236.382363" y="-170.175413" width="664" height="519" rx="7"/>
                    </g>
                </g>
            </svg>
        </div>

    )
}

export default Hero