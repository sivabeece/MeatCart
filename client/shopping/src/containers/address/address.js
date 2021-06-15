import React, { useEffect, useState } from "react";
import { Form, Button, TextArea } from "semantic-ui-react";
import axios from "axios";
import { CommonProperties } from "../../shared/common";

export default function AddressComponent() {
  const initialState = {
    firstname: "",
    lastname: "",
    email: "",
    mobile: "",
    addressline1: "",
    addressline2: "",
  };
  const [address, setAddress] = useState(initialState);
  const handleChange = (e) => {
    setAddress({ ...address, [e.target.id]: e.target.value });
  };
  const getAddress = async () => {
    await axios
      .get(`${CommonProperties.RESOURCE_API}/getuseraddress?id=`)
      .then((res) => {
        setAddress(res.data);
      })
      .catch((error) => {
        console.log({ error });
      });
  };
  const postAddress = async () => {
    await axios
      .post(`${CommonProperties.RESOURCE_API}/postaddress`, { address })
      .then((res) => {
        // setAddress(res.data);
      })
      .catch((error) => {
        console.log({ error });
      });

    await axios
      .put(`${CommonProperties.RESOURCE_API}/putaddress`, { address })
      .then((res) => {
        // setAddress(res.data);
      })
      .catch((error) => {
        console.log({ error });
      });
  };
  useEffect(() => {});
  return (
    <Form stackable onSubmit={postAddress}>
      <Form.Group widths={2}>
        <Form.Input
          required
          maxLength="100"
          error
          id="firstname"
          label="First name"
          type="text"
          placeholder="First name"
          focus
          value={address.firstname}
          onChange={handleChange}
        />
        <Form.Input
          label="Last name"
          maxLength="100"
          type="text"
          id="lastname"
          placeholder="Last name"
          value={address.lastname}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group widths={2}>
        <Form.Input
          required
          type="email"
          placeholder="Email"
          maxLength="100"
          id="email"
          name="email"
          label="Email"
          error
          value={address.email}
          onChange={handleChange}
        />
        <Form.Input
          required
          type="tel"
          pattern="[0-9]{10}"
          placeholder="Mobile"
          name="mobile"
          id="mobile"
          label="Mobile"
          error
          value={address.mobile}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group widths={2}>
        <Form.Input
          required
          type="text"
          placeholder="Plot/ Door No, Street address"
          maxLength="200"
          id="addressline1"
          name="addressline1"
          label="Address Line 1"
          required
          error
          value={address.addressline1}
          onChange={handleChange}
        />
        <Form.Input
          required
          type="text"
          placeholder="Area, Locality"
          name="addressline2"
          id="addressline2"
          label="Address Line 2"
          maxLength="200"
          value={address.addressline2}
          onChange={handleChange}
        />
      </Form.Group>
      <Button color="google plus" fluid type="submit">
        Submit
      </Button>
    </Form>
  );
}
