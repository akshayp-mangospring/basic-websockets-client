import { useEffect, useState } from "react";
import "@styles/App.sass";
import { backendUrl } from '@constants';

function App() {
  const [content, setContent] = useState('');

  const fetchData = async () => {
    const res = await fetch(backendUrl);
    return await res.json();
  };

  useEffect(() => {
    fetchData().then(({ content }) => {
      setContent(content);
    })
  }, []);

  return (
    <div className="container">
      <h1>{content}</h1>
    </div>
  );
}

export default App;
