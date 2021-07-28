import Offers from "../Components/Offers";

function Home({ data, setData }) {
  return (
    <div>
      <div className='hero'>
        <div className='center'>
          <div className='cta-div'>
            <h1>Prêts à faire du tri dans vos placards?</h1>
            <button>Commencer à Vendre</button>
          </div>
          <Offers data={data} setData={setData} />
        </div>
      </div>
    </div>
  );
}

export default Home;
