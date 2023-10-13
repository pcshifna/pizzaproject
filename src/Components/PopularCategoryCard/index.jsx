import React from "react";

const PopularCategoryCard = (props) => {
  function change(event) {
    props.pass(event.target.value);
  }
  return (
    <div className="popularItem">
      <div className="popularItemImage">
        <input type="password" name="shifna"  onChange={change} />
      </div>
    </div>
  );
};

export default PopularCategoryCard;
