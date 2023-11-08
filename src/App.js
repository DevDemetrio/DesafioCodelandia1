import "./App.css";
import Search from "./components/search/Search";
import Comments from "./components/comments/Comments";

import { useState, useEffect } from "react";
const url = "http://localhost:3000/noticias";

function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);
      const data = await res.json();

      setNews(data);
    }
    fetchData();
  }, []);

  console.log(news);
  return (
    <div className="App">
      <Search />
      {news.map((noticia, index) => {
        console.log(noticia.Data, noticia.Titulo, noticia.Texto);
        return (
          <Comments
            key={index}
            data={noticia.Data}
            titulo={noticia.Titulo}
            texto={noticia.Texto}
          />
        );
      })}
    </div>
  );
}

export default App;
