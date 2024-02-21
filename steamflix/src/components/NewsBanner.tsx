import testEvent from "../assets/pics/events/testEvent.png";
import "../styles/Store/newsBanner.scss";

function NewsBanner() {
  return (
    <div className="newsBanner">{testEvent && <img src={testEvent}></img>}</div>
  );
}

export default NewsBanner;
