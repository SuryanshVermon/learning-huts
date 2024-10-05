import React from "react";
import { Text, Button, Box, Flex, Image, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import bloodTest from "../utils/img/blood.jpg";

const Mission = () => {
  const navigate = useNavigate();
  return (
    <Box className="container-fluid" w="100%" p={4}>
      <Flex direction={["column", "column", "row"]} align="center" justify="space-between">
        <Box flex="1" py={4} pl={{ base: 0, md: 4 }}>
          <Heading
            as="h1"
            size="xl"
            fontWeight="bold"
            color="#082366"
            mb={4}
            textAlign={{ base: "center", md: "left" }}  // Center on base, left on medium and up
          >
            Be Part of the Change!
          </Heading>
          <Text py={4} textAlign={{ base: "center", md: "left" }}>
            Join the Learning Huts Foundation, powered by passionate volunteers,
            and be a catalyst for change—empowering minds, shaping a brighter
            future, and transforming lives through the gift of education!
          </Text>
          <Flex justify={{ base: "center", md: "flex-start" }} mt={4}>
            <Button
              colorScheme="green"
              size="lg"
              onClick={() => navigate("/campaign/educating_in_slums")}
            >
              Join Campaign
            </Button>
          </Flex>
        </Box>
        <Box flex="1" p={4} maxW="600px" alignSelf="center">
          <Image src={bloodTest} alt="banner" borderRadius="md" boxShadow="lg" />
        </Box>
      </Flex>
      <Box as="hr" my={4} />
    </Box>
  );
};

export default Mission;
