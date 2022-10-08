import React from 'react';

function Navigation({currentPage, handlePageChange}) {
    return (
      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><a className={currentPage === 'About' ? 'nav-link px-2 link-dark' : 'nav-link px-2 link-secondary'} href="#about" onClick={() => handlePageChange('About')}>About me</a></li>
        <li><a className={currentPage === 'Project' ? 'nav-link px-2 link-dark' : 'nav-link px-2 link-secondary'}href="#project" onClick={() => handlePageChange('Project')}>Portfolio</a></li>
        <li><a className={currentPage === 'Contact' ? 'nav-link px-2 link-dark' : 'nav-link px-2 link-secondary'} href="#contact" onClick={() => handlePageChange('Contact')}>Contact</a></li>
        <li><a className={currentPage === 'Resume' ? 'nav-link px-2 link-dark' : 'nav-link px-2 link-secondary'} href="#resume" onClick={() => handlePageChange('Resume')}>Resume</a></li>
      </ul>
    );
  }
  
  export default Navigation;