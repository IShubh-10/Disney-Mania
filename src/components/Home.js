import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Recommends from "./Recommends";
import Trending from "./Trending";
import Viewers from "./Viewers";
import watchlists from "./Watchlists";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { collection, getDocs } from "firebase/firestore";
import db from "../firebase";
import { setMovies } from "../features/movie/movieSlice";
import { selectUserName } from "../features/user/userSlice";

const Home = (props) => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "movies"));

        let recommends = [];
        let newDisneys = [];
        let originals = [];
        let trending = [];
        let Watchlists = [];

        querySnapshot.forEach((doc) => {
          const movieData = { id: doc.id, ...doc.data() };

          switch (movieData.type) {
            case "recommend":
              recommends.push(movieData);
              break;
            case "new":
              newDisneys.push(movieData);
              break;
            case "original":
              originals.push(movieData);
              break;
            case "trending":
              trending.push(movieData);
              break;
            case "watchlist":
              Watchlists.push(movieData);
            default:
              break;
          }
        });

        dispatch(
          setMovies({
            recommend: recommends,
            newDisney: newDisneys,
            original: originals,
            trending: trending,
            watchlist: Watchlists,
          })
        );
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, [dispatch, userName]);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends />
      <Trending />
      <Originals />
      <NewDisney />
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;



export default Home;
