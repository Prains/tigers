import "./Search.scss";

const Search = () => {
  return (
    <form className="search__form">
      <input type="text" placeholder="Тип" className="search__input" size={3} />
      <input
        type="text"
        placeholder="Комнат"
        className="search__input"
        size={6}
      />
      <input
        type="text"
        placeholder="Расположение"
        className="search__input"
        size={12}
      />
      <input
        type="text"
        placeholder="Цена от"
        className="search__input"
        size={7}
      />
      <input
        type="text"
        placeholder="Цена до"
        className="search__input"
        size={7}
      />
      <input
        type="text"
        placeholder="ID / слово:"
        className="search__input"
        size={11}
      />
      <button
        type="submit"
        className="search__submit"
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        Поиск
      </button>
    </form>
  );
};

export default Search;
