import React, { useState, useEffect} from "react";

function App() {
  const [data, SetData] = useState([])
  const [q, setQ] = useState("")
  return (
    <div className="App">
      <div>filter goes here</div>
      <div>datatable goes here</div>
    </div>
  );
}

export default App;
