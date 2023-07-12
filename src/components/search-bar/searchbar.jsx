import React from 'react';

function SearchBar() {
  return (
    <div className="search-bar">
      <form action="" className="search-bar__form-container">
        <label htmlFor="busqueda" className="search-bar__form-label"></label>
        <input
          type="search"
          className="search-bar__form-search"
          id="busqueda"
          placeholder="Buscar productos" />
        <input
          type="submit"
          className="search-bar__form-submit"
          value="Buscar" />
      </form>
      <div className="search-bar__carrito-container">CARRITO</div>
    </div>
  );
}

export default SearchBar;