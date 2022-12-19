import React, { useEffect, useState } from "react";
import VendorDataCard from "../VendorsDataList/VendorDataCard";
import VendorForm from "../VerndorForm/VendorForm";
import "./home.css";

const Home = () => {
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(3);
  const [vendor, setVendor] = useState([]);
  const [userCounter, setUserCount] = useState(0);

  useEffect(() => {
    const url = `https://js-tigers-server.vercel.app/vendors/count?page=${page}&size=${size}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setUserCount(data.count);

        setVendor(data.services);
      });
  }, [page, size, vendor]);

  const pages = Math.ceil(userCounter / size);

  return (
    <div className="d-block">
      <div className="d-flex justify-content-center">
        <VendorForm></VendorForm>
      </div>

      <div>
        <div className="d-lg-flex d-block justify-content-center mt-5 mb-5">
          <div className="p-2 ">
            <h3>Vendor Lists: </h3>
            {vendor?.map((data) => (
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
      {/* pagination  */}
      <div className="pagination d-lg-flex d-block justify-content-center mt-5 mb-5">
        <p className="me-2">
          Currently selected page: {page+1} and size: {size}
        </p>
        
        {[...Array(pages).keys()].map((number) => (
          <button
            key={number}
            className={page === number ? "selected" : ""}
            onClick={() => setPage(number)}
          >
            {number + 1}
          </button>
        ))}
        <select
          defaultValue={size}
          onChange={(event) => setSize(event.target.value)}
        >
          <option value="3">3</option>
          <option value="10" selected>
            10
          </option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </div>
    </div>
  );
};

export default Home;
