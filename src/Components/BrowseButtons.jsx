import React from "react";
import { observer } from "mobx-react";
import { BrowseContext } from "../Stores/BrowseStore";
import MainSearchButton from "./MainSearchButton";
import ResetDataButton from "./ResetDataButton";
import "./BrowseButtons.css";

const BrowseButtons = () => {
  //Import relevant context
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
    browseStore.setBrowsingData(prop, value)

    let properties = [];
    for (let key in browseStore.browsingData) {
      if (browseStore.browsingData[key])
        properties.push(
          `"${key}"` + "=" + `'${browseStore.browsingData[key]}'`
        );
    }

    let params = {};
    if (properties.length) {
      properties = properties.join("AND");
      params = {
        searchQuery: `WHERE ${properties}`,
      };
    }
    browseStore.setParams(params);
  }

    return (
      <div className="browse-buttons-container">
        <span className="lead">Filter:</span>
        <div className="browseButtonsContainer">
          {browseCategories.map((category) => {
            return (
              <div key={category.name}>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder={category.labelPlaceholder}
                    name={category.name}
                    value={browseStore.browsingData[category.name]}
                    onChange={handleData}
                  />
                  <label htmlFor="floatingInput">{category.labelText}</label>
                </div>
              </div>
            );
          })}
        </div>
        <MainSearchButton />
        <ResetDataButton />
      </div>
    );
};

export default observer(BrowseButtons);
