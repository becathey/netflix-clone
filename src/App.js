import requests from './requests'
import Banner from './Banner';
import Nav from './Nav';
import Row from './Row';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} isLargeRow />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Science Fiction Movies" fetchUrl={requests.fetchSFMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
