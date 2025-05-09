 import { Box, Img } from "@chakra-ui/react";
 import { FaHeart } from "react-icons/fa";
 import unibag1 from "./../images/unibag1.jpeg"
 import unibag2 from "./../images/unibag2.jpeg"
import Unisextxt from "../component/unisextxt";
 
 const Unisex = () => {
	 return ( 
	 
	 <Box display={"grid"} gridTemplateColumns={{base:"repeat(1,1fr)", lg:"repeat(3,1fr)"}} gridTemplateRows={{base:"repeat(1, 1fr)", lg:"repeat(1, 1fr)"}} gridColumnGap={"50px"} gridRowGap={"50px"} justifyContent={"center"} width={"100%"} alignItems={"center"} p={10} height={"fit-content"} >
		 
		 <div class="product-card">
		{/* <div class="badge">Hot</div> */}
		<div class="product-tumb">
			 <Img src={unibag1}></Img>
		</div>
		<div class="product-details">
			<span class="product-catagory">Unisex</span>
			<h4><a href="">Bags</a></h4>
			<p>LV designers bag </p>
			<div class="product-bottom-details">
				<div class="product-price"><small></small>N 110,000</div>
				<div class="product-links">
				 <FaHeart fontSize={"20px"} className="icon" />
				  <a href="https://wa.link/122epi">
				 <button className="crdbtn"><span class="text">Add to Cart</span><span>Added!</span></button>
 </a>
				</div>
			</div>
		</div>
	</div>
 
 
 
	 <div class="product-card">
		{/* <div class="badge">Hot</div> */}
		<div class="product-tumb">
			 <Img src={unibag2}></Img>
		</div>
		<div class="product-details">
			<span class="product-catagory">Unisex</span>
			<h4><a href="">Bags</a></h4>
			<p>Plain Designers bag </p>
			<div class="product-bottom-details">
				<div class="product-price"><small></small>N 110,000</div>
				<div class="product-links">
				 <FaHeart fontSize={"20px"} className="icon" />
	<a href="https://wa.link/5otwf4">			  
				 <button className="crdbtn"><span class="text">Add to Cart</span><span>Added!</span></button>
 </a>
				</div>
			</div>
		</div>
	</div>
 
 
	 
 
	
	 
	 </Box> );
 }
  
 export default Unisex;