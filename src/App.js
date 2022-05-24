import React, { useState } from "react";

import "./App.css";
import axios from "axios";
import UserList from "./components/UserList";

function App() {
  const [user, setUser] = useState([]);

  const handleFetchUser = () => {
    let url = "https://jsonplaceholder.typicode.com/users";
    axios
      .get(url)
      .then((resp) => resp)
      .then((data) => setUser(data.data))
      .catch((error) => console.log(error));
  };

  return (
    <React.Fragment>
      <section>
        <button onClick={handleFetchUser}>Fetch Movies</button>
      </section>
      <section>
        <UserList user={user} />
      </section>
    </React.Fragment>
  );
}

export default App;
