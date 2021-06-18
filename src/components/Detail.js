import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Api } from "./Api";
import Heading from "../components/Heading";
import axios from "axios";
import Items from "./Items";
import Loading from "./Loading";
import { Link } from "react-router-dom";

function Detail() {
  const [item, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let history = useHistory();

  const { idDrink } = useParams();

  if (!idDrink) {
    history.push("/");
  }
  const url = Api + "lookup.php?i=";
  const newApi = url + idDrink;
  useEffect(() => {
    const fetchCards = async () => {
      try {
        const data = await axios.get(newApi);
        console.log(data.data);
        if (data.status === 200) {
          setItems(data.data.drinks[0]);
        } else {
          setError("An error occured");
        }
      } catch (error) {
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    };
    fetchCards();
  }, [newApi]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>ERROR: An error occured</div>;
  }

  return (
    <>
      <div className="container">
        <Heading title="Detail page"></Heading>

        <Items
          key={item.idDrink}
          strCategory={item.strCategory}
          strDrinkThumb={item.strDrinkThumb}
          strDrink={item.strDrink}
          strAlcoholic={item.strAlcoholic}
          strInstructions={item.strInstructions}
          strIngredient1={item.strIngredient1}
          strIngredient2={item.strIngredient2}
          strIngredient3={item.strIngredient3}
          strIngredient4={item.strIngredient4}
        />

        <Link to={`/`}>
          <button className="mb-4 mt-4 m-auto p-2 text-center bg-indigo-300 rounded-full hover:bg-indigo-500 transition duration-300 ease-in-out flex items-center text-base">
            Back to the list
          </button>
        </Link>
      </div>
    </>
  );
}

export default Detail;
