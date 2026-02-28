import React from 'react';
import styles from './FAQs.module.scss';
import Dropdown from '../../../../components/Dropdown/dropdown';

const FAQs = () => {

	return (
		<>
			<div className={styles.container}>
				<div className={styles.header}>
					<div className={styles.h3}>
						FAQ's
					</div>
					<div className={styles.desc}>
						Providing answers to your questions
					</div>
				</div>

				<Dropdown
					text={'Do you have specific princing plans to show?'}
					desc={'Do you have specific princing plans to show?'}
				/>
				<Dropdown
					text={'Do you have specific princing plans to show?'}
					desc={'Do you have specific princing plans to show?'}
				/>
				<Dropdown
					text={'Do you have specific princing plans to show?'}
					desc={'Do you have specific princing plans to show?'}
				/>
				<Dropdown
					text={'Do you have specific princing plans to show?'}
					desc={'Do you have specific princing plans to show?'}
				/>
				<Dropdown
					text={'Do you have specific princing plans to show?'}
					desc={'Do you have specific princing plans to show?'}
				/>
			</div>
		</>
	);
};

export default FAQs;