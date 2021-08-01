import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Offer.css";

const Offer = () => {
  const { id } = useParams();

  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, [id]);

  return isLoading ? (
    <p>En cours de chargement...</p>
  ) : (
    <div className='clicked-offer'>
      <img
        className='clicked-img'
        src={data.product_image.secure_url}
        alt={data.product_name}
      />
      <div className='clicked-details-div'>
        <p>{data.product_price}</p>
        <ul>
          {data.product_details.map((elem, index) => {
            const keys = Object.keys(elem);
            return (
              <li key={index}>
                <span>{keys[0]}</span>
                <span> : </span>
                <span>{elem[keys[0]]}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Offer;
