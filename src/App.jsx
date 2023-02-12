import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { TokenProvider } from "./Stores/TokenStore";
import { PaginationProvider } from "./Stores/PaginationStore";
import { DataProvider } from "./Stores/DataStore";
import { FilterProvider } from "./Stores/FilterStore";
import { SortingProvider } from "./Stores/SortingStore";

const Login = lazy(() => import("./Pages/Login"));
const Home = lazy(() => import("./Pages/Home"));
const SingleListing = lazy(() => import("./Pages/SingleListing"));

const App = () => {
  return (
    <>
      <SortingProvider>
        <FilterProvider>
          <DataProvider>
            <PaginationProvider>
              <TokenProvider>
                <Suspense fallback={<h1>Loading...</h1>}>
                  <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/home" element={<Home />} />
                    <Route
                      path="/singleListing/:id"
                      element={<SingleListing />}
                    />
                  </Routes>
                </Suspense>
              </TokenProvider>
            </PaginationProvider>
          </DataProvider>
        </FilterProvider>
      </SortingProvider>
    </>
  );
};

export default App;
