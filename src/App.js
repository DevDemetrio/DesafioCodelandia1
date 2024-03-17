import "./App.css";
import Search from "./components/search/Search";
import Comments from "./components/comments/Comments";

import { useState, useEffect } from "react";
const url = "https://api-de-noticias.vercel.app/noticias";

function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error("Failed to fetch");
        }
        const data = await res.json();
        setNews(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
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
