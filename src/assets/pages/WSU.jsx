import { Box, Flex, Text } from "@chakra-ui/react";

const WSU = () => {
    return ( <Flex flexDirection={"column"} width={"100%"} height={"-webkit-fit-content"} my={20} justifyContent={"center"} alignItems={"center"} p={"30px"}>
        <Box width={"70%"} h={"1px"} background={"#C9184A"} marginBottom={5}></Box>
        <Text fontSize={20} fontWeight={"800"} color={"#C9184A"} textTransform={"capitalize"}>Why shop with us?</Text>
        <Text>
            <ul className="ul">
                <li>Wide range of unisex fashion and lifestyle essentials</li>
                <li>Top-quality pieces selected with care</li>
                <li>Fast, reliable delivery and a smooth shopping experience</li>
                <li>A community where style meets confidence</li>
            </ul>
   
        </Text>
       
      
          </Flex> );
}
 
export default WSU;