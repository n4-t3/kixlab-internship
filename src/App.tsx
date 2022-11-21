import axios, { AxiosResponse } from "axios";
import React,{ useEffect, useState } from "react";
import LoadingPage from "./pages/loadingPage/loadingPage";
import DisplayPage from "./pages/displayPage/displayPage";
import './App.css'
function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<Object | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(null);
        const response = await axios.get('http://kuiz.kixlab.org:8080/getOptions').then((response: AxiosResponse) => {
          console.log(response.data);
          setData( response.data );
          setLoading(false);
      });
      } catch (error) {
        setLoading(false);
        setData(null)
        setError("Error: " + JSON.stringify(error));
      }
    };
    fetchData();
  }, []);
  console.log(data)


  return (
    <div className="App">
      {loading && <LoadingPage/>}
      {(!loading && data!==null) && <DisplayPage data={data} setData={setData}/>}
    </div>
  );
}

export default App;
