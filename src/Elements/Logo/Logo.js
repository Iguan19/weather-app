import React from 'react';
import Tilt from 'react-tilt';
import styles from './Logo.css';
import sun from './sun.png';
import tachyons from 'tachyons';

const Logo = () => {
	return (
		<div className="br3 grow bw2 shadow-5">
			<Tilt className="Tilt br3 shadow-2" options={{ max : 55 }} style={{ height: 50, width: 50 }} >
				<div className="Tilt-inner pa2"> 
					<img alt='logo' src={sun}/>
				</div>
			</Tilt>
		</div>
	)
}

export default Logo;