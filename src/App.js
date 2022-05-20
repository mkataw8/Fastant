import React, { useState, useEffect } from "react";
import "./App.css";
import DataTable from "./components/Table/index.js";
import getStockData from "./controller/stockController";
import getNewsData from "./controller/newsController";
import getChartData from "./controller/chartController";
import NewsFeed from "./components/NewsFeed";
import Chart from "./components/Chart";
// import FetchNews from "./components/News/FetchNews"
import ListContainer from "./components/ListContainer/";

function App() {
  const [newsData, setNewsData] = useState([]);
  const timeData = Date().toLocaleString();
  const [chartData, setChartData] = useState([]);
  const [stockData, setStockData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      getStockData(searchTerm).then((data) => {
        setStockData(data);
        setLoading(false);
      });
      getChartData(searchTerm).then((data) => {
        setChartData(data);
        setLoading(false);
      });
    }, 2000);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  return (
    <div className="App">
      <div className="LTQ">
        <div className="left-side">
          <h1>Fastant</h1>
        </div>
        <div className="mid-side">{timeData}</div>
        <div className="right-side">
          <h1>{searchTerm}</h1>
        </div>
      </div>
      <div id="main">
        <nav>
          <div className="part2">
            <form>
              <input
                type="text"
                placeholder="Search for a stock "
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />{" "}
            </form>
          </div>
          <div className="chart">
            {" "}
            {loading ? <p>Loading...</p> : <Chart data={chartData} />}
          </div>

          <p className="newsTitle1"> Chart</p>
        </nav>

        <aside>
          <div className="side12">
            <div>
              {" "}
              {loading ? (
                <div className="loader">
                  <div className="loader-inner">Loading</div>
                </div>
              ) : (
                <DataTable data={stockData} />
              )}{" "}
            </div>
          </div>
          <div className="watchlist">
            <ListContainer />{" "}
          </div>
        </aside>
      </div>
      <footer>
        {/* <NewsFeed/> - This would be the component for incoming news. Must pay for Api to populate news.
		Therefore we are not going incorporate it unless plan is updated. You can check out the component 
		for code. */}
      </footer>
    </div>
  );
}

export default App;
