import React from "react";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";

export default function Gallery({images}) {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{350: 2, 750: 3, 900: 3, 1200: 4 }}>
      <Masonry gutter="10px">
        {images.map((image, i) => (
          <img
          initial={{opacity:0, y:-30}}
          whileinview={{opacity:1, y:0}}
          transition={{duration:0.9,delay:0.3}}
          viewport={{once:true}}
            key={i}
            src={image}
            style={{ width: "100%", display: "block" }}
          />
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
}