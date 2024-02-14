import Carousel from "react-bootstrap/Carousel";
import "../styles/horizontalScroll.scss";
import FeaturedCarouselItem from "./FeaturedCarouselItem";
import { useState } from "react";

function HorizontalScroll() {
  const carouselInterval = 300000000;
  const [games, setGames] = useState([
    {
      title: "TF2",
      image: "pilt",
      desc: "hea mang",
    },
    {
      title: "Portal 2",
      image: "pilt",
      desc: " ka hea mang",
    },
    {
      title: "DRG",
      image: "pilt",
      desc: "Rock and Stone",
    },
  ]);

  return (
    <Carousel className="FeatureDcarousel">
      {games.map((game, index) => (
        <Carousel.Item interval={carouselInterval} key={game.title}>
          <Carousel.Caption>
            <FeaturedCarouselItem games={games[index]}></FeaturedCarouselItem>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default HorizontalScroll;
