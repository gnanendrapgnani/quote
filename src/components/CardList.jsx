import Card from "./Card";

const CardList = ({ info }) => {
  console.log("This state is form cardlist", info.quote);
  return (
    <>
      <div className="mainContainer">
        {info.map((item, index) => (
          <Card key={index} author={item.author} quote={item.quote} />
        ))}
      </div>
    </>
  );
};

export default CardList;
