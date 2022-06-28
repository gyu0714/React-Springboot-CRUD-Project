import React from 'react';

const Header = () => {
  return (
    <div>
      <header>
        <nav className='navbar navber-expand-md navbar-dark bg-dark'>
          <div className='container'>
            <a href='/' className='navbar-brand'>
              Employee Management App
            </a>
            <a href='/employees' className='navbar-text '>
              Employees
            </a>
            <a href='/add-employee' className='navbar-text '>
              Add Employee
            </a>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
