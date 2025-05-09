import { Box, Flex, Img, Text } from "@chakra-ui/react";
import homeimg from "./../images/homeimg.png"
import { FaShoppingBag } from "react-icons/fa";
import WSU from "./WSU";
import Men from "./Men";
import Unisex from "./unisex";
import Women from "./women";
import Title from "../component/shop";
import Mentxt from "../component/mentxt";
import Womentxt from "../component/womentxt";
import { Link, Navigate } from "react-router-dom";
import Contactus from "./contact";
import Unisextxt from "../component/unisextxt";

const Home = () => {
    return ( 
<Flex width={"100%"} height={{base:"fit-content", lg:'-webkit-fit-content'}} justifyContent={"center"} alignItems={"center"} flexDirection={"column"}>
    
        <Flex width={{base:"100%", lg:"90%"}} height={{base:"fit-content", lg:"80vh"}} className="homebg" bg={"radial-gradient(circle, hsla(343, 75%, 20%, 1) 0%, hsla(0, 0%, 6%, 1) 100%)"} borderRadius={{base:"0px", lg:'40px'}} px={{base:"20px", lg:"14"}} flexDirection={{base:"column", lg:"row"}}>
        {/* hometxt */}
        <Box display={"flex"} marginTop={{base:"50px", lg:"2px"}}>
<Box width={{base:"100%" , lg:"40%"}} height={"100%"} justifyContent={"center"}   display={"flex"} flexDirection={"column"} textAlign={"start"} color={"white"}>
<Flex gap={"15px"} fontWeight={900}>
    <Text>FASHION</Text>
    <Text>UP</Text>
    <Text>YOUR</Text>
<Text>LOOK</Text>
</Flex>

<Text fontSize={{base:"45px" ,lg:"50px"}} lineHeight={{base:"60px", lg:"60px"}} fontWeight={900} my={{base:"1px", lg:"20px"}}> <span className="wclm">Welcome to</span>  <br /> Annie's Collection</Text>

<Text fontSize={{base:"13px", lg:"12px"}} fontWeight={200} marginBottom={"10px"}>At Annie Connector, we connect you to timeless fashion, everyday essentials, and quality you can trust. From stylish sneakers and elegant heels to jewelry, bags, kitchen accessories, and fragrances — our collections are carefully curated to fit every mood, moment, and personality. We believe fashion should be inclusive, empowering, and effortless. Every item is handpicked for its quality, comfort, and style, ensuring you always look and feel your best.

 
 
 </Text>
 <Link to="/Shop">
<button class="homebutton">
  Shop now<FaShoppingBag />

</button>
</Link>
</Box>

        {/* homeimg */}
<Flex width={"50%"} height={"70vh"} justifyContent={"center"} alignItems={"center"} display={{base:"none", lg:"inline-block"}}>
<Img src={homeimg} width={"100%"}></Img>
</Flex>
</Box>
        {/* homeopp */}


<Flex height={"100%"} alignItems={"center"} flexDirection={"column"} justifyContent={"center"}width={{base:"100%", lg:"20%"}} marginTop={{base:"50px", lg:"1px"}}  marginBottom={{base:"30px", lg:"1px"}}>
    <Flex gap={"0px"} marginBottom={"10px"} justifyContent={"center"} alignItems={"center"}>
    <details class="dropdown">
    <summary role="button">
      <a class="button1">Women</a>
    </summary>
    <ul>
       <Link to='/Unisex'>
      <li><a href="#">Bags</a></li>
      </Link>
      <Link to="/Womenje">
      <li><a href="#">Jewelries</a></li>
      </Link>
      <Link to="/WoMenpefumes">
      <li><a href="#">Perfumes</a></li>
      </Link>
  </ul>
</details>

<details class="dropdown">
    <summary role="button">
      <a class="button2">Men</a>
    </summary>
    <ul>
    <Link to="/Menshoes">
    <li><a href="#">Shoes</a></li>
    </Link>
    <Link to="/Unisex">
      <li><a href="#">Bags</a></li>
      </Link>
      <Link to="/Menwristwatches">
      <li><a href="#">Wrist Watch</a></li>
      </Link>
      <Link to="/Menpefumes">
      <li><a href="#">Perfumes</a></li>
      </Link>
  </ul>
</details>  
 

 
</Flex>
<Link to="/Unisex">
<Box className="bx2" width={"200px"} height={"70px"} background={" #C9184A"} color={" #fff"} borderRadius={"20px"} justifyContent={"center"} alignItems={"center"} display={"flex"} marginTop={{base:"20px", lg:"0px"}}>Unisex</Box>
</Link>
</Flex>

        </Flex>
        <WSU/>
        
        <Title/>
        <Mentxt/>
        <Men/>
        <Unisextxt/>
        <Unisex/>
        <Womentxt/>
        <Women/>
        <Contactus/>
        </Flex>
     );
}
 
export default Home;