import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Items = (props) => {
  const {
    idDrink,
    strDrinkThumb,
    strCategory,
    strDrink,
    strAlcoholic,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strInstructions,
  } = props;
  return (
    <Link to={`detail/${idDrink}`}>
    <div>
      <img
        src={strDrinkThumb}
        alt={strCategory}
        className='mt-16 mx-auto shadow-xl hover:transform hover:scale-100 hover:md:scale-75 h-96 flex items-center justify-center"'
      />
      <div className="center-content text-left">
        <h2 className="md:text-5xl sm:text-base mb-2 text-center text-indigo-600 mt-4">
          {strDrink}
        </h2>
        <h3 className="inline lg:text-2xl md:text-2xl text-indigo-600 mt-4">Category: </h3>
        <p className="mb-2 inline">{strCategory}</p>
        <p>{idDrink}</p>
        <h3 className="inline lg:text-2xl md:text-2xl text-indigo-600 mt-4">Alcoholic: </h3>
        <p className="mb-2 inline">{strAlcoholic}</p>
        <h3 className="lg:text-2xl md:text-2xl text-indigo-600 mt-4">Instruktion: </h3>
        <p>{strInstructions}</p>
        <h3 className="lg:text-2xl md:text-2xl text-indigo-600 mt-4">Ingredients:</h3>
        <ul>
          <li>{strIngredient1}</li>
          <li>{strIngredient2}</li>
          <li>{strIngredient3}</li>
          <li>{strIngredient4}</li>
        </ul>
      </div>
    </div>
    </Link>
  );
};

export default Items;

Items.propTypes = {
  idDrink: PropTypes.number.isRequired,
  strDrinkThumb: PropTypes.node.isRequired,
  strCategory: PropTypes.string.isRequired,
  strDrink: PropTypes.string.isRequired,
  strAlcoholic: PropTypes.string.isRequired,
  strIngredient1: PropTypes.string.isRequired,
  strIngredient2: PropTypes.string.isRequired,
  strIngredient3: PropTypes.string.isRequired,
  strIngredient4: PropTypes.string.isRequired,
  strInstructions: PropTypes.string.isRequired,

};
