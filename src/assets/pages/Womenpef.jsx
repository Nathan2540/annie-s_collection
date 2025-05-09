import { Box, Img } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";
import wopef1 from "./../images/wopef1.jpeg"
import wopef2 from "./../images/wopef2.jpeg"
import wopef3 from "./../images/wopef3.jpeg"
import wopef4 from "./../images/wopef4.jpeg"
import wopef5 from "./../images/wopef5.jpeg"
import wopef6 from "./../images/wopef6.jpeg"
const Womenpef = () => {
    return ( 
    
    <Box display={"grid"} gridTemplateColumns={{base:"repeat(1,1fr)", lg:"repeat(3,1fr)"}} gridTemplateRows={"repeat(1, 1fr)"} gridColumnGap={"50px"} gridRowGap={"50px"} justifyContent={"center"} width={"100%"} alignItems={"center"} p={10} height={"fit-content"} >
        
        <div class="product-card">
		{/* <div class="badge">Hot</div> */}
		<div class="product-tumb">
			 <Img src={wopef1}></Img>
		</div>
		<div class="product-details">
			<span class="product-catagory">Women</span>
			<h4><a href="">Perfume</a></h4>
			<p>Elizabeth Arden White tea</p>
			<div class="product-bottom-details">
				<div class="product-price"><small></small>N 48,000</div>
				<div class="product-links">
                <FaHeart fontSize={"20px"} className="icon" />
                 <a href="https://wa.link/y6cvgz">
                <button className="crdbtn"><span class="text">Add to Cart</span><span>Added!</span></button>
</a>
				</div>
			</div>
		</div>
	</div>



    <div class="product-card">
		{/* <div class="badge">Hot</div> */}
		<div class="product-tumb">
			 <Img src={wopef2}></Img>
		</div>
		<div class="product-details">
			<span class="product-catagory">Women</span>
			<h4><a href="">Perfume</a></h4>
			<p>Rayhaan(pretty in pink)</p>
			<div class="product-bottom-details">
				<div class="product-price"><small></small>N 27,000</div>
				<div class="product-links">
                <FaHeart fontSize={"20px"} className="icon" />
    <a href="https://wa.link/4armf7">
                <button className="crdbtn"><span class="text">Add to Cart</span><span>Added!</span></button>
</a>
				</div>
			</div>
		</div>
	</div>


    <div class="product-card">
		{/* <div class="badge">Hot</div> */}
		<div class="product-tumb">
			 <Img src={wopef3}></Img>
		</div>
		<div class="product-details">
			<span class="product-catagory">Women</span>
			<h4><a href="">Perfume</a></h4>
			<p>Eclaire</p>
			<div class="product-bottom-details">
				<div class="product-price"><small></small>N 70,000</div>
				<div class="product-links">
                <FaHeart fontSize={"20px"} className="icon" />
    <a href="https://wa.link/lastop">
                <button className="crdbtn"><span class="text">Add to Cart</span><span>Added!</span></button>
</a>
				</div>
			</div>
		</div>
	</div>


    <div class="product-card">
		{/* <div class="badge">Hot</div> */}
		<div class="product-tumb">
			 <Img src={wopef4}></Img>
		</div>
		<div class="product-details">
			<span class="product-catagory">Women</span>
			<h4><a href="">Perfume</a></h4>
			<p>Yourtouch -- Very good clone of stronger with you intensly</p>
			<div class="product-bottom-details">
				<div class="product-price"><small></small>N 21,000</div>
				<div class="product-links">
                <FaHeart fontSize={"20px"} className="icon" />
    <a href="pprgx5">
                <button className="crdbtn"><span class="text">Add to Cart</span><span>Added!</span></button>
</a>
				</div>
			</div>
		</div>
	</div>


    <div class="product-card">
		{/* <div class="badge">Hot</div> */}
		<div class="product-tumb">
			 <Img src={wopef5}></Img>
		</div>
		<div class="product-details">
			<span class="product-catagory">Women</span>
			<h4><a href="">Perfume</a></h4>
			<p>Hayati rose </p>
			<div class="product-bottom-details">
				<div class="product-price"><small></small>N 20,000</div>
				<div class="product-links">
                <FaHeart fontSize={"20px"} className="icon" />
    <a href="https://wa.link/gebug0">
                <button className="crdbtn"><span class="text">Add to Cart</span><span>Added!</span></button>
</a>
				</div>
			</div>
		</div>
	</div>


    <div class="product-card">
		{/* <div class="badge">Hot</div> */}
		<div class="product-tumb">
			 <Img src={wopef6}></Img>
		</div>
		<div class="product-details">
			<span class="product-catagory">Women</span>
			<h4><a href="">Perfume</a></h4>
			<p>MY HER</p>
			<div class="product-bottom-details">
				<div class="product-price"><small></small>N 18,000</div>
				<div class="product-links">
                <FaHeart fontSize={"20px"} className="icon" />
    <a href="https://wa.link/n42py9">
                <button className="crdbtn"><span class="text">Add to Cart</span><span>Added!</span></button>
</a>
				</div>
			</div>
		</div>
	</div>


   
    
    </Box> );
}
 
export default Womenpef;