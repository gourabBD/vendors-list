import React from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

const VendorDataCard = ({ id, name, accountNumber, bankName }) => {
  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure, you want to delete this Vendor's details?"
    );

    if (proceed) {
      fetch(`https://js-tigers-server.vercel.app/vendors/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success(`Vendor deleted successfully!`);
          }
        });
    }
  };
  return (
    <Card className="w-full border mb-2">
      <Card.Body className="text-start">
        <Card.Text className="ms-2 me-3 ">
          <span className="fw-bold">Vendor Name:</span> {name}
        </Card.Text>
        <Card.Text className="ms-2 me-3 ">
          <span className="fw-bold">Bank Account Number:</span> {accountNumber}
        </Card.Text>
        <Card.Text className="ms-2 me-3">
          <span className="fw-bold">Bank Name:</span> {bankName}
        </Card.Text>
        <Link to={`/vendors/${id}`}>
          <Button className="ms-2 me-2">Edit</Button>
        </Link>
        <Button
          className="ms-2 me-2 btn-danger"
          onClick={() => handleDelete(id)}
        >
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default VendorDataCard;
