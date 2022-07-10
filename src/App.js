import Banner from "./components/Banner";
import Row from "./components/Row";
import requests from './requests'
import Navbar from "./components/Navbar";
function App() {
 

  return (
    <div className="bg-[#111]">
      <Navbar />
      <Banner />
      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />{" "}
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />{" "}
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />{" "}
       {/* <Row title="Top Upcoming" fetchUrl={requests.fetchUpcoming} />{" "}  */}
       <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />{" "} 
       <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />{" "} 
       <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />{" "}
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />{" "}
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />{" "} 
       {/* <Row title="Animations" fetchUrl={requests.fetchAnimations} />{" "}  */}
    </div>
  );
}

export default App;
