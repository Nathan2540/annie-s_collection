import { Flex, Text } from "@chakra-ui/react";
import { FaBagShopping } from "react-icons/fa6";

const Title = () => {
    return ( 

        <Flex width={"100%"} px={"70px"} m={"10px"}>
            <Text display={"flex"} color={" #C9184A"} justifyContent={"center"} alignItems={"center"} fontSize={"40px"} fontWeight={700}>Shop<FaBagShopping />
            </Text>

       
        </Flex>
      );
}
 
export default Title;