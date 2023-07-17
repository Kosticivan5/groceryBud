import { useState } from "react";
import { toast } from "react-toastify";
import SingleItem from "./SingleItem";

const Form = ({ groceries, addItems, deleteItems, editItems, removeAll }) => {
  console.log(groceries);
  const [items, setItems] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (items === "") {
      toast.error("please enter some value");
      return;
    }
    addItems(items);
    setItems("");
  };

  return (
    <form className="grocery-form" onSubmit={handleSubmit}>
      <div className="item-input">
        <input
          type="text"
          value={items}
          onChange={(e) => {
            setItems(e.target.value);
          }}
        />
        <button className="btn" type="submit">
          add item
        </button>
      </div>

      {groceries.map((grocery) => {
        return (
          <SingleItem
            key={grocery.id}
            grocery={grocery}
            deleteItems={deleteItems}
            editItems={editItems}
          />
        );
      })}
      <button
        type="button"
        style={{ display: groceries.length < 1 ? "none" : "inline-block" }}
        className="btn remove-btn"
        onClick={removeAll}
      >
        remove all
      </button>
    </form>
  );
};
export default Form;
