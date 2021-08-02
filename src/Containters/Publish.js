import { useState, useCallback } from "react";
import axios from "axios";
import Dropzone from "../Components/Dropzone";
import "./Publish.css";

function Publish({ userToken }) {
  const [offerData, setOfferData] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("");
  const [brand, setBrand] = useState("hello");
  const [size, setSize] = useState(0);
  const [color, setColor] = useState("");
  const [picture, setPicture] = useState("");

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
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
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
        formData,
        {
          headers: {
            authorization: `Bearer ${userToken}`,
          },
        }
      );
      console.log(response.data);
      setOfferData(response.data);
    } catch (error) {
      console.log(error.response);
    }
  };
  return (
    <div className='publish-div'>
      <p className='a'>Vends ton article</p>
      <form className='publish-form' onSubmit={handleSubmit} action=''>
        <div className='publish-photo-zone'>
          <Dropzone />
          <input
            onChange={(event) => setPicture(event.target.files[0])}
            type='file'
          />
        </div>
        <div className='publish-title-zone'>
          <label htmlFor='title'>Titre:</label>
          <input
            type='text'
            onChange={(event) => setTitle(event.target.value)}
          />
          <label htmlFor='description'>Decris ton Article:</label>
          <input
            onChange={(event) => setDescription(event.target.value)}
            type='text'
          />
        </div>
        <div className='publish-details-zone'>
          <label htmlFor='brand'>Marque:</label>
          <input
            onChange={(event) => setBrand(event.target.value)}
            type='text'
          />
          <label htmlFor='size'>Taille:</label>
          <input
            onChange={(event) => setSize(event.target.value)}
            type='number'
          />
          <label htmlFor='color'>Couleur:</label>
          <input
            onChange={(event) => setColor(event.target.value)}
            type='text'
          />
          <label htmlFor='condition'>Etat:</label>
          <input
            onChange={(event) => setCondition(event.target.value)}
            type='text'
          />
          <label htmlFor='city'>Lieu</label>
          <input
            onChange={(event) => setCity(event.target.value)}
            type='text'
          />
        </div>

        <div className='publish-price-zone'>
          <label htmlFor='price'>Price:</label>
          <input
            onChange={(event) => setPrice(event.target.value)}
            type='number'
          />
        </div>
        <input type='submit' value='Publier' />
      </form>
    </div>
  );
}

export default Publish;
