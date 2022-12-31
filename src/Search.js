import React from "react";

export default function Search() {
  return (
    <div className="Search">
      <div className="row">
        <div className="col-9">
          <input
            type="search"
            placeholder="Type a city.."
            class="form-control"
            autocomplete="off"
          />
        </div>
        <div className="col-3">
          <input type="submit" value="Search" className="btn btn-primary" />
        </div>
      </div>
    </div>
  );
}
