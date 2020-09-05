import React from 'react'

const Border = () => {

    return (
        <div className="border">
            <svg>
                <defs>
                    <linearGradient id="linear" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#e3a4dd"></stop>
                        <stop offset="50%" stopColor="#ff17c6"></stop>
                        <stop offset="100%" stopColor="#00ffa3"></stop>
                    </linearGradient>
                </defs>
                <rect x="0" y="0" width="100%" height="100%" stroke="url(#linear)" strokeWidth="8px" rx="8" ry="8" fill="none"></rect>
            </svg>
        </div>   
    )
}

export default Border