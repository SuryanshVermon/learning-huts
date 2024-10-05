import {
  Flex,
  Heading,
  Link,
  Box,
  Spacer,
  Button,
  Img,
  IconButton,
  Switch,
  Icon,
} from "@chakra-ui/react";

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import { FaChevronDown as ChevronDownIcon } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

import { Link as RouterLink, useNavigate } from "react-router-dom";

import logo from "../utils/img/icon.png";
import { useState } from "react";
import Sidebar from "./Sidebar";
const Navbar = () => {
  const navigate = useNavigate();
  const [displayMenu, setDisplayMenu] = useState("none");

  const handleMenuItemClick = (path) => {
    navigate(path);
  };

  return (
    <nav>
      <Flex
        px={9}
        py={3}
        bgGradient="linear(to-r, gray.700,green.100,green.100, gray.700)"
        align="center"
      >
        <Box>
          <img src={logo} className="navbar-brand" width="60" height="24" />
        </Box>
        <Spacer />
        <Box display={["none", "none", "flex", "flex"]}>
          <Link p={3} as={RouterLink} to="/">
            Home
          </Link>
          <Link p={3} as={RouterLink} to="/receiver">
            Receiver
          </Link>
          {/* <Link p={3} as={RouterLink} to="/campaign"> */}
          <Menu>
            <MenuButton>
              <div className="flex justify-center items-center">
                <div>Campaigns</div>
                <ChevronDownIcon className="pt-1 pl-1" />
              </div>
            </MenuButton>
            <MenuList>
              <MenuItem
                onClick={() =>
                  handleMenuItemClick("/campaign/educating_in_slums")
                }
              >
                Educating in Slums
              </MenuItem>
              <MenuItem
                onClick={() => handleMenuItemClick("/campaign/fabrikshala")}
              >
                FabrikShala
              </MenuItem>
              <MenuItem
                onClick={() => handleMenuItemClick("/campaign/eco_habits")}
              >
                Eco Habits
              </MenuItem>
              <MenuItem
                onClick={() =>
                  handleMenuItemClick("/campaign/green_your_periods")
                }
              >
                Green your Periods
              </MenuItem>
            </MenuList>
          </Menu>
          {/* </Link> */}
          <Link p={3} as={RouterLink} to="/about">
            About Us
          </Link>
          <Link p={3} as={RouterLink} to="/events">
            Events
          </Link>
        </Box>
        {/* Mobile Component */}
        <Sidebar />


        <Spacer display={["none", "none", "flex", "flex"]} />
        <Box display={["none", "none", "flex", "flex"]}>
          <Button
            colorScheme="green"
            color="white"
            size="lg"
            onClick={() => navigate("/donar")}
          >
            Become a Donar
          </Button>
        </Box>
      </Flex>
    </nav>
  );
};

export default Navbar;
