import React, { useState } from 'react';
import styles from './ContactUs.module.scss';
import FindOut from './Sections/FindOut/FindOut';
import Modal from '../../components/Modal/Modal';

const ContactUs = () => {
  const [modal, setModal] = useState(null);

  return (
    <>
      {modal && (
        <Modal
          type={modal.type}
          title={modal.title}
          message={modal.message}
          onClose={() => setModal(null)}
        />
      )}
      <div className={styles.ContactUsContainer}>
        <FindOut onModal={setModal} />
      </div>
    </>
  );
};

export default ContactUs;