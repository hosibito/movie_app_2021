import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();    
  }, []);

  return (
    <div>
      {loading ? (
          <h1>Loading...</h1>
        ) : (
          <div>
            {movies.map((movie) => (
              <div key={movie.id}>
                <img src={movie.medium_cover_image} />
                <h2>{movie.title}</h2>
                <p>{movie.summary}</p>
                <ul>
                  {movie.genres.map((g) => (
                    <li key={g}>{g}</li>
                  ))}
                </ul>
              </div>
            ))}       
          </div>
       )      
      }
    </div>
  );
}
export default App;

/*
  의식의 흐름
  1. 로딩체크용 상태를 만든다. 
    const [loading, setLoading] = useState(true);  기본값 True (로딩중)
  2. 로딩중일떄 끝일떄의 화면을 크게 구성한다. 
    <h1>The Coins!</h1>
    {loading ? <strong>Loading...</strong> : null }

  3. 데이터를 가져온다.
      데이터를 가져오는건 처음시작할때 한번만 하고 싶으므로 useEffect 를 사용한다. 
          전에는 then 을 썻으나 최신 JS 문법사용
      
  4. 가져온데이터를 넣어줄 공간을 마련한다. 
     const [movies, setMovies] = useState([]);

  5. 스테이트에 데이터를 넣어주고.. 넣어줫으므로 로딩중 이 아니게 한다.
      setMovies(json.data.movies);
      setLoading(false););
  6. 데이터가 화면에 표시되게 해준다.       
  
*/   