import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";

const HomePage = () => {
  const history = useHistory();
  useEffect(() => {
    const user =JSON.parse(localStorage.getItem("userInfo"));
    console.log("userr222", user);
    if(user) history.push("/chats");
  }, [history])
  
  return (
    <div>
      <Container maxWidth="xl" centerContent>
        <Box
          display="flex"
          justifyContent="center"
          p={3}
          bg={"white"}
          width={"100%"}
          margin={"20px 0 15px 0"}
          borderRadius="lg"
          borderWidth="1px"
        >
          <Text
            fontFamily={"work sans"}
            color="black"
            fontSize="3xl"
            textAlign="center"
          >
            Chat Buddy
          </Text>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          padding={3}
          bg={"white"}
          width={"100%"}
          margin={"0 0 10px 0"}
          borderRadius="lg"
          borderWidth="1px"
        >
          <Tabs variant="soft-rounded" colorScheme="green">
            <TabList mb="1em">
              <Tab width="50%">Login</Tab>
              <Tab width="50%">Sign UP</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Login />
              </TabPanel>
              <TabPanel>
                <Signup />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Container>
    </div>
  );
};

export default HomePage;
