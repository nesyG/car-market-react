import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Listing from "./Pages/Listing/Listing";
import { StoreProvider } from "./Stores/TokenStore";
import { PaginationProvider } from "./Stores/PaginationStore";
import { DataProvider } from "./Stores/DataStore";
import { BrowseProvider } from "./Stores/BrowseStore";
import { SortingProvider } from "./Stores/SortingStore";

const App = () => {
  return (
    <SortingProvider>
      <BrowseProvider>
        <DataProvider>
          <PaginationProvider>
            <StoreProvider>
              <div>
                <Routes>
                  <Route path="/" element={<Login />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/listing" element={<Listing />} />
                </Routes>
              </div>
            </StoreProvider>
          </PaginationProvider>
        </DataProvider>
      </BrowseProvider>
    </SortingProvider>
  );
};

export default App;
