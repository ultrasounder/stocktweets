import React, { useEffect, useState, Fragment } from "react";
import Tabletop from "tabletop";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    Tabletop.init({
      key: "1HO30hT95TzjLslOMRDx8jnCTqMrFJ3HYL9MEBfoYuXk",
      simpleSheet: true
    })
      .then((data) => setData(data))
      .catch((err) => console.warn(err));
  }, []);

  return (
    <>
      <h1>LUPTON CAPITAL ALLOCATION TABLE</h1>
      <ul>
      {data.map((item, i) => (
        <Fragment key={i}>
          <li>SYMBOL  {item.SYMBOL}</li>
          <li>ALLOCATION  {item.ALLOCATION}</li>
          <li>PRICE  {item.PRICE}</li>
          <li>CHANGE  {item.CHANGE}</li>
          <br />
        </Fragment>
      ))}
    </ul>
    <h1>JANUARY PERFORMANCE</h1>
    <ul>
      <li>JONAH = 24.5%</li>
      <li>DOW = 1.60%</li>
      <li>NASDAQ = 2.43%</li>
      <li>S&P = 1.81%</li>
      <li> RUSSELL = 7.34%</li>
    </ul>
    </>
  );
}