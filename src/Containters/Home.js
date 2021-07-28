import Header from "../Components/Header";
import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get();
      } catch (error) {
        console.log(error.message);
      }
    };
  });

  return (
    <div>
      <div className='hero'>
        <div className='center'>
          <div className='cta-div'>
            <h1>Prêts à faire du tri dans vos placards?</h1>
            <button>Commencer à Vendre</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
