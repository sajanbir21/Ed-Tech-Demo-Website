import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";

const Service = () => {
  return (
    <>
      <div className="my-4">
        <h1 className="text-center">Our Services</h1>
        <div className="container-fluid ">
          <div className="row ">
            <div className="col-10 my-4 mx-auto">
              <div className="row gy-4 ">
                {Sdata.map((val, ind) => {
                  return <Card imgsrc={val.imgsrc} title={val.tittle} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
