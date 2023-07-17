import { useState } from "react";

const SingleItem = ({ grocery, deleteItems, editItems }) => {
  const { name, id, completed } = grocery;

  return (
    <article className="grocery-items">
      <div key={id} className="single-item">
        <div>
          <input
            type="checkbox"
            checked={completed}
            onChange={() => {
              editItems(id, name);
            }}
            className="check"
          />
          <p
            style={{ textDecoration: completed ? "line-through" : "none" }}
            className="item-name"
          >
            {name}
          </p>
        </div>
        <button
          onClick={() => {
            deleteItems(id, name);
          }}
          type="button"
          className="btn delete-btn"
        >
          delete
        </button>
      </div>
    </article>
  );
};
export default SingleItem;
