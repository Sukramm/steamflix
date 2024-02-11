import passCard from "../../public/pics/payment/passCard.png";
import expertCard from "../../public/pics/payment/expertCard.png";
import "../styles/payment.scss";

function Payment() {
  const cards = [
    {
      cardName: "PassCard",
      cardImg: passCard,
    },
    {
      cardName: "ExpertCard",
      cardImg: expertCard,
    },
    {
      cardName: "ExpertCard",
      cardImg: expertCard,
    },
    {
      cardName: "ExpertCard",
      cardImg: expertCard,
    },
  ];

  return (
    <div className="payment">
      <div className="container">
        <div className="methods">
          <div className="methodsWrap">
            <div className="methodList row">
              {cards.map((card) => (
                <div
                  className={`method col-sm
                 ${card.cardName}`}
                  key={card.cardName}
                >
                  <img
                    src={card.cardImg}
                    className="cardImg"
                    alt={card.cardName}
                    width={128}
                    height={128}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
