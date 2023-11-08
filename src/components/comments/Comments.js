import "./Comments.css";

const Comments = (props) => {
  return (
    <aside className="comment__container">
      <header>
        <div>
          <span className="data">{props.data}</span>
          <span className="icon">icone</span>
        </div>
        <h2>{props.titulo}</h2>
      </header>

      <p>{props.texto}</p>
    </aside>
  );
};

export default Comments;
