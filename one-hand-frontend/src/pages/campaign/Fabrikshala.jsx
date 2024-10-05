import React from "react";
import Carousel from "../../components/Carousel";

const FabrikShala = () => {
  return (
    <>
      <div
        className="flex flex-col items-center w-full p-24 text-center text-white"
        style={{ background: "#000" }}
      >
        <h4 className="text-3xl font-bold sm:text-5xl">#Fabrikशाला</h4>
        <p className="w-full">INNOVATION. CRAFTMANSHIP. LEARNING</p>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "20px",
          margin: "30px",
        }}
      >
        {/* First Image and Text */}
        <div style={{ width: "300px" }}>
          <img
            src="https://res.cloudinary.com/dk5ft3vi3/image/upload/v1727710446/81e5a325-ba8b-4ec5-b309-308df645d0ed_pwdv1p.jpg"
            alt="Sample Image 1"
            style={{
              width: "100%",
              height: "300px",
              borderRadius: "10px",
              objectFit: "cover",
            }}
          />
          <p style={{ marginTop: "10px" }}>
            This is an image of a beautiful sunrise. The sun rises with a burst
            of golden light across the horizon.
          </p>
        </div>

        {/* Second Image and Text */}
        <div style={{ width: "300px" }}>
          <img
            src="https://res.cloudinary.com/dk5ft3vi3/image/upload/v1727716675/6c1828ea-3b33-44c1-9a8e-4e98ba5eeb28_aujyvg.jpg"
            alt="Sample Image 2"
            style={{
              width: "100%",
              height: "300px",
              borderRadius: "10px",
              objectFit: "cover",
            }}
          />
          <p style={{ marginTop: "10px" }}>
            A peaceful lake surrounded by mountains, creating a serene and
            reflective atmosphere.
          </p>
        </div>

        {/* Third Image and Text */}
        <div style={{ width: "300px" }}>
          <img
            src="https://res.cloudinary.com/dk5ft3vi3/image/upload/v1727716664/3be216d4-13f5-44fa-ab91-332b9b332595_odxwqq.jpg"
            alt="Sample Image 3"
            style={{
              width: "100%",
              height: "300px",
              borderRadius: "10px",
              objectFit: "cover",
            }}
          />
          <p style={{ marginTop: "10px" }}>
            A bustling cityscape at night, the lights shining brightly as life
            continues in the urban jungle.
          </p>
        </div>

        {/* Fourth Image and Text */}
        <div style={{ width: "300px" }}>
          <img
            src="https://res.cloudinary.com/dk5ft3vi3/image/upload/v1727702415/Screenshot_2024-09-30_at_3.05.03_PM_mo8j53.png"
            alt="Sample Image 4"
            style={{
              width: "100%",
              height: "300px",
              borderRadius: "10px",
              objectFit: "cover",
            }}
          />
          <p style={{ marginTop: "10px" }}>
            A tranquil beach with the waves gently crashing against the shore
            and a beautiful sunset in the background.
          </p>
        </div>

        {/*Fifth Image and Text */}
        <div style={{ width: "300px" }}>
          <img
            src="https://res.cloudinary.com/dk5ft3vi3/image/upload/v1727710447/5d4e8328-469c-44d4-8928-d62ef7ffec5c_xq7n2y.jpg"
            alt="Sample Image 5"
            style={{
              width: "100%",
              height: "300px",
              borderRadius: "10px",
              objectFit: "cover",
            }}
            className="object-top"
          />
          <p style={{ marginTop: "10px" }}>
            A vibrant forest with lush greenery, tall trees, and rays of
            sunlight piercing through the foliage.
          </p>
        </div>

        {/*Sixth Image and Text */}
        <div style={{ width: "300px" }}>
          <img
            src="https://res.cloudinary.com/dk5ft3vi3/image/upload/v1727701267/82b65d12-3f4b-4b56-8434-39426d361b45_kho2iq.jpg"
            alt="Sample Image 5"
            style={{
              width: "100%",
              height: "300px",
              borderRadius: "10px",
              objectFit: "cover",
            }}
          />
          <p style={{ marginTop: "10px" }}>
            A vibrant forest with lush greenery, tall trees, and rays of
            sunlight piercing through the foliage.
          </p>
        </div>
        {/*Seventh Image and Text */}
        <div style={{ width: "300px" }}>
          <img
            src="https://res.cloudinary.com/dk5ft3vi3/image/upload/v1727716663/be998890-248d-4095-bdf3-25a30cf70813_srw6qv.jpg"
            alt="Sample Image 5"
            style={{
              width: "100%",
              height: "300px",
              borderRadius: "10px",
              objectFit: "cover",
            }}
          />
          <p style={{ marginTop: "10px" }}>
            A vibrant forest with lush greenery, tall trees, and rays of
            sunlight piercing through the foliage.
          </p>
        </div>
      </div>

      <h4 className="text-3xl text-center font-bold sm:text-5xl pt-5 pb-2">#ImageGallery</h4>

      <div className="p-5">
        <Carousel
          cards={[
            "https://res.cloudinary.com/dk5ft3vi3/image/upload/v1727721528/a5dee858-e6a1-4233-8b89-c57f8980364d_icexwk.jpg",
            "https://res.cloudinary.com/dk5ft3vi3/image/upload/v1727721527/f3b23075-48bd-416f-8b32-23675f652354_dwii6u.jpg",
            "https://res.cloudinary.com/dk5ft3vi3/image/upload/v1727721527/bf3c7825-c18b-4883-a494-9bb9ae1a929d_bw04bq.jpg",
            "https://res.cloudinary.com/dk5ft3vi3/image/upload/v1727721525/bb11cb9d-6d0f-4698-bb1d-23adabe223a5_ouajra.jpg",
            "https://res.cloudinary.com/dk5ft3vi3/image/upload/v1727721447/Screenshot_2024-09-30_at_2.51.21_PM_zine4s.png",

          ]}
        />
      </div>
    </>
  );
};

export default FabrikShala;
