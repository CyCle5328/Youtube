import React, { memo, useRef } from "react";
import style from "./search_header.module.css";

const SearchHeader = memo(({ onSearch }) => {
  const inputRef = useRef();
  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
  };
  const onClick = () => {
    handleSearch();
  };
  const onkeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <header className={style.header}>
      <div className={style.logo}>
        <img className={style.img} src="/images/logo.png" alt="logo" />
        <h1 className={style.title}>Youtube</h1>
      </div>
      <input
        ref={inputRef}
        className={style.input}
        type="search"
        placeholder="Search..."
        onKeyPress={onkeyPress}
      />
      <button type="submit" className={style.button} onClick={onClick}>
        <img
          src="/images/search.png"
          alt="search"
          className={style.buttonImg}
        />
      </button>
    </header>
  );
});

export default SearchHeader;
