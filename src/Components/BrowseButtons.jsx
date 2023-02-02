import { useObserver } from "mobx-react";
import React from "react";
import { BrowseContext } from "../Stores/BrowseStore";
import MainSearchButton from "./MainSearchButton";
import "./BrowseButtons.css";

const BrowseButtons = () => {
  //Initialize relevant stores
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
  ];

  //SearchQuery Handling
  function handleData(e) {
    const prop = e.target.name;
    const value = e.target.value;
    browseStore.getBrowsingData(prop, value);

    let properties = [];
    for (let key in browseStore.browsingData) {
      if (browseStore.browsingData[key])
        properties.push(
          `"${key}"` + "=" + `'${browseStore.browsingData[key]}'`
        );
    }

    if (properties) {
      properties = properties.join("AND");
    }

    const params = {
      searchQuery: `WHERE ${properties}`,
    };

    browseStore.getParams(params);
  }

  return useObserver(() => {
    return (
      <div className="browse-buttons-container">
        <span className="lead">Filter:</span>
        <div className="browseButtonsContainer">
          {browseCategories.map((category) => {
            return (
              <div>
                <div class="form-floating mb-3">
                  <input
                    type="text"
                    class="form-control"
                    id="floatingInput"
                    placeholder={category.labelPlaceholder}
                    name={category.name}
                    value={browseStore.browsingData[category.name]}
                    onChange={handleData}
                  />
                  <label for="floatingInput">{category.labelText}</label>
                </div>
              </div>
            );
          })}
        </div>
        <MainSearchButton />
      </div>
    );
  });
};

export default BrowseButtons;
