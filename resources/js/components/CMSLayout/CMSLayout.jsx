import React, { useState } from 'react';
import SideNav from '../../Pages/SideNav/SideNav';
import Dashboard from '../../Pages/Dashboard/Dashboard';
import Home from '../../Pages/Home/Home';
import styles from './CMSLayout.module.scss';

const CMSLayout = () => {
  const [selectedPage, setSelectedPage] = useState('Homepage');

  const renderPage = () => {
    switch (selectedPage) {
      case 'Homepage':
        return <Home />;
      case 'Page 2':
      case 'Page 3':
      case 'Page 4':
      case 'Page 5':
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className={styles.cmsLayout}>
      <SideNav selectedPage={selectedPage} onPageSelect={setSelectedPage} />
      <div className={styles.mainContent}>
        {renderPage()}
      </div>
    </div>
  );
};

export default CMSLayout;
