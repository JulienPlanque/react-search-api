import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [data, setData] = useState([]);

  // similaire à "compentDisMount" et "componentDidUpdate"
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://jsonplaceholder.typicode.com/posts",
      );
      setData(result.data);
      console.log("updated");
    };
    fetchData();
    console.log("mounted");
  }, [])

  return (
    <Fragment>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            <p>{item.title}</p>
          </li>
        ))}
      </ul>
    </Fragment>
  )

}

export default App;