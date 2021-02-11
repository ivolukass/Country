import React from "react";
import { Link } from "react-router-dom";

//Display country list
export default function CountryItem({ country: { code, name } }) {
  //console.log(props.country);
  return (
    <div className="card card-body mb-3">
      <div className="row">
        <div className="col-md-9">
          <h4>Code: {code}</h4>
          <p>Name: {name}</p>
        </div>
        <div className="col-md-3">
          <Link to={`/country/${code}`} className="btn btn-secondary">
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}
