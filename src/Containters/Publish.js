import { useState } from "react";
import axios from "axios";
import Dropzone from "react-dropzone";
import "./Publish.css";

function Publish({ userToken }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("");
  const [brand, setBrand] = useState("hello");
  const [size, setSize] = useState(0);
  const [color, setColor] = useState("");
  const [picture, setPicture] = useState();

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
    } catch (error) {
      console.log(error.response);
    }
  };
  return (
    <div className='publish-div'>
      <p className='a'>Vends ton article</p>
      <form className='publish-form' onSubmit={handleSubmit} action=''>
        <div className='publish-photo-zone'>
          <div className='publish-photo-zone-dashed'>
            <Dropzone
              className='dropzone'
              onDrop={(acceptedFiles) => setPicture(acceptedFiles[0])}
            >
              {({ getRootProps, getInputProps }) => (
                <section>
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    {!picture ? (
                      <p>
                        <span className='dropzone-plus'>+</span>Depose ton
                        fichier ici
                      </p>
                    ) : (
                      <p>Photo ajouté</p>
                    )}
                  </div>
                </section>
              )}
            </Dropzone>
          </div>
        </div>
        <div className='publish-title-zone'>
          <div className='publish-title'>
            <label htmlFor='title'>Titre:</label>
            <input
              placeholder='ex. Chemise Sézane verte'
              type='text'
              onChange={(event) => setTitle(event.target.value)}
            />
          </div>
          <div className='publish-description'>
            <label htmlFor='description'>Decris ton Article:</label>
            <input
              placeholder='ex. jamais utilisé'
              onChange={(event) => setDescription(event.target.value)}
              type='text'
            />
          </div>
        </div>
        <div className='publish-details-zone'>
          <div>
            <label htmlFor='brand'>Marque:</label>
            <input
              placeholder='ex. Zara'
              onChange={(event) => setBrand(event.target.value)}
              type='text'
            />
          </div>
          <div>
            <label htmlFor='size'>Taille:</label>
            <input
              placeholder='ex. 42'
              onChange={(event) => setSize(event.target.value)}
              type='number'
            />
          </div>
          <div>
            <label htmlFor='color'>Couleur:</label>
            <input
              placeholder='ex. Vert'
              onChange={(event) => setColor(event.target.value)}
              type='text'
            />
          </div>
          <div>
            <label htmlFor='condition'>Etat:</label>
            <input
              placeholder='comme neuf'
              onChange={(event) => setCondition(event.target.value)}
              type='text'
            />
          </div>
          <div>
            <label htmlFor='city'>Lieu</label>
            <input
              placeholder='ex. Paris'
              onChange={(event) => setCity(event.target.value)}
              type='text'
            />
          </div>
        </div>

        <div className='publish-price-zone'>
          <label htmlFor='price'>Price:</label>
          <input
            placeholder='ex. 23€'
            onChange={(event) => setPrice(event.target.value)}
            type='text'
          />
        </div>
        <div className='publish-btn-div'>
          <input className='publish-btn' type='submit' value='Ajouter' />
        </div>
      </form>
    </div>
  );
}

export default Publish;
