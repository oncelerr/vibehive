import React from 'react';
import styles from './Hero.module.scss';
import Badge from '../../../../components/Badge/badge';

const Hero = () => {

	return (
		<>
			<div className={styles.container}>
				<Badge text={"Our Works"}/>
				<div className={styles.h1}>Systems We <span className={styles.span}>Have Built</span></div>
				<p className={styles.p}>We do not just design and develop. We solve business problems through digital systems. Here is what that looks like in practice.</p>
			</div>
		</>
	);
};

export default Hero;