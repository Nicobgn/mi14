const Heart1 = () => {
  return (
    <svg viewBox="0 0 24.00 24.00" xmlns="http://www.w3.org/2000/svg" fill="#Fe59ac" stroke="#Fe59ac" strokeWidth="0.00024000000000000003">
      <g id="SVGRepo_bgCarrier" strokeWidth="0">
      </g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="1.7280000000000002">
      </g>
      <g id="SVGRepo_iconCarrier">
        <path d="M12 22.59l-9.2-9.12C.43 11.09.43 7.21 2.8 4.83a6.03 6.03 0 0 1 4.29-1.79c1.62 0 3.14.63 4.29 1.79l.62.62.62-.62a6.014 6.014 0 0 1 4.29-1.79c1.62 0 3.14.63 4.29 1.79 2.37 2.38 2.37 6.26 0 8.64L12 22.59z">
        </path>
        <path fill="none" d="M0 0h24v24H0z">
        </path>
      </g>
    </svg> 
  )
}

const Heart2 = ({top, left}) => {
  return (
    <div className="bg__heart" style={{top: `${top}px`, left: `${left}px`}}>
    <figure className='bg__heart--holder'>
      <svg viewBox="0 0 1024 1024" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="" stroke="" strokeWidth="0.01024">
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <path d="M927.4 273.5v-95.4h-87.9V82.8h-201v95.3h-87.9v95.4h-78.5v-95.4h-88V82.8H183.2v95.3H95.3v95.4H16.7v190.6h78.6v95.4h75.3v95.3H246v95.3h87.9v95.4h100.5v95.3h153.9v-95.3h100.4v-95.4h88v-95.3H852.1v-95.3h75.3v-95.4h78.5V273.5z" fill="#fe9acc"></path>
        </g>
      </svg>
    </figure>
    </div>
  )
}

const Heart3 = ({cN = 'text__heart'}) => {
  return (
    <span className={cN}>
      <svg viewBox="0 -2.5 21 21" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000" stroke="#000000">
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <title>love [#000]</title> 
          <desc>Created with Sketch.</desc> 
          <defs> </defs> 
          <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> 
            <g id="Dribbble-Light-Preview" transform="translate(-139.000000, -361.000000)" fill="#ff6198"> 
              <g id="icons" transform="translate(56.000000, 160.000000)"> 
                <path d="M103.991908,206.599878 C103.779809,210.693878 100.744263,212.750878 96.9821188,215.798878 C94.9997217,217.404878 92.0324261,217.404878 90.042679,215.807878 C86.3057345,212.807878 83.1651892,210.709878 83.0045394,206.473878 C82.8029397,201.150878 89.36438,198.971878 93.0918745,203.314878 C93.2955742,203.552878 93.7029736,203.547878 93.9056233,203.309878 C97.6205178,198.951878 104.274358,201.159878 103.991908,206.599878" id="love-[#000]">
                </path> 
              </g> 
            </g> 
          </g> 
        </g>
      </svg>
    </span>
  )
}

export { Heart1, Heart2, Heart3 }
