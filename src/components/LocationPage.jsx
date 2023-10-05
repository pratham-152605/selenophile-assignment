import React from "react";

const LocationPage = () => {
  return (
    <div className="container-fluid">
      <div className="row mt-5">
        <div className="col-12 align-items-center justify-content-center d-flex">
          <span className="h2" style={{fontFamily: "Oswald"}}>
            Our Locations
          </span>
        </div>
      </div>

      <div className="row mt-3 ml-4 justify-content-center">
        <div className="col-5 align-items-center justify-content-center d-flex flex-column gap-2 border">
          <div className="d-flex gap-4">
            <span>sarpsborg</span>
            <span>Fredrikstad</span>
            <span>Rade</span>
            <span>Rygge</span>
            <span>Moss</span>
            <span>Vestby</span>
            <span>As</span>
          </div>
          <div className="d-flex gap-3">
            <span>Drobak</span>
            <span>Ski</span>
            <span>Indre Ostfold</span>
            <span>Spydeberg</span>
            <span>Askim</span>
            <span>mysen</span>
            <span>Oppegard</span>
          </div>
          <div className="d-flex gap-3">
            <span>Oslo</span>
            <span>Lorenskog</span>
            <span>Lillestrom</span>
            <span>Skedsmo</span>
            <span>Baerum</span>
            <span>Asker</span>
            <span>Drammen</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationPage;
