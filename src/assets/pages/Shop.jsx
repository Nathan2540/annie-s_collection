import { Box } from "@chakra-ui/react";
import Title from "../component/shop";
import Mentxt from "../component/mentxt";
import Men from "./Men";
import Womentxt from "../component/womentxt";
import Women from "./women";
import Unisextxt from "../component/unisextxt";
import Unisex from "./unisex";

const Sshop = () => {
    return ( 

        <Box>
            <Title/>
            <Mentxt/>
            <Men/>
            <Womentxt/>
            <Women/>
            <Unisextxt/>
            <Unisex/>
        </Box>
     );
}
 
export default Sshop;