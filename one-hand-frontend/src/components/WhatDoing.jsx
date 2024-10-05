import React from "react";
import { Box, Flex, Text, Button, Image, Heading, Divider, AspectRatio } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import supportImage from "../utils/img/support.jpeg";

const WhatDoing = () => {
  const navigate = useNavigate();

  return (
    <Box w="100%" p={4}>
      <Flex direction="column" align="center">
        <Heading as="h3" size="lg" fontWeight="bold" color="yellow.400" p={2} textAlign="center">
          What We Are Doing
        </Heading>
        <Heading
          as="h2"
          size="2xl"
          fontWeight="bold"
          color="#082366"
          textAlign="center"
          pb={4}
        >
          We Are In a Mission To
          <br />
          Educate the Future
        </Heading>
      </Flex>

      <Flex direction={{ base: "column", lg: "row" }} align="center" justify="space-around">
        <Box flex="1" p={4}>
          <Image src={supportImage} alt="Support Image" maxH="600px" objectFit="cover" />
        </Box>
        <Box flex="1" py={4} pl={{ base: "0", md: "2rem" }}>
          <Heading as="h3" size="xl" fontWeight="bold" color="#082366" mb={4}>
            We provide education in the slums, bringing joy and hope to the faces of children.
          </Heading>
          <Text py={4}>
            The key to true happiness is found in helping others. Never underestimate the impact YOU can have on the lives of the poor, the abused, and the vulnerable.
          </Text>
          <Button
            colorScheme="green"
            size="lg"
            onClick={() => navigate("/receiver")}
            mt={4}
          >
            Support Helpless People
          </Button>
        </Box>
      </Flex>

      <AspectRatio ratio={16 / 9} maxW="1000px" mx="auto" my={6}>
        <iframe
          src="https://www.youtube.com/embed/ijPgRGLkZMw?si=F5yEBLEWt4j6nymd"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </AspectRatio>

      <Divider />
    </Box>
  );
};

export default WhatDoing;
