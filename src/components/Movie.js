import PropTypes from "prop-types";

function Movie({ coverImg, title, summary, genres }) {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h2>{title}</h2>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;

/*
1. 부모로 부터 프로퍼티를 받아서 처리하게 만든다. app.js 볼것!
2. Movie.propTypes 를 정해준다.!(안정해줘도 되지만 정해주는게 나중을 위해 좋다. )

*/
