import React from 'react';
import Tilt from 'react-tilt';
import styles from './Logo.css';
import sun from './sun.png'

const Logo = () => {
	return (
		<div>
			<Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 80, width: 80 }} >
				<div className="Tilt-inner pa3"> 
					<img style={{paddingTop: '5px', height: 50, width: 50}} alt='logo' src={sun}/>
				</div>
			</Tilt>
		</div>
	)
}

export default Logo;