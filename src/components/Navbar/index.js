import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import AppLogo from "assets/img/app-logo-text.png";
import NetWorkButton from "components/Network/NetworkButton";
import WalletButton from "components/wallet/WalletButton";
import "./navbar-landing-page.css";

const Navbar = () => {
  return (
    <Flex className="navbar-container">
      <Flex className="navbar-logo-container">
        <Image className="navbar-logo" alt="logo-app" src={AppLogo} />
      </Flex>
      <Box
        ms="auto"
        w={{ sm: "100%", md: "unset" }}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        {/* <NavbarLinks
            onOpen={props.onOpen}
            logoText={props.logoText}
            secondary={props.secondary}
            fixed={props.fixed}
            scrolled={scrolled}
          /> */}
        <NetWorkButton />
        <WalletButton />
      </Box>
    </Flex>
  );
};

export default Navbar;
