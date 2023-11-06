import "./Comments.css";

const Comments = () => {
  return (
    <article className="comment__container">
      <header>
        <span className="data">data</span>
        <span className="icon">icone</span>
      </header>
      <h1>Titulo comentário</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel
        diam fringilla, eu ullamcorper ex iaculis.
      </p>
    </article>
  );
};

export default Comments;
