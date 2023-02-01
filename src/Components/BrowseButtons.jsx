import { useObserver } from "mobx-react";
import React, { useContext } from "react";
import { useState } from "react";
import "./BrowseButtons.css";
import { BrowseContext } from "../Stores/BrowseStore";
import axios from "axios";
import { runInAction } from "mobx";
import { PaginationContext } from "../Stores/PaginationStore";
import { DataContext } from "../Stores/DataStore";

const BrowseButtons = () => {
  //Initialize relevant stores
  const dataStore = React.useContext(DataContext);
  const paginationStore = React.useContext(PaginationContext);
  const browseStore = React.useContext(BrowseContext);

  //Category specific information (for schema properties)
  const browseCategories = [
    {
      name: "car",
      labelText: "Which brand are you looking for?",
      labelPlaceholder: "Volkswagen",
    },
    {
      name: "car_model",
      labelText: "Which car model would you like to see?",
      labelPlaceholder: "Golf 4",
    },
    {
      name: "car_model_year",
      labelText: "Which model year?",
      labelPlaceholder: "2000",
    },
    {
      name: "car_color",
      labelText: "Any particular color?",
      labelPlaceholder: "Navy Blue",
    },
    {
      name: "price",
      labelText: "Preferable price range?",
      labelPlaceholder: "2000$ - 3500$",
    },
  ];

  //State holding user input values
  const [dataForFiltering, setDataForFiltering] = useState({
    car: "",
    car_model: "",
    car_model_year: "",
    car_color: "",
    //"price": "",  - Set price value
  });

  //Set local and global state for user input values
  function handleData(e) {
    const { name, value } = e.target;
    setDataForFiltering({ ...dataForFiltering, [name]: value });
    browseStore.getBrowsingData(dataForFiltering);
  }

  //Function for modifying search params and fetching filtered data
  async function sendBrowseFilters() {
    let properties = [];
    for (let key in dataForFiltering) {
      if (dataForFiltering[key])
        properties.push(`"${key}"` + "=" + `'${dataForFiltering[key]}'`);
    }

    if (properties == undefined) {
      return;
    } else {
      properties = properties.join("AND");
    }

    const params = {
      searchQuery: `WHERE ${properties}`,
    };

    let res = await axios.get(
      `https://api.baasic.com/beta/new-react-project/resources/car?page=${paginationStore.page}`,
      { headers: { "Content-type": "application/json" }, params: params }
    );
    let info = await res.data;
    dataStore.getFilteredData(info);
    console.log(params.searchQuery);
  }

  return useObserver(() => {
    return (
      <div>
        <span>Filter:</span>
        <div className="browseButtonsContainer">
          {browseCategories.map((category) => {
            return (
              <div>
                <label>{category.labelText}</label>
                <input
                  type="text"
                  placeholder={category.labelPlaceholder}
                  name={category.name}
                  value={dataForFiltering[category.name]}
                  onChange={handleData}
                />
              </div>
            );
          })}
          <button onClick={sendBrowseFilters}>Search</button>
        </div>
      </div>
    );
  });
};

export default BrowseButtons;
