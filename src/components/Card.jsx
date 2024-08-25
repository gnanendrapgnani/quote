const Card = ({ author, quote }) => {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{author}</h5>
          <p className="card-text">{quote}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
