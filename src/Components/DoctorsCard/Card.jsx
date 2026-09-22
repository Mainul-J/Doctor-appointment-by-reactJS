


const Card = ({doc}) => {
    const {name,education,speciality,experience,registrationNumber,doctorImage} = doc
    return (
        <div>
            <div className="card shadow-sm">
                {/* {
    "id": 1,
    "doctorImage": "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d",
    "name": "Dr. Ahmed Rahman",
    "education": "MBBS, FCPS (Medicine)",
    "speciality": "Internal Medicine",
    "experience": "12 Years",
    "registrationNumber": "BMDC-102345"
  }, */}
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="py-2 px-4">
    <div className="flex justify-between">
        <span className=" rounded-2xl px-2  bg-green-300/60 text-emerald-700 font-medium">Available</span>
        <span className=" px-2 rounded-2xl bg-sky-100 text-blue-600 font-medium">{experience} experience</span>
    </div>
    <div>
        <h2 className="card-title">{name}</h2>
        <h2 className="text-[#908d8d]">{speciality}</h2>
        <h2 className="text-[#908d8d]">Reg No:{registrationNumber}</h2>
    </div>
    <button className="btn rounded-3xl text-blue-500 w-full">View Details</button>
  </div>
</div>
        </div>
    );
};

export default Card;