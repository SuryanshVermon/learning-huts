import React from "react";
import "./GreenYourPeriods.css";
import Carousel from "../../components/Carousel"; // External CSS for styling
import Gallery from "../../components/Gallery";
import ReelSection from "../../components/ReelSection";
import GYPInsta from "../../components/GYPInsta";

const GreenYourPeriods = () => {
  return (
    <>
      <div
        className="flex flex-col items-center w-full p-24 text-center text-white"
        style={{ background: "#000" }}
      >
        <h4 className="text-3xl font-bold sm:text-5xl">#GreenYourPeriods</h4>
        <p className="w-full">EMPOWERMENT. AWARENESS. DIGNITY</p>
      </div>
      <h1 style={{ textAlign: "center", padding: "20px" }}>
        Eco Habits Image Collage with Instagram Reels
      </h1>

      {/* Instagram Reels Section */}
      
        <GYPInsta />
      
      {/* Corousel Section */}
      {/* <div className="p-5">
        <Carousel
          cards={[
            "https://res.cloudinary.com/dk5ft3vi3/image/upload/v1727721528/a5dee858-e6a1-4233-8b89-c57f8980364d_icexwk.jpg",
            "https://res.cloudinary.com/dk5ft3vi3/image/upload/v1727721527/f3b23075-48bd-416f-8b32-23675f652354_dwii6u.jpg",
            "https://res.cloudinary.com/dk5ft3vi3/image/upload/v1727721527/bf3c7825-c18b-4883-a494-9bb9ae1a929d_bw04bq.jpg",
            "https://res.cloudinary.com/dk5ft3vi3/image/upload/v1727721525/bb11cb9d-6d0f-4698-bb1d-23adabe223a5_ouajra.jpg",
            "https://res.cloudinary.com/dk5ft3vi3/image/upload/v1727721447/Screenshot_2024-09-30_at_2.51.21_PM_zine4s.png",
          ]}
        />
      </div> */}

      {/* Image Collage Section */}
      <div className="p-12">
        <h2 className="h2 pb-2 font-bold text-5xl"> Image Gallery</h2>
        <Gallery
          images={[
            'https://res.cloudinary.com/dk5ft3vi3/image/upload/v1727717014/Screenshot_2024-09-30_at_3.02.12_PM_seyyms.png',
            "https://res.cloudinary.com/dk5ft3vi3/image/upload/v1727717010/3a49ffcc-4b93-4cec-961e-c865b886b891_u3v1bs.jpg",
            "https://res.cloudinary.com/dk5ft3vi3/image/upload/v1727716999/Screenshot_2024-09-30_at_3.02.22_PM_c8mimj.png",
            "https://res.cloudinary.com/dk5ft3vi3/image/upload/v1727716998/Screenshot_2024-09-30_at_3.02.53_PM_zzwwbe.png",
            "https://res.cloudinary.com/dk5ft3vi3/image/upload/v1727716998/Screenshot_2024-09-30_at_3.02.29_PM_agnytf.png",
            "https://res.cloudinary.com/dk5ft3vi3/image/upload/v1727716995/Screenshot_2024-09-30_at_3.02.04_PM_ccwwu5.png",
            "https://res.cloudinary.com/dk5ft3vi3/image/upload/v1727716994/cb7b2076-2fe7-4015-8a1c-3bfd5585ce77_mxzown.jpg",
            "https://res.cloudinary.com/dk5ft3vi3/image/upload/v1727716993/2801c322-ade0-4917-ac4e-0e9fef01be3d_kjoqkz.jpg",
            "https://res.cloudinary.com/dk5ft3vi3/image/upload/v1727716993/bd3a065a-f721-42c0-b093-54cbb24a7014_ilra1k.jpg",
            "https://res.cloudinary.com/dk5ft3vi3/image/upload/v1727716993/bd72a269-aad8-4b70-93c6-86e64e8a34f3_csqdye.jpg",
            "https://res.cloudinary.com/dk5ft3vi3/image/upload/v1727716991/235cc801-7735-4abb-adc4-b46b930fbf25_viypyu.jpg",
            "https://res.cloudinary.com/dk5ft3vi3/image/upload/v1727716990/7a4b86db-e51e-4084-80cf-59152d2c69e3_o90dfx.jpg",
            "https://res.cloudinary.com/dk5ft3vi3/image/upload/v1727716990/10aa17d1-b92a-4a4d-a5a2-40205bb5f897_pwx0eu.jpg",
            "https://res.cloudinary.com/dk5ft3vi3/image/upload/v1727716990/174b97a6-6c9e-42b9-b3ff-477e6ae254fa_uvehae.jpg",
            "https://res.cloudinary.com/dk5ft3vi3/image/upload/v1727716988/1fefeab8-c74b-4f9d-9269-07adce539882_sjfv3x.jpg",
            "https://res.cloudinary.com/dk5ft3vi3/image/upload/v1727716988/5cd106fb-a5e9-42d9-aaa2-f6b84990d62e_iintkk.jpg",

          ]}
        />
      </div>
    </>
  );
};

export default GreenYourPeriods;
