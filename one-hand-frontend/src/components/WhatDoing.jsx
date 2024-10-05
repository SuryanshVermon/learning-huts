import React from "react";
import { Text, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import bloodTest from "../utils/img/support.jpeg";

const WhatDoing = () => {
  const navigate = useNavigate();
  return (
    <div className="container-fluid w-100 p-4">
      <h3 className="h5 text-center fw-bold p-2 text-warning">
        What We Are Doing
      </h3>
      <h3
        className="text-center fw-bold pb-4"
        style={{ color: "#082366", fontSize: "3rem" }}
      >
        We Are In a Mission To
        <br />Educate the Future
      </h3>

      <div className="row">
        <div className="col p-4 flex items-center justify-center">
          <img src={bloodTest} className="img-fluid" style={{height:'600px'}} alt="banner" />
        </div>
        <div className="col py-4 my-auto" style={{ paddingLeft: "2rem" }}>
          <div
            className="h1 fw-bold"
            style={{ color: "#082366", fontSize: "2.6rem" }}
          >
            We provide education in the slums, bringing joy and hope to the faces of children.
          </div>
          <Text py={4}>
          The key to true happiness is found in helping others. Never underestimate the impact YOU can have on the lives of the poor, the abused, and the vulnerable.
          </Text>
          <div className="mt-4">
            <Button
              colorScheme="green"
              color="white"
              size="lg"
              onClick={() => navigate("/receiver")}
            >
              Support Helpless People
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-center p-2"> 
          <iframe
            width="1000"
            height="500"
            src="https://www.youtube.com/embed/ijPgRGLkZMw?si=F5yEBLEWt4j6nymd"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <hr />
    </div>
  );
};

export default WhatDoing;
