import React from "react"

const Background = () => {
    return (
      <div
        style={{
          position: "absolute",
          bottom: "0",
          right: 0,
          width: "300px",
          height: "350px",
          overflow: "hidden",
        }}>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" viewBox="0 0 640 640" width="400" height="400" className="static">
                <defs>
                    <path d="M486.17 46.62L291.58 46.62L230.35 122.06L230.35 266L130.87 266L40.13 380.06L40.13 562.63" id="b238mbPn0A-2"></path>
                    <path d="M506.17 66.62L311.58 66.62L250.35 142.06L250.35 286L150.87 286L60.13 400.06L60.13 582.63" id="b1qo2JqZj7-2"></path>
                    <path d="M526.17 86.62L331.58 86.62L270.35 162.06L270.35 306L170.87 306L80.13 420.06L80.13 602.63" id="ceFmK6cV1-2"></path>
                    <path d="M546.17 106.62L351.58 106.62L290.35 182.06L290.35 326L190.87 326L100.13 440.06L100.13 622.63" id="caxZ1lS3B-2"></path>
                </defs>
                <g>
                    <use href="#b238mbPn0A-2" opacity="1" fillOpacity="0" stroke="#fa5cd7" strokeWidth="2" strokeOpacity="1"></use>
                    <use href="#b1qo2JqZj7-2" opacity="1" fillOpacity="0" stroke="#fa5cd7" strokeWidth="2" strokeOpacity="1"></use>
                    <use href="#ceFmK6cV1-2" opacity="1" fillOpacity="0" stroke="#fa5cd7" strokeWidth="2" strokeOpacity="1"></use>
                    <use href="#caxZ1lS3B-2" opacity="1" fillOpacity="0" stroke="#fa5cd7" strokeWidth="2" strokeOpacity="1"></use>
                </g>
            </svg>

            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" viewBox="0 0 640 640" width="400" height="400" className="animate">
                <defs>
                    <filter id="glow">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur"></feGaussianBlur>
                    </filter>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="60%">
                        <stop offset="0%" stopColor="#dd6343" />
                        <stop offset="100%" stopColor="#dea753" />
                    </linearGradient>
                    <path d="M486.17 46.62L291.58 46.62L230.35 122.06L230.35 266L130.87 266L40.13 380.06L40.13 562.63" id="b238mbPn0A" filter="url(#glow)"></path>
                    <path d="M506.17 66.62L311.58 66.62L250.35 142.06L250.35 286L150.87 286L60.13 400.06L60.13 582.63" id="b1qo2JqZj7"></path>
                    <path d="M526.17 86.62L331.58 86.62L270.35 162.06L270.35 306L170.87 306L80.13 420.06L80.13 602.63" id="ceFmK6cV1"></path>
                    <path d="M546.17 106.62L351.58 106.62L290.35 182.06L290.35 326L190.87 326L100.13 440.06L100.13 622.63" id="caxZ1lS3B"></path>
                </defs>
                <g>
                    <use href="#b238mbPn0A" opacity="1" fillOpacity="0" stroke="#fa5cd7" strokeWidth="2" strokeOpacity="1"></use>
                    <use href="#b1qo2JqZj7" opacity="1" fillOpacity="0" stroke="#fa5cd7" strokeWidth="2" strokeOpacity="1"></use>
                    <use href="#ceFmK6cV1" opacity="1" fillOpacity="0" stroke="#fa5cd7" strokeWidth="2" strokeOpacity="1"></use>
                    <use href="#caxZ1lS3B" opacity="1" fillOpacity="0" stroke="#fa5cd7" strokeWidth="2" strokeOpacity="1"></use>
                </g>
            </svg>
      </div>
    )
  }
  
  export default Background