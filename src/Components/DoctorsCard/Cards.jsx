import React, { useState } from "react";
import Card from "./Card";
import { useEffect } from "react";

const Cards = ({ data }) => {
  const [display, setDisplay] = useState([]);
  const [showAll, setShowAll] = useState(false);
  useEffect(() => {
    if (showAll) {
      setDisplay (data);
    } else {
      setDisplay(data.slice(0, 6));
    }
  }, [data, showAll]);
  return (
    <div>
      {/* card text component */}
      <div className="text-center w-6/12 mx-auto flex flex-col space-y-3">
        <h2 className="text-2xl font-bold">Our Best Doctors</h2>
        <p className="font-medium">
          Our platform connects you with verified, experienced doctors across
          various specialties — all at your convenience. Whether it's a routine
          checkup or urgent consultation, book appointments in minutes and
          receive quality care you can trust.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-8 px-10 py-10">
        {display.map((doc) => (
          <Card doc={doc} key={doc.id}></Card>
        ))}
      </div>
      <div className="py-3 flex justify-center">
        <button onClick={()=>setShowAll(prv=>!prv)} className="btn btn-primary rounded-3xl shadow-2xl">
          View All Doctors
        </button>
      </div>
    </div>
  );
};

export default Cards;
