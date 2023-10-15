
import NavigasiBar from "../components/NavigasiBar";
import Intro from "../components/Intro";
import "../style/landingPage.css";
import Content from "../components/Content";

const Home = () => {

  return (
    <div className="mybg-home">
      <NavigasiBar />
      <Intro />
      <Content />

     
    </div>
  );
};

export default Home;
