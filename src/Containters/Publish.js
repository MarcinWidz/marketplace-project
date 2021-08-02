import { useState } from "react";
import axios from "axios";

function Publish({ userToken }) {
  const [offerData, setOfferData] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState(0);
  const [color, setColor] = useState();
  const [picture, setPicture] = useState();

  console.log(offerData);
  console.log(title);

  const handleSubmit = async (event) => {
    event.preventDefalut();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("condition", condition);
    formData.append("city", city);
    formData.append("brand", brand);
    formData.append("size", size);
    formData.append("color", color);
    formData.append("picture", picture);
    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
        formData,
        {
          headers: {
            authorization: `Bearer ${userToken}`,
          },
        }
      );
      console.log(response.data.result);
      setOfferData(response.data.result);
    } catch (error) {
      console.log(error.response);
    }
  };
  console.log(offerData);
  return (
    <div>
      <p className='pppp'>Publier une offre</p>
      <form onSubmit={handleSubmit} action=''>
        <label htmlFor='title'>Title:</label>
        <input type='text' onChange={(event) => setTitle(event.target.value)} />
        <label htmlFor='description'>Description:</label>
        <input
          onChange={(event) => setDescription(event.target.value)}
          type='text'
        />
        <label htmlFor='price'>Price:</label>
        <input
          onChange={(event) => setPrice(event.target.value)}
          type='number'
        />
        <label htmlFor='condition'>Condition:</label>
        <input
          onChange={(event) => setCondition(event.target.value)}
          type='text'
        />
        <label htmlFor='city'>City</label>
        <input onChange={(event) => setCity(event.target.value)} type='text' />
        <label htmlFor='brand'>Brand:</label>
        <input onChange={(event) => setBrand(event.target.value)} type='text' />
        <label htmlFor='size'>Size</label>
        <input
          onChange={(event) => setSize(event.target.value)}
          type='number'
        />
        <label htmlFor='color'>Color:</label>
        <input onChange={(event) => setColor(event.target.value)} type='text' />
        <label htmlFor='picture'>Picture:</label>
        <input
          onChange={(event) => setPicture(event.target.files[0])}
          type='file'
        />
        <input type='submit' value='Publier' />
      </form>
    </div>
  );
}

export default Publish;
