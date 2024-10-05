import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Link,
  useDisclosure,
  MenuItem,
  Menu,
  MenuButton,
  MenuList,
} from "@chakra-ui/react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { FaChevronDown as ChevronDownIcon } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const navigate = useNavigate();

  const handleMenuItemClick = (path) => {
    onClose();
    navigate(path);
  };

  return (
    <>
      <Button
        ref={btnRef}
        onClick={onOpen}
        display={["flex", "flex", "none", "none"]}
      >
        <GiHamburgerMenu />
      </Button>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        size="xs"
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Learning Huts</DrawerHeader>

          <DrawerBody className="flex flex-col pt-4 items-center justify-items-start gap-4 text-center">
            <Button
              p={3}
              className="border w-full border-gray-300 p-2 rounded-md hover:bg-gray-200"
              onClick={() => handleMenuItemClick("/")}
            >
              Home
            </Button>

            <Button
              p={3}
              className="border w-full border-gray-300 p-2 rounded-md hover:bg-gray-200"
              onClick={() => handleMenuItemClick("/receiver")}
            >
              Receiver
            </Button>

            {/* <Link p={3} as={RouterLink} to="/campaign"> */}
            <Menu>
              <MenuButton className=" w-full">
                <Button
                  p={3}
                  className="border w-full border-gray-300 p-2 rounded-md hover:bg-gray-200"
                >
                  <div>Campaigns</div>
                  <ChevronDownIcon className="pt-1 pl-1" />
                </Button>
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
            <Button
              p={3}
              className="border w-full border-gray-300 p-2 rounded-md hover:bg-gray-200"
              onClick={() => handleMenuItemClick("/about")}
            >
              About Us
            </Button>
            <Button
              p={3}
              className="border w-full border-gray-300 p-2 rounded-md hover:bg-gray-200"
              onClick={() => handleMenuItemClick("/events")}
            >
              Events
            </Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Sidebar;
