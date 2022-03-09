import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select>
          {coins.map((coin) => (
            <option key={coin.id}>
              {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
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
          useEffect(() => {
            fetch("https://api.coinpaprika.com/v1/tickers")
              .then((response) => response.json())
              .then((json) => {
                console.log(json)
              });
          }, []);
      
  4. 가져온데이터를 넣어줄 공간을 마련한다. 
    const [coins, setCoins] = useState([]);

  5. 스테이트에 데이터를 넣어주고.. 넣어줫으므로 로딩중 이 아니게 한다.
        setCoins(json);
        setLoading(false);
  6. 데이터가 화면에 표시되게 해준다. 
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select>
          {coins.map((coin) => (
            <option>
              {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
*/   