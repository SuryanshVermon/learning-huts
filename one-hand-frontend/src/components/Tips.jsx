import React from "react";
import { Banner } from "./Banner";
import "./Banner.css";
import ReelSection from "./ReelSection";

const images = [
  "https://res.cloudinary.com/dk5ft3vi3/image/upload/v1727692415/Screenshot_2024-09-30_at_3.07.46_PM_agktf8.png",
  "https://res.cloudinary.com/dk5ft3vi3/image/upload/v1727692413/Screenshot_2024-09-30_at_3.06.55_PM_xt99ku.png",
  "https://res.cloudinary.com/dk5ft3vi3/image/upload/v1727692407/Screenshot_2024-09-30_at_3.01.23_PM_roh5m6.png",
  "https://res.cloudinary.com/dk5ft3vi3/image/upload/v1727692397/Screenshot_2024-09-30_at_3.06.31_PM_tidkit.png",
  "https://res.cloudinary.com/dk5ft3vi3/image/upload/v1727692424/Screenshot_2024-09-30_at_3.08.13_PM_gggkez.png",
  "https://res.cloudinary.com/dk5ft3vi3/image/upload/v1727692422/Screenshot_2024-09-30_at_3.07.29_PM_jqssy3.png",
  "https://res.cloudinary.com/dk5ft3vi3/image/upload/v1727692389/Screenshot_2024-09-30_at_2.51.47_PM_xqt207.png",
  "https://res.cloudinary.com/dk5ft3vi3/image/upload/v1727692252/adf01058-4c7a-4bff-9880-17d07b57d58c_csaikt.jpg",
  "https://res.cloudinary.com/dk5ft3vi3/image/upload/v1727716096/Screenshot_2024-09-30_at_2.51.35_PM_hxgiuy.png",
].map((image) => ({
  id: Math.random(),
  image,
}));

const Tips = () => {
  return (
    <div className="container-fluid w-100 p-5">
      <h4
        className="text-center fw-bold pb-3"
        style={{ color: "#082366", fontSize: "3rem" }}
      >
        Our Work
      </h4>
      <h3 className="h5 text-center">
        Small actions today for a sustainable tomorrow—embrace eco habits and
        protect our planet.
      </h3>

      <div className="row p-4 gap-4">
        <div className="col border">
          <h5 className="card-title fw-bold h3 py-3">Eco Habits</h5>
          <hr />
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <i className="bi bi-check-lg text-success fw-bold"></i>Instead of
              throwing it in dustbins, let’s Feed stray Animals/Composting
            </li>
            <li className="list-group-item">
              <i className="bi bi-check-lg text-success fw-bold"></i> Instead of
              buying disposable bottle every time, carry your own bottle.
            </li>
            <li className="list-group-item">
              {" "}
              <i className="bi bi-check-lg text-success fw-bold"></i> Instead of
              using use-and-throw plastic pens, use refillable fountain pens.
            </li>
          </ul>
        </div>
        <div className="col border">
          <h5 className="card-title fw-bold h3 py-3">Fabrikshala</h5>
          <hr />
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <i className="bi bi-check-lg text-success fw-bold"></i> Instead of
              throwing away items find a creative way to make something out of
              it.
            </li>
            <li className="list-group-item">
              <i className="bi bi-check-lg text-success fw-bold"></i> Instead of
              purchasing them in polythene bags, use cloth bags.
            </li>
            <li className="list-group-item">
              {" "}
              <i className="bi bi-check-lg text-success fw-bold"></i> act of
              donating books and bags can leave a lasting positive effect on the
              lives of countless children.
            </li>
          </ul>
        </div>
        <div className="col border">
          <h5 className="card-title fw-bold h3 py-3">Green your Periods</h5>
          <hr />
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <i className="bi bi-check-lg text-success fw-bold"></i> Instead of
              using disposable sanitary pads, use cloth pads & Menstrual Cup.
            </li>
            <li className="list-group-item">
              <i className="bi bi-check-lg text-success fw-bold"></i> Drink more
              water must be 3-4 litres
            </li>
            <li className="list-group-item">
              {" "}
              <i className="bi bi-check-lg text-success fw-bold"></i>Always wash
              your hands with soap and water before and after changing menstrual
              products
            </li>
            <li className="list-group-item">
              {" "}
              <i className="bi bi-check-lg text-success fw-bold"></i>Stay in
              tune with your body’s changes during menstruation and seek medical
              advice if you notice irregularities or discomfort.
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h4
          className="text-center fw-bold pb-3"
          style={{ color: "#082366", fontSize: "3rem" }}
        >
          Us in News
        </h4>
        <ReelSection />
      </div>
      <div>
        <h4
          className="text-center fw-bold pb-3"
          style={{ color: "#082366", fontSize: "3rem" }}
        >
          Gallery
        </h4>
        <div>
          {" "}
          <Banner images={images} speed={50000} />
        </div>
      </div>
    </div>
  );
};

export default Tips;
