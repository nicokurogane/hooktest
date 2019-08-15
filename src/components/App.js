import React, { useState } from "react";
import ResourceList from "./ResourceList";
import UserList from "./UserList";

const App = () => {
  //array destructuring
  //first variable in index: present value of this piece of state
  //second variable index: function to call when we want to update our state
  //"posts" string inside useState: initial value to set to this piece of state
  const [resources, setResource] = useState("posts");
  return (
    <div className="App">
      <UserList />
      <div>
        <button onClick={() => setResource("posts")}>Post</button>
        <button onClick={() => setResource("todos")}>Todo</button>
      </div>
      <ResourceList resource={resources} />
    </div>
  );
};

export default App;
