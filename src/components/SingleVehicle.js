import React, { useState } from 'react';

const SingleVehicle = ({ vehicle }) => {
  const [show, setShow] = useState(false);
  const {
    id, description, price, meta, modelYear, media
  } = vehicle;

  return (
    <div data-testid="single-vehicle-1" className="card">
      <div className="img">
        <img src={media[0].url} alt={media[0].name} />
      </div>
      <div className="containers">
        <p className="vehiclename">{media[0].name.toUpperCase()}</p>
        <p>
          From
          {' '}
          {price}
        </p>
        <p>{description}</p>
      </div>
      {/* {
       !show&& <button
       onClick={()=>setShow(true)}
       >Show</button>|| <button
        onClick={()=>setShow(false)}
        >hide</button>

     }
                 {show&&<>
            <p>{meta.passengers}</p>
            <ul>
                {meta.drivetrain.map((el) => (
                    <li>{el}</li>
                ))}
            </ul>
            <ul>
                {meta.bodystyles.map((bodystyle) => (
                    <li>{bodystyle}</li>
                ))}
            </ul>
            <div>
                <p>
                    template <span>{meta.emissions.template}</span>
                </p>
                <p>
                    value <span>{meta.emissions.value}</span>
                </p>
                <p>{modelYear}</p>
            </div></>} */}
    </div>
  );
};

export default SingleVehicle;
