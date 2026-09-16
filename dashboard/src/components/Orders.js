import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Orders = () => {
  const [allOrders, setAllOrderss] = useState([]);
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/allOrders`).then((res) => {
      setAllOrderss(res.data);
    });
  }, []);
  return (
    <>
      <h3 className="title">Orders ({allOrders.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Id</th>
            <th>Qty.</th>
            <th>price</th>
            <th>Name</th>
            <th>Mode</th>
          </tr>

          {allOrders.map((order, index) => {
            return (
              <tr key={index}>
                <td>{order._id}</td>

                <td>{order.qty}</td>
                <td>{order.price.toFixed(2)}</td>
                <td>{order.name}</td>
                <td>{order.mode}</td>
              </tr>
            );
          })}
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            29,875.<span>55</span>{" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            31,428.<span>95</span>{" "}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>
    </>
  );
};

export default Orders;
