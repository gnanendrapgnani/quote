import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CardList from "./components/CardList";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/quotes");
        const data = await response.json();
        setInfo(data); // Store fetched data in state
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log("the data state", info.quotes);

  return (
    <>
      <Header />
      <CardList info={info.quotes || []} />
      <Footer />
    </>
  );
}

export default App;
