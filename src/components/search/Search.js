/*Import hooks */
import { useState } from "react";

/*Import CSS */
import "./Search.css";
import "../../fonts.css";

const Search = () => {
  /*bar search */
  const [search, setSearch] = useState("");
  console.log(search);
  return (
    <header className="header__background">
      <div className="container">
        <nav className="header__navegation">
          <ul>
            <li className="logo">Codelândia</li>
            <li className="link">blog</li>
          </ul>
        </nav>
        <form className="header__searche">
          <span className="fa fa-user"></span>
          <input
            type="text"
            name="search"
            placeholder="Pesquisa no blog"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </form>
      </div>
    </header>
  );
};

export default Search;
