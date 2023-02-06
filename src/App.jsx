import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import SingleListing from "./Pages/SingleListing";
import { TokenProvider } from "./Stores/TokenStore";
import { PaginationProvider } from "./Stores/PaginationStore";
import { DataProvider } from "./Stores/DataStore";
import { FilterProvider } from "./Stores/FilterStore";
import { SortingProvider } from "./Stores/SortingStore";


const App = () => {
  return (
    <SortingProvider>
      <FilterProvider>
        <DataProvider>
          <PaginationProvider>
            <TokenProvider>
              <div>
                <Routes>
                  <Route path="/" element={<Login />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/singleListing/:id" element={<SingleListing/>} />
                </Routes>
              </div>
            </TokenProvider>
          </PaginationProvider>
        </DataProvider>
      </FilterProvider>
    </SortingProvider>
  );
};

export default App;
