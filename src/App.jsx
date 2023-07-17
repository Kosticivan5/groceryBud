import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import Form from "./Form";
import { nanoid } from "nanoid";
import { useState } from "react";

const setLocalStorage = (item) => {
  localStorage.setItem("grocery", JSON.stringify(item));
};

const getLocalStorage = () => {
  let localStorageItems = localStorage.getItem("grocery");
  if (localStorageItems) {
    localStorageItems = JSON.parse(localStorage.getItem("grocery"));
  } else {
    localStorageItems = [];
  }
  return localStorageItems;
};

function App() {
  getLocalStorage();
  const [groceries, setGroceries] = useState(getLocalStorage());

  const addItems = (item) => {
    const newGroceries = {
      name: item,
      completed: false,
      id: nanoid(),
    };
    const newGroceryList = [...groceries, newGroceries];
    setGroceries(newGroceryList);
    setLocalStorage(newGroceryList);
    toast.success(`${newGroceries.name}  - added to the list`);
  };

  const deleteItems = (itemId, name) => {
    const newGroceries = groceries.filter((grocery) => grocery.id !== itemId);
    setGroceries(newGroceries);
    setLocalStorage(newGroceries);
    toast.warn(`${name} - deleted`);
  };

  const editItems = (itemId, name) => {
    const newGroceries = groceries.map((grocery) => {
      if (grocery.id === itemId) {
        const newGrocery = { ...grocery, completed: !grocery.completed };
        return newGrocery;
      }
      return grocery;
    });
    setGroceries(newGroceries);
    setLocalStorage(newGroceries);
    toast.success(`Item: ${name} - Completed`);
  };

  const removeAll = () => {
    setGroceries([]);
    localStorage.clear();
  };

  return (
    <section className="section-center">
      <h2 className="title">grocery bud</h2>
      <Form
        groceries={groceries}
        addItems={addItems}
        deleteItems={deleteItems}
        editItems={editItems}
        removeAll={removeAll}
      />
      <ToastContainer position="top-center" autoClose={500}></ToastContainer>
    </section>
  );
}

export default App;
