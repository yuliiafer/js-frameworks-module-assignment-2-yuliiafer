import { useState, useEffect } from "react";
import axios from "axios";
import { Api } from "./Api";
import { Link } from "react-router-dom";
import Loading from "./Loading";

function ApiList() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const APIList = Api + "/search.php?s=";

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(APIList);
        console.log(response);
        if (response.status === 200) {
          setItems(response.data.drinks);
        } else {
          setError("An error occured");
        }
      } catch (error) {
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    };
    fetchItems();
  }, [APIList]);
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <h3 className=" text-indigo-700 lg:text-5xl md:text-5xl sm:text-3xl text-2xl font-black mb-14 text-center">
        Cocktails
      </h3>
      <main className="page-content p-4 static grid gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 container mx-auto md:px-4 sm:grid-cols-1">
        {items.map((data) => {
          return (
            <div className="card cursor-pointer mt-4 text-center overflow-hidden relative flex w-full h-full p-4 text-white bg-white">
              <Link key={data.idDrink} to={`detail/${data.idDrink}`}>
                <img
                  src={data.strDrinkThumb}
                  alt={data.strCategory}
                  className="rounded-full shadow-2xl"
                />
                <div className="content w-full p-4 flex flex-col items-center relative">
                  <h2 className="title font-bold leading-5 text-xl text-gray-900">
                    {data.strDrink}
                  </h2>
                  <p className="description italic font-light text-lg">
                    Category: {data.strCategory}
                  </p>

                  <button className="btn m-auto p-2 px-4 mt-8 text-center bg-white rounded-full hover:bg-indigo-300 transition duration-300 ease-in-out flex items-center text-base text-indigo-700">
                    View details
                  </button>
                </div>
              </Link>
            </div>
          );
        })}
      </main>
    </>
  );
}

export default ApiList;
