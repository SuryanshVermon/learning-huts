import React from 'react';
import './EducatingInSlums.css'; // External CSS for styling

const bgImage =
    "https://images.pexels.com/photos/7130490/pexels-photo-7130490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
 

const EducatingInSlums = () => {
  return (
    <>

      <div
        className="flex flex-col items-center w-full p-24 text-center text-white"
        style={{ background: "#000" }}
      >
        <h4 className="text-3xl font-bold sm:text-5xl">#EducatingSlums</h4>
        <p className="w-full">EDUCATE. INSPIRE. NURTURE.</p>
      </div>

      {/* Image Gallery Section */}
      <div className="image-gallery bg-cover object-center"
      // className="mb-12 bg-cover pb-2 pt-12"
      style={{ backgroundImage: "url(" + bgImage + ")" }}>
        <div className="image-container">
          {/* First Image and Text */}
          <div className="image-item">
            <img
              src="https://res.cloudinary.com/dk5ft3vi3/image/upload/v1727691999/Screenshot_2024-09-30_at_3.08.23_PM_npbckz.png"
              alt="Sample Image 1"
              className="gallery-image"
            />
            <p className="image-text">
            Books and supplies are distributed to children, empowering them with the essential tools they need to succeed in education.
            </p>
          </div>

          {/* Second Image and Text */}
          <div className="image-item">
            <img
              src="https://res.cloudinary.com/dk5ft3vi3/image/upload/v1727692252/adf01058-4c7a-4bff-9880-17d07b57d58c_csaikt.jpg"
              alt="Sample Image 2"
              className="gallery-image"
            />
            <p className="image-text">
            Smiling faces of children demonstrate the joy that education brings, unlocking new pathways to their dreams.
            </p>
          </div>

          {/* Third Image and Text */}
          <div className="image-item">
            <img
              src="https://res.cloudinary.com/dk5ft3vi3/image/upload/v1727692349/aecfb1f5-905e-4ffd-9e20-14e84424f526_xf91qe.jpg"
              alt="Sample Image 3"
              className="gallery-image"
            />
            <p className="image-text">
            Under a tree, children study, proving that learning knows no boundaries or limits.
            </p>
          </div>

          {/* Fourth Image and Text */}
          <div className="image-item">
            <img
              src="https://res.cloudinary.com/dk5ft3vi3/image/upload/v1727692422/Screenshot_2024-09-30_at_3.07.29_PM_jqssy3.png"
              alt="Sample Image 4"
              className="gallery-image"
            />
            <p className="image-text">
            A teacher inspires his students, sparking curiosity and a passion for lifelong learning
            </p>
          </div>

          {/* Fifth Image and Text */}
          <div className="image-item">
            <img
              src="https://res.cloudinary.com/dk5ft3vi3/image/upload/v1727692389/Screenshot_2024-09-30_at_2.51.47_PM_xqt207.png"
              alt="Sample Image 5"
              className="gallery-image"
            />
            <p className="image-text">
            Excited kids receive new books and stationery, eager to begin their journey of learning.
            </p>
          </div>

          {/* Sixth Image and Text */}
          <div className="image-item">
            <img
              src="https://res.cloudinary.com/dk5ft3vi3/image/upload/v1727692386/Screenshot_2024-09-30_at_2.51.59_PM_svowga.png"
              alt="Sample Image 6"
              className="gallery-image"
            />
            <p className="image-text">
            Volunteer lovingly feeds younger children, sharing both nourishment and care in a heartwarming moment
            </p>
          </div>

          {/* Seventh Image and Text */}
          <div className="image-item">
            <img
              src="https://res.cloudinary.com/dk5ft3vi3/image/upload/v1727692397/Screenshot_2024-09-30_at_3.06.31_PM_tidkit.png"
              alt="Sample Image 7"
              className="gallery-image"
            />
            <p className="image-text">
            Community volunteers build a school, uniting to create brighter futures for children in need.
            </p>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="video-section">
        <h2 className="section-title">Explore More</h2>
        <div className="video-container">
          {/* First YouTube Video */}
          <div className="video-item">
            <iframe
              width="600"
              height="315"
              src="https://www.youtube.com/embed/zeAvDLGU7gE?si=ArkAOzl94Cg8h0Jt"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <p className="video-text">
              An inspirational video on personal growth and motivation.
            </p>
          </div>

          {/* Second YouTube Video */}
          <div className="video-item">
            <iframe
              width="600"
              height="315"
              src="https://www.youtube.com/embed/_iynCxBYK9c?si=lAEqD9pDe3TJ-1Ou&amp;start=122"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <p className="video-text">
              A calming video showing nature and scenic landscapes.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default EducatingInSlums;
