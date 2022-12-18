import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { toast } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import { Link, useLocation, useNavigate } from "react-router-dom";

const EditDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";
  const details = useLoaderData();
  const {
    _id,
    name,
    accountNumber,
    bankName,
    addressOne,
    addressTwo,
    city,
    country,
    zip,
  } = details;
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const accountNumber = form.accountNumber.value;
    const bankName = form.bankName.value;
    const addressOne = form.addressOne.value;
    const addressTwo = form.addressTwo.value;
    const city = form.city.value;
    const country = form.country.value;
    const zip = form.zip.value;
    fetch(`https://js-tigers-server.vercel.app/vendors/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        accountNumber,
        bankName,
        addressOne,
        addressTwo,
        city,
        country,
        zip,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success(`Vendor's details are now updated.`);
          form.reset();
          navigate(from, { replace: true });
        }
      });
  };
  return (
    <div className="d-flex justify-content-center ">
      <Form onSubmit={handleSubmit} className="w-75  border p-5 mt-5">
        <h3 className="mt-2 mb-2 text-warning">Edit Vendor Form</h3>
        <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
          <Form.Label>Vendor Name</Form.Label>
          <Form.Control
            defaultValue={name}
            name="name"
            type="text"
            placeholder="Vender Name"
          />
        </Form.Group>
        <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
          <Form.Label>Bank Account No.</Form.Label>
          <Form.Control
            name="accountNumber"
            type="text"
            placeholder="Bank Account Number"
            defaultValue={accountNumber}
          />
        </Form.Group>
        <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
          <Form.Label>Bank Name</Form.Label>
          <Form.Control
            name="bankName"
            type="text"
            placeholder="Bank Name"
            defaultValue={bankName}
          />
        </Form.Group>
        <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
          <Form.Label> Address Line 1</Form.Label>
          <Form.Control
            name="addressOne"
            type="text"
            placeholder=" Address Line 1"
            defaultValue={addressOne}
          />
        </Form.Group>
        <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
          <Form.Label>Address Line 2</Form.Label>
          <Form.Control
            name="addressTwo"
            type="text"
            placeholder="Address Line 2"
            defaultValue={addressTwo}
          />
        </Form.Group>
        <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
          <Form.Label>City</Form.Label>
          <Form.Control
            name="city"
            type="text"
            placeholder="City"
            defaultValue={city}
          />
        </Form.Group>
        <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
          <Form.Label>Country</Form.Label>
          <Form.Control
            name="country"
            type="text"
            placeholder="Country"
            defaultValue={country}
          />
        </Form.Group>
        <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
          <Form.Label>Zip Code</Form.Label>
          <Form.Control
            name="zip"
            type="text"
            placeholder="Zip Code"
            defaultValue={zip}
          />
        </Form.Group>
        <div className=" ">
          <Button onSubmit={handleSubmit} variant="primary" type="submit">
            Submit
          </Button>
          <Link className="ms-3 me-3" to={"/"}>
            Back
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default EditDetails;
