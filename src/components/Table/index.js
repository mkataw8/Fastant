import React, { Component } from "react";
import "./style.css";

function createRow(e, index) {
  return (
    <div className="contain">
      <tr key={index}>
        <td> Ticker: {e.symbol}</td>
      </tr>
      <tr key={index}>
        <td>Price: {e.c}</td>
      </tr>

      <tr key={index}>
        <td>High of Day: {e.h}</td>
      </tr>
      <tr key={index}>
        <td>Change in $: {e.d}</td>
      </tr>
      <tr key={index}>
        <td>Change in %: {e.dp}</td>
      </tr>
      <tr key={index}>
        <td>Low of Day: {e.l}</td>
      </tr>
    </div>
  );
}

export default function DataTable(props) {
  const data = props.data;
  return (
    <table className="table mt-5" id="inform">
      <table>
        <tr>
          <td>{createRow(data, 0)}</td>
        </tr>
      </table>
    </table>
  );
}
