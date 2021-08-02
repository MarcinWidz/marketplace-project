import axios from "axios";
import { Range } from "react-range";
import { useState, useEffect } from "react";
import "./Filters.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Filters({
  data,
  setData,
  values,
  setValues,
  priceMin,
  setPriceMin,
  priceMax,
  setPriceMax,
  title,
  setTitle,
  sort,
  setSort,
  search,
  setSearch,
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [ascDesc, setAscDesc] = useState("ascendant ⇡");

  useEffect(() => {
    const filter = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offers?title=${search}&priceMin=${priceMin}&priceMax=${priceMax}&sort=${sort}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    filter();
  }, [title, priceMin, priceMax, sort, setData, search]);

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearch(value);
  };

  const handleClickSort = () => {
    if (clicked === true) {
      setClicked(false);
      setSort("price-desc");
      setAscDesc("ascendant ⇡");
    } else {
      setClicked(true);
      setSort("price-asc");
      setAscDesc("descendant ⇣");
    }
  };

  return isLoading === true ? (
    <div>"Loading..."</div>
  ) : (
    <div>
      <div className='filters-search-flex'>
        <div className='search-div'>
          <FontAwesomeIcon icon='search' style={{ color: "#666666" }} />
        </div>
        <input
          onChange={handleSearchChange}
          className='filters-search-bar'
          type='text'
          placeholder='Recherche des articles'
        />
      </div>
      <div className='filters-flex'>
        <button onClick={handleClickSort} className='filters-sort-btn'>
          Prix {ascDesc}
        </button>
        <div className='filters-slider'>
          <Range
            step={1}
            min={0}
            max={50}
            values={values}
            onChange={(values) => {
              console.log(values);
              setValues(values);
              setPriceMin(values[0]);
              setPriceMax(values[1]);
            }}
            renderTrack={({ props, children }) => (
              <div
                {...props}
                style={{
                  ...props.style,
                  height: "6px",
                  width: "300px",
                  backgroundColor: "#ccc",
                }}
              >
                {children}
              </div>
            )}
            renderThumb={({ index, props }) => (
              <div
                className='price-slider-circle'
                {...props}
                style={{
                  ...props.style,
                  height: "12px",
                  width: "12px",
                  backgroundColor: "#2DB0BA",
                  borderRadius: "50%",
                  outline: "none",
                }}
              >
                <div className='filters-values'>{values[index]}&nbsp;€</div>
              </div>
            )}
          />
        </div>
      </div>
    </div>
  );
}

export default Filters;
