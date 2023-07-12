import React from 'react';
import SearchBar from '../../search-bar/searchbar';
import NavBar from './navbar';

const MainHeader = () => {
  return (
    <header className="main-header">
      <SearchBar />
      <div className="nameandlogo__container">
        <div id="namePhoenix">
          <h1 className="name__Phoenix">Phoenix Store</h1>
        </div>
        <div className="logo"></div>
      </div>
      <NavBar />
    </header>
  );
};

export default MainHeader;