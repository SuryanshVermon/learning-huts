

const Banner = ({ images, speed = 2000 }) => {
    return (
      <div className="inner">
        <div className="wrapper">
          <section className="banner-section" style={{ "--speed": `${speed}ms` }}>
            {images.map(({ id, image }) => (
              <div className="image" key={id}>
                <img className="banner-img" src={image} alt={id} />
              </div>
            ))}
          </section>
          <section className="banner-section" style={{ "--speed": `${speed}ms` }}>
            {images.map(({ id, image }) => (
              <div className="image" key={id}>
                <img className="banner-img" src={image} alt={id} />
              </div>
            ))}
          </section>
          <section className="banner-section" style={{ "--speed": `${speed}ms` }}>
            {images.map(({ id, image }) => (
              <div className="image" key={id}>
                <img className="banner-img" src={image} alt={id} />
              </div>
            ))}
          </section>
        </div>
      </div>
    );
  };
  
  export { Banner };
  