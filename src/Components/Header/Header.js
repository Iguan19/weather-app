import React from 'react';
import Logo from '../../Elements/Logo/Logo';
import styles from './Header.css';

const Header = () => {
	return (
		<header className={styles.Header}>
			<Logo colorScheme='light' />
		</header>
	);
}

export default Header;


