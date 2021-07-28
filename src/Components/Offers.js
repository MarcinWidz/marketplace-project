function Offers({ data, setData }) {
  return (
    <div className='offersDiv'>
      {data.offers.map((item, index) => {
        return <div className='offer'></div>;
      })}
    </div>
  );
}

export default Offers;
