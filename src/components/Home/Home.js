import React, { useEffect, useState } from "react";
import VendorDataCard from "../VendorsDataList/VendorDataCard";
import VendorForm from "../VerndorForm/VendorForm";
import CardGroup from "react-bootstrap/CardGroup";
import { Outlet } from "react-router-dom";
const Home = () => {
  const [vendorData, setVendorData] = useState([]);
  useEffect(() => {
    fetch("https://js-tigers-server.vercel.app/vendors")
      .then((res) => res.json())
      .then((data) => setVendorData(data));
  }, [vendorData]);
  return (
    <div>
      <div className="d-flex justify-content-center">
        <VendorForm></VendorForm>
      </div>
      <div>
        <div className="d-lg-flex d-block justify-content-center mt-5 mb-5">
          <div className="p-2 ">
            <h3>Vendor Lists: </h3>
            {vendorData?.map((data) => (
              <VendorDataCard
                key={data?._id}
                name={data?.name}
                accountNumber={data?.accountNumber}
                bankName={data?.bankName}
                id={data?._id}
              ></VendorDataCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
