import React from 'react';
import styles from './ContactUs.module.scss';
import FindOut from './Sections/FindOut/FindOut';
import TextField from './Sections/TextField/TextField';

const ContactUs = () => {

  return (
    <>
      <div className={styles.ContactUsContainer}>
        <FindOut />
      </div>
    </>
  );
};

export default ContactUs;