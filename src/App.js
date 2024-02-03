import { useEffect, useState } from "react";
import { Form } from "./Form";
import "./app.style.scss";
import { Table } from "./Table";

function App() {
  const API_URL = "https://jsonplaceholder.typicode.com/";
  const [reqref, setreqref] = useState("users");
  const [items, setitems] = useState([]);
  useEffect(() => {
    const fetcher = async () => {
      try {
        const response = await fetch(`${API_URL}${reqref}`);
        const listItems = await response.json();
        if (!response.ok) throw Error("page not found");
        setitems(listItems);
      } catch (error) {
        console.error(error);
      }
    };
    (async () => fetcher())();
  }, [reqref]);

  return (
    <div className="">
      <Form reqref={reqref} setreqref={setreqref} />
      <Table items={items} />
    </div>
  );
}

export default App;
