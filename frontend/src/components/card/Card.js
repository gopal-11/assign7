// frontend/src/components/card/Card.js
import './index.css';

// component to render the pokemon image
const Card = ({ url }) => {
  return (
    <div className="card">
      <img src={url} alt="image for pokemon" />
    </div>
  );
};

export default Card;
