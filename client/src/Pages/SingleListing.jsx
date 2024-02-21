import React from "react";
import SingleCarItem from "../Components/SingleListingComponents/SingleCarItem";
import { useLocation } from "react-router-dom";

//Left for future implementation
const SingleListing = () => {
  const location = useLocation();
  return (
    <>
      <SingleCarItem props={location.state}/>
    </>
  )
}

export default SingleListing;
