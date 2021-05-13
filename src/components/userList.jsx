import React, { useState, useEffect } from "react";
import axios from "../api/axios";
import "../styles/userList.scss";

const UserList = () => {
/** state variable to store the fetched result from api */
  const [data, setData] = useState([]);

/** some urls based on filters category */
  const filterBy = {
    category: "filter.php?c=Cocktail",
    name: "search.php?s=margarita",
    ingredient: "filter.php?i=Gin",
  };

  /** function used to fetch data */
  const getFilteredData = async (requestUrl) => {
    console.log();
    const res = await axios.get("/" + requestUrl);
    setData(res.data.drinks);
  };

  return (
    <>
      <div className="main-wrapper">
      <h2> Sample Cocktails</h2>
        <div className="header-section d-grid gap-2 d-md-flex justify-content-md-end">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => getFilteredData(filterBy.category)}
          >
            Drinks by Category
          </button>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => getFilteredData(filterBy.name)}
          >
            Drinks by Name
          </button>
          <button
            type="button"
            className="btn btn-info"
            onClick={() => getFilteredData(filterBy.ingredient)}
          >
            Drinks by Ingredient
          </button>
        </div>
        <table className="table table-hover align-middle">
          <thead>
            <tr>
              <td>ID</td>
              <td>Name</td>
              <td>Thumbnail</td>
            </tr>
          </thead>
          <tbody>
            {data.map((currVal, index) => {
              return (
                <tr key={index}>
                  <td>{currVal.idDrink}</td>
                  <td>{currVal.strDrink}</td>
                  <td>
                    <img
                      src={currVal.strDrinkThumb}
                      height="80"
                      alt="cocktail_image"
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UserList;
