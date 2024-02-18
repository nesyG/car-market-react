import React from "react";
import "./singleCarItem.css"
import NewListing from "../HomeComponents/NewListing";

const SingleCarItem = (props) => {
    return (
        <>
        <NewListing />
        <div className="single-car-container mt-5">
            <div className="col-10 mx-auto">
                <div class="col-md-6 col-lg-4 mx-auto">
                    <h3 class="mt-2 text-muted">{props.props.car}</h3>
                    <div className="card mb-4">

                        <div className="card-body">
                            <p className="card-text">
                            This {props.props.car_model} is a reliable and fuel-efficient sedan that's perfect for daily commuting or family trips. 
                            With its sleek {props.props.car_color} exterior and spacious interior, it offers comfort and style on the road.
                            Equipped with advanced safety features and modern amenities, this {props.props.car_model}provides a smooth and enjoyable driving experience. 
                            Whether you're navigating city streets or cruising on the highway, the {props.props.car_model} delivers impressive performance and efficiency.
                            </p>
                        </div>
                    </div>
                    <h4 className="mt-2 text-muted">Specifications</h4>
                    <div className="card mb-4">
                        <div className="card-body">
                            <h5 className="card-title">Model: {props.props.car_model}</h5>
                            <h5 className="card-title">Year: {props.props.car_model_year}</h5>
                            <h5 className="card-title">Mileage: 10 000 miles</h5>
                            <h5 className="card-title">Color: {props.props.car_color}</h5>
                            <h5 className="card-title">Condition: Used, excellent condition</h5>                                      
                        </div>
                    </div>
          
                    <div className="card mb-4">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Price: {props.props.price}</li>
                            <li className="list-group-item">Date added: {props.props.date_added}</li>
                            <li className="list-group-item">Contact information: +1 (555) 123-4567</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </>
        
    )
}

export default SingleCarItem;
