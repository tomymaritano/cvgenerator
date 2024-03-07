import React from "react";
import {
  Box,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Image,
  Link,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import logo from "../../assets/tymo_.png";

const NavbarMenu = () => {
  return (
    <Flex
      top={0}
      zIndex={2}
      position={"sticky"}
      backdropFilter="blur(10px)"
      borderBottom={"none"}
      bg="rgb(33, 33, 33, 0.7)"
      w="100%"
      p={2}
      color="white"
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Box>
        <Image w={"80px"} src={logo} />
      </Box>
      <Menu>
        <MenuButton color={'white'} size={"sm"} as={Button} colorScheme="white">
          <HamburgerIcon />
        </MenuButton>
        <MenuList color={"black"}>
          <MenuItem>
            <Link to={"#"}>Home</Link>
          </MenuItem>
          {/* Agrega más enlaces según sea necesario */}
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default NavbarMenu;
