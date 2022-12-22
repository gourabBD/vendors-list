import React, {  useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { toast } from "react-hot-toast";


const VendorForm = () => {
 
  const [venName,setVenName]=useState(false)
  const [venAccNo,setVenAccNo]=useState(false)
  const [venBank,setVenBank]=useState(false)
  
  const handleSubmit = (event) => {
  
    event.preventDefault();
  
    const form = event.target;
    const name = form.name.value;
    const accountNumber = parseInt(form.accountNumber.value);
    const bankName = form.bankName.value;
    
    if(name || isNaN(accountNumber)|| bankName=== ''){
     if(name===''){
      return setVenName(true)
     }
     setVenName(false)
     
      if(isNaN(accountNumber) || typeof(accountNumber)!=='number' ){
        
        setVenAccNo(true)
        
        return 
      }
      setVenAccNo(false)

     

      if(bankName===''){
       
       return setVenBank(true) 
      }
      setVenBank(false)
      
    }
    const addressOne = form.addressOne.value;
    const addressTwo = form.addressTwo.value;
    const city = form.city.value;
    const country = form.country.value;
    const zip = form.zip.value;
    

    const vendorInfo = {
      name,
      accountNumber,
      bankName,
      addressOne,
      addressTwo,
      city,
      country,
      zip,
    };
    //posting method
    fetch("https://js-tigers-server.vercel.app/vendors", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(vendorInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Vendors data submitted Successfully!");
         form.reset();
        }
      })
      .catch((err) => {
        toast.error(err);
      });
  };
  return (
    <Form onSubmit={handleSubmit} className="w-75 border p-5 mt-5 ">
      <h3 className="mt-2 mb-2 text-primary">Vendor Form</h3>
      <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
        <Form.Label>Vendor Name</Form.Label>
        <Form.Control
          name="name"
          type="text"
          placeholder="Vendor Name"
          
        />
       {venName  ?  <p className="text-danger">You have to enter value in the Vendor Name field!!</p> :<></> }

      </Form.Group>
      <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
        <Form.Label>Bank Account No.</Form.Label>
        <Form.Control
          name="accountNumber"
          type="number"
          placeholder="Bank Account Number"
          
        />
         {venAccNo  ?  <p className="text-danger">You have to fill  the bank account number field with numbers!!</p> :<></> }
        
        
      </Form.Group>
      <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
        <Form.Label>Bank Name</Form.Label>
        <Form.Control
          name="bankName"
          type="text"
          placeholder="Bank Name"
          
        />
         {venBank  ?  <p className="text-danger">You have to enter value in the bank name field!!</p> :<></> }
        
      </Form.Group>
      <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
        <Form.Label> Address Line 1</Form.Label>
        <Form.Control
          name="addressOne"
          type="text"
          placeholder=" Address Line 1"
        />
        
      </Form.Group>
      <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
        <Form.Label>Address Line 2</Form.Label>
        <Form.Control
          name="addressTwo"
          type="text"
          placeholder="Address Line 2"
        />
      </Form.Group>
      <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
        <Form.Label>City</Form.Label>
        <Form.Control name="city" type="text" placeholder="City" />
      </Form.Group>
      <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
        <Form.Label>Country</Form.Label>
        <Form.Control name="country" type="text" placeholder="Country" />
      </Form.Group>
      <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
        <Form.Label>Zip Code</Form.Label>
        <Form.Control name="zip" type="text" placeholder="Zip Code" />
      </Form.Group>

      <Button onSubmit={handleSubmit} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default VendorForm;
