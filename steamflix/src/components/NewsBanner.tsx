import { Link } from "react-router-dom";
import "../styles/Store/newsBanner.scss";

function NewsBanner() {
  const navMenuItems = [
    {
      item: "Category",
      link: "#",
      subItems: ["Action", "RPG", "F2P", "DEMO", "RTS", "Racing", "Co-op"],
    },
    {
      item: "Point Shop",
      link: "/store/pointsShop",
      subItems: null,
    },
    {
      item: "News",
      link: "/store/news",
      subItems: null,
    },
    {
      item: "Wishlist",
      link: "/store/Wishlist",
      subItems: null,
    },
  ];
  return (
    <div className="newsBanner">
      <div className="mainBanner">
        <div className="navMenu">
          <div className="navMenuWrap">
            <div className="navItems">
              {navMenuItems.map((item) => (
                <div className={`navitem ${item.item}`}>
                  <Link to={item.link}>{item.item}</Link>
                </div>
              ))}
              <div className="navitem">Search</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsBanner;
