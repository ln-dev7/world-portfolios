import React, {useRef, useEffect, useState} from 'react';

const Top = () => {

  const [position, setPosition] = useState({top: 0, left: 0});
  const scrollTop = useRef()

  useEffect(() => {
    window.scroll({
      top: position.top,
      left: position.left,
      behavior: 'smooth'
    });
    window.addEventListener('scroll', (e) => {
      window.scrollY > 10 
      	? scrollTop.current.style.display = 'inline-block'
      	: scrollTop.current.style.display = 'none'
    });
  })

  return(
      	<p 
	        onClick={() => setPosition({...position, position: {top: 0, left: 0}})}               
	        ref={scrollTop}>		        
	        	<img
			        className="to-top"
			        src="assets/images/arrow-up-circle-fill.svg"
			        alt="arrow-up"
			    />
		</p>
  )    
}

export default Top;