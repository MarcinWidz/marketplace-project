import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Home() {
  const [data, setData] = useState();
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <div>
      <div className='hero'>
        <div className='center'>
          <div className='cta-div'>
            <h1>Prêts à faire du tri dans vos placards?</h1>
            <button>Commencer à Vendre</button>
          </div>
        </div>
      </div>
      <div className='offers-div'>
        {data.offers.map((product) => {
          return (
            <Link key={product._id} to={`/offer/${product._id}`}>
              <div className='offer'>
                <div className='product-user'>
                  {product.owner.account.username}
                </div>
                <div className='product-photo'>
                  <img src={product.product_image.secure_url} alt='' />
                </div>
                <div className='product-details-div'>
                  <p className='product-price'>{product.product_price}€</p>
                  <span className='product-likes'>10likes</span>
                  <div className='product-details'>
                    {product.product_details.map((detail, index) => {
                      return (
                        <div key={index}>
                          {detail.MARQUE && <p>{detail.MARQUE}</p>}
                          {detail.ÉTAT && <p>{detail.ÉTAT}</p>}
                          {detail.COULEUR && <p>{detail.COULEUR}</p>}
                          {detail.TAILLE && <p>{detail.TAILLE}</p>}
                          {detail.EMPLACEMENT && <p>{detail.EMPLACEMENT}</p>}
                          {detail["MODES DE PAIEMENT"] && (
                            <p>{detail["MODES DE PAIEMENT"]}</p>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
