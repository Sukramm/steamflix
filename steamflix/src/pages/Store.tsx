import HorizontalScroll from "../components/HorizontalScroll";
import NewsBanner from "../components/NewsBanner";

function Store() {
  const eventActive = true;
  return (
    <div>
      {eventActive && <NewsBanner></NewsBanner>}
      <HorizontalScroll></HorizontalScroll>
    </div>
  );
}

export default Store;
