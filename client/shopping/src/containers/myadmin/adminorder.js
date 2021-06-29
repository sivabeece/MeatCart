import React, { useEffect, useState } from "react";
import "./adminorder.css";
import { Table, Icon, Menu, Pagination } from "semantic-ui-react";
import axios from "axios";
import { CommonProperties } from "../../shared/common";

export default function Adminorder() {
  const InitialState = [
    { id: 1, item: "Fish1", quantity: 1, price: 1000, status: "New" },
    { id: 2, item: "Katla", quantity: 2, price: 2000, status: "In Process" },
    { id: 3, item: "Jelly", quantity: 2, price: 4000, status: "Delivered" },
    { id: 4, item: "Katla4", quantity: 2, price: 2000, status: "In Process" },
    { id: 5, item: "Jelly5", quantity: 2, price: 4000, status: "Delivered" },
    { id: 6, item: "Katla6", quantity: 2, price: 2000, status: "In Process" },
    { id: 7, item: "Jelly7", quantity: 2, price: 4000, status: "Delivered" },
    { id: 8, item: "Katla8", quantity: 2, price: 2000, status: "In Process" },
    { id: 9, item: "Jelly9", quantity: 2, price: 4000, status: "Delivered" },
    { id: 10, item: "Jelly10", quantity: 2, price: 4000, status: "Delivered" },
  ];
  const [allOrders, setAllOrders] = useState(InitialState);
  const [curPage, setCurPage] = useState(1);
  const start = 0;
  const end = 3;
  const getAllOrders = async () => {
    await axios
      .get(`${CommonProperties.RESOURCE_API}/getallorders`)
      .then((res) => {
        setAllOrders(res.data);
      })
      .catch((error) => {
        console.log({ error });
      });
  };
  const handlePaginationChange = (e) => {
    let page = parseInt(e.target.innerText);
    let pageStart = (page - 1) * end;
    setAllOrders(InitialState.slice(pageStart, pageStart + end));
    setCurPage(page);
  };
  useEffect(() => {
    setAllOrders(InitialState.slice(start, end));
    // setAllOrders(InitialState);
  }, []);

  const LoadData = () => {
    return (
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Id</Table.HeaderCell>
            <Table.HeaderCell>Item</Table.HeaderCell>
            <Table.HeaderCell>Price</Table.HeaderCell>
            <Table.HeaderCell>Quantity</Table.HeaderCell>
            <Table.HeaderCell>Total</Table.HeaderCell>
            <Table.HeaderCell>Status</Table.HeaderCell>
            <Table.HeaderCell>Action</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {(allOrders ?? []).map((ord) => {
            return (
              <Table.Row key={ord.id}>
                <Table.Cell>{ord.id}</Table.Cell>
                <Table.Cell>{ord.item}</Table.Cell>
                <Table.Cell>{ord.price}</Table.Cell>
                <Table.Cell>{ord.quantity}</Table.Cell>
                <Table.Cell>{ord.price * ord.quantity}</Table.Cell>
                <Table.Cell>{ord.status}</Table.Cell>
                <Table.Cell>Delete</Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="7">
              <Pagination
                floated="right"
                defaultActivePage={1}
                onPageChange={handlePaginationChange}
                totalPages={InitialState.length / end}
              />
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    );
  };

  return <div> {LoadData()}</div>;
}
