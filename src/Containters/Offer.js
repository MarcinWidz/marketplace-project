import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Offer.css";

const Offer = ({ userToken }) => {
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
        <p className='clicked-price'>{data.product_price}€</p>
        <ul>
          {data.product_details.map((elem, index) => {
            const keys = Object.keys(elem);
            return (
              <div className='upper'>
                <li key={index}>
                  <div className='clicked-details-left'>
                    <span>{keys[0]}</span>
                    <span> : </span>
                  </div>
                  <span>{elem[keys[0]]}</span>
                </li>
              </div>
            );
          })}
        </ul>
        <li className='clicked-name'>{data.product_name}</li>
        <li className='clicked-description'>{data.product_description}</li>
        <li className='clicked-user'>{data.owner.account.username}</li>

        {userToken ? (
          <Link
            to={{
              pathname: "/payment",
              state: {
                title: data.product_name,
                price: data.product_price,
                userToken: userToken,
              },
            }}
          >
            <button className='clicked-buy'>Acheter</button>
          </Link>
        ) : (
          <Link to='/user/login'>
            <button className='clicked-buy'>Acheter</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Offer;
