import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import LoadingPage from "./pages/loadingPage/loadingPage";
import DisplayPage from "./pages/displayPage/displayPage";
import ErrorPage from "./pages/errorPage/errorPage";
import './App.css'

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [data, setData] = useState<Object | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(false);
        await axios.get('http://kuiz.kixlab.org:8080/getOptions').then((response: AxiosResponse) => {
          setData( response.data );
          setLoading(false);
      });
      } catch (error) {
        setLoading(false);
        setData(null)
        setError(true);
        console.log("Error: " + JSON.stringify(error))
      }
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      {loading && <LoadingPage/>}
      {error && <ErrorPage/>}
      {(!loading && data!==null) && <DisplayPage data={data} setData={setData}/>}
    </div>
  );
}

export default App;
