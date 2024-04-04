import { useEffect, useState } from "react";
import "@styles/App.sass";
import { backendUrl } from '@constants';
import { getData, postData } from '@rest_utils';

function App() {
  const [content, setContent] = useState('');

  useEffect(() => {
    // Create a Todo list
    // postData(
    //   `${backendUrl}/todolists`,
    //   { title: 'This is gonna be revolutionary!' }
    // ).then(({ title }) => {
    //   setContent(title);
    // });

    // Create a Todo in a Todo list
    // postData(
    //   `${backendUrl}/todolists/1/todos`,
    //   { title: 'This is gonna be revolutionary!' }
    // ).then(({ name }) => {
    //   setContent(name);
    // });

    // Get All Todo Lists
    getData(
      `${backendUrl}/todolists`
    ).then((res) => {
      setContent(JSON.stringify(res));
    });

    // Get All Todos in a Todo List
    // getData(
    //   `${backendUrl}/todolists/1/todos`
    // ).then((res) => {
    //   setContent(JSON.stringify(res));
    // });
  }, []);

  return (
    <div className="container">
      <p>{content}</p>
    </div>
  );
}

export default App;
