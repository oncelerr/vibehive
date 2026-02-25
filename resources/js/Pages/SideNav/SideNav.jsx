import React, { useState } from 'react';
import styles from './SideNav.module.scss'

const SideNav = ({ selectedPage, onPageSelect }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handlePageSelect = (page) => {
    onPageSelect(page);
  };

  const pages = ['Homepage', 'Page 2', 'Page 3', 'Page 4', 'Page 5'];

  return (
    <>
      <div className={styles.sidenavwrp}>
        <div className={styles.logo}><img src="/Assets/hivecorelogo.svg" alt="" /><p>Hive Core</p></div>
        <div className={styles.hr}/>
        <div className={styles.dropdownwrp} onClick={toggleDropdown}>
          <img src="/Assets/pages.svg" alt="" />
          <p>Pages</p>
          <img className={`${styles.chevron} ${isDropdownOpen ? styles.chevronOpen : ''}`} src="/Assets/chevrondown.svg" alt="" />
        </div>
        {isDropdownOpen && (
          <div className={styles.dropdownMenu}>
            {pages.map((page, index) => (
              <div 
                key={index}
                className={`${styles.dropdownItem} ${selectedPage === page ? styles.active : ''}`}
                onClick={() => handlePageSelect(page)}
              >
                <img src="/Assets/pages.svg" alt="" />
                <p>{page}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default SideNav;