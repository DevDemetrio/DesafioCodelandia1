import "./Comments.css";

const Comments = (props) => {
  return (
    <aside>
      <div className="comment__container">
        <div className="comment">
        <header>
          <div>
            <span className="data">{props.data}</span>
            <span className="icon">icone</span>
          </div>
          <h2>{props.titulo}</h2>
        </header>
        <p>{props.texto}</p>
        </div>
      </div>
    </aside>
  );
};

export default Comments;
