type games = {
  title: string;
  image: string;
  desc: string;
};

function FeaturedCarouselItem({ games }) {
  return (
    <div className="FeaturedCarouselItem">
      <div className="gameTitle">{games.title}</div>
    </div>
  );
}

export default FeaturedCarouselItem;
