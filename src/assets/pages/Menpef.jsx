import { Box, Img } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";
import menpef1 from "./../images/menpef1.jpeg"
import menpef2 from "./../images/menpef2.jpeg"
import menpef3 from "./../images/menpef3.jpeg"
import menpef4 from "./../images/menpef4.jpeg"
import menpef5 from "./../images/menpef5.jpeg"
import menpef6 from "./../images/menpef6.jpeg"
import menpef7 from "./../images/menpef7.jpeg"

const Menpef = () => {
    return ( 
    
    <Box display={"grid"} gridTemplateColumns={{base:"repeat(1,1fr)", lg:"repeat(3,1fr)"}} gridTemplateRows={"repeat(1, 1fr)"} gridColumnGap={"50px"} gridRowGap={"50px"} justifyContent={"center"} width={"100%"} alignItems={"center"} p={10} height={"fit-content"} >
        
        <div class="product-card">
		{/* <div class="badge">Hot</div> */}
		<div class="product-tumb">
			 <Img src={menpef5}></Img>
		</div>
		<div class="product-details">
			<span class="product-catagory">Men</span>
			<h4><a href="">Perfume</a></h4>
			<p>Opus grande  French avenue </p>
			<div class="product-bottom-details">
				<div class="product-price"><small></small>N 78,000</div>
				<div class="product-links">
                <FaHeart fontSize={"20px"} className="icon" />
                 <a href="https://wa.link/6wzu8h">
                <button className="crdbtn"><span class="text">Add to Cart</span><span>Added!</span></button>
</a>
				</div>
			</div>
		</div>
	</div>



    <div class="product-card">
		{/* <div class="badge">Hot</div> */}
		<div class="product-tumb">
			 <Img src={menpef6}></Img>
		</div>
		<div class="product-details">
			<span class="product-catagory">Men</span>
			<h4><a href="">Perfume</a></h4>
			<p>Qahwa coffee </p>
			<div class="product-bottom-details">
				<div class="product-price"><small></small>N 40,000</div>
				<div class="product-links">
                <FaHeart fontSize={"20px"} className="icon" />
    <a href="https://wa.link/moqqa4">
                <button className="crdbtn"><span class="text">Add to Cart</span><span>Added!</span></button>
</a>
				</div>
			</div>
		</div>
	</div>


    <div class="product-card">
		{/* <div class="badge">Hot</div> */}
		<div class="product-tumb">
			 <Img src={menpef7}></Img>
		</div>
		<div class="product-details">
			<span class="product-catagory">Men</span>
			<h4><a href="">Perfume</a></h4>
			<p>Caramel Macchiato Coffee Pric</p>
			<div class="product-bottom-details">
				<div class="product-price"><small></small>N 40,000</div>
				<div class="product-links">
                <FaHeart fontSize={"20px"} className="icon" />
    <a href="https://wa.link/o0vs4u">
                <button className="crdbtn"><span class="text">Add to Cart</span><span>Added!</span></button>
</a>
				</div>
			</div>
		</div>
	</div>


    <div class="product-card">
		{/* <div class="badge">Hot</div> */}
		<div class="product-tumb">
			 <Img src={menpef1}></Img>
		</div>
		<div class="product-details">
			<span class="product-catagory">Men</span>
			<h4><a href="">Perfume</a></h4>
			<p>New club de nuit  perfume  Lionheart Man by Armaf</p>
			<div class="product-bottom-details">
				<div class="product-price"><small></small>N 58,000</div>
				<div class="product-links">
                <FaHeart fontSize={"20px"} className="icon" />
    <a href="https://wa.link/fxs0h8">
                <button className="crdbtn"><span class="text">Add to Cart</span><span>Added!</span></button>
</a>
				</div>
			</div>
		</div>
	</div>


    <div class="product-card">
		{/* <div class="badge">Hot</div> */}
		<div class="product-tumb">
			 <Img src={menpef2}></Img>
		</div>
		<div class="product-details">
			<span class="product-catagory">Men</span>
			<h4><a href="">Perfume</a></h4>
			<p>Angham </p>
			<div class="product-bottom-details">
				<div class="product-price"><small></small>N 40,000</div>
				<div class="product-links">
                <FaHeart fontSize={"20px"} className="icon" />
    <a href="https://wa.link/h82thh">
                <button className="crdbtn"><span class="text">Add to Cart</span><span>Added!</span></button>
</a>
				</div>
			</div>
		</div>
	</div>


    <div class="product-card">
		{/* <div class="badge">Hot</div> */}
		<div class="product-tumb">
			 <Img src={menpef3}></Img>
		</div>
		<div class="product-details">
			<span class="product-catagory">Men</span>
			<h4><a href="">Perfume</a></h4>
			<p>Royal blend bourbon perfume</p>
			<div class="product-bottom-details">
				<div class="product-price"><small></small>N 40,000</div>
				<div class="product-links">
                <FaHeart fontSize={"20px"} className="icon" />
    <a href="https://wa.link/wzyzgs">
                <button className="crdbtn"><span class="text">Add to Cart</span><span>Added!</span></button>
</a>
				</div>
			</div>
		</div>
	</div>


    <div class="product-card">
		{/* <div class="badge">Hot</div> */}
		<div class="product-tumb">
			 <Img src={menpef4}></Img>
		</div>
		<div class="product-details">
			<span class="product-catagory">Men</span>
			<h4><a href="">Perfume</a></h4>
			<p>Special oud 💫</p>
			<div class="product-bottom-details">
				<div class="product-price"><small></small>N 25,000</div>
				<div class="product-links">
                <FaHeart fontSize={"20px"} className="icon" />
    <a href="https://wa.link/u5k3xa">
                <button className="crdbtn"><span class="text">Add to Cart</span><span>Added!</span></button>
</a>
				</div>
			</div>
		</div>
	</div>


    
    </Box> );
}
 
export default Menpef;