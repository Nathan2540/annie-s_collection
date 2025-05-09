import { Box, Img } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";
import menww1 from "./../images/menww1.jpeg"
import menww2 from "./../images/menww2.jpeg"
import menww3 from "./../images/menww3.jpeg"
import menww4 from "./../images/menww4.jpeg"
import menww5 from "./../images/menww5.jpeg"
import menww6 from "./../images/menww6.jpeg"
import menww7 from "./../images/menww7.jpeg"

const Menww = () => {
    return ( 
    
    <Box display={"grid"} gridTemplateColumns={{base:"repeat(1,1fr)", lg:"repeat(3,1fr)"}} gridTemplateRows={"repeat(1, 1fr)"} gridColumnGap={"50px"} gridRowGap={"50px"} justifyContent={"center"} width={"100%"} alignItems={"center"} p={10} height={"fit-content"} >
        
        <div class="product-card">
		{/* <div class="badge">Hot</div> */}
		<div class="product-tumb">
			 <Img src={menww1}></Img>
		</div>
		<div class="product-details">
			<span class="product-catagory">Men</span>
			<h4><a href="">Wrist-Watch</a></h4>
			<p>A unique G-Shock smartwatch Amoled Metal case </p>
			<div class="product-bottom-details">
				<div class="product-price"><small></small>N 78,000</div>
				<div class="product-links">
                <FaHeart fontSize={"20px"} className="icon" />
                 <a href="https://wa.link/0brkuf">
                <button className="crdbtn"><span class="text">Add to Cart</span><span>Added!</span></button>
</a>
				</div>
			</div>
		</div>
	</div>



    <div class="product-card">
		{/* <div class="badge">Hot</div> */}
		<div class="product-tumb">
			 <Img src={menww2}></Img>
		</div>
		<div class="product-details">
			<span class="product-catagory">Men</span>
			<h4><a href="">Wrist-Watch</a></h4>
			<p>High Quality casio G-SHOCK -- comes with a warranty card, intruction manual, box and gift bag </p>
			<div class="product-bottom-details">
				<div class="product-price"><small></small>N 50,000</div>
				<div class="product-links">
                <FaHeart fontSize={"20px"} className="icon" />
    <a href="https://wa.link/skndd5">
                <button className="crdbtn"><span class="text">Add to Cart</span><span>Added!</span></button>
</a>
				</div>
			</div>
		</div>
	</div>


    <div class="product-card">
		{/* <div class="badge">Hot</div> */}
		<div class="product-tumb">
			 <Img src={menww3}></Img>
		</div>
		<div class="product-details">
			<span class="product-catagory">Men</span>
			<h4><a href="">Wrist-Watch</a></h4>
			<p>High Quality CASIO G-SHOCK -- comes with a warranty card, intruction manual, box and gift bag</p>
			<div class="product-bottom-details">
				<div class="product-price"><small></small>N 50,000</div>
				<div class="product-links">
                <FaHeart fontSize={"20px"} className="icon" />
    <a href="https://wa.link/5o4ol6">           
                <button className="crdbtn"><span class="text">Add to Cart</span><span>Added!</span></button>
</a>
				</div>
			</div>
		</div>
	</div>


    <div class="product-card">
		{/* <div class="badge">Hot</div> */}
		<div class="product-tumb">
			 <Img src={menww4}></Img>
		</div>
		<div class="product-details">
			<span class="product-catagory">Men</span>
			<h4><a href="">Wrist-Watch</a></h4>
			<p>High Quality G-SHOCK -- comes with a warranty card, intruction manual, box and gift bag</p>
			<div class="product-bottom-details">
				<div class="product-price"><small></small>N 50,000</div>
				<div class="product-links">
                <FaHeart fontSize={"20px"} className="icon" />
    <a href="https://wa.link/7hujt1">
                <button className="crdbtn"><span class="text">Add to Cart</span><span>Added!</span></button>
</a>
				</div>
			</div>
		</div>
	</div>


    <div class="product-card">
		{/* <div class="badge">Hot</div> */}
		<div class="product-tumb">
			 <Img src={menww5}></Img>
		</div>
		<div class="product-details">
			<span class="product-catagory">Men</span>
			<h4><a href="">Wrist-Watch</a></h4>
			<p>Poedagar blue face classic </p>
			<div class="product-bottom-details">
				<div class="product-price"><small></small>N 30,000</div>
				<div class="product-links">
                <FaHeart fontSize={"20px"} className="icon" />
    <a href="https://wa.link/dytfs1">
                <button className="crdbtn"><span class="text">Add to Cart</span><span>Added!</span></button>
</a>
				</div>
			</div>
		</div>
	</div>


    <div class="product-card">
		{/* <div class="badge">Hot</div> */}
		<div class="product-tumb">
			 <Img src={menww6}></Img>
		</div>
		<div class="product-details">
			<span class="product-catagory">Men</span>
			<h4><a href="">Wrist-Watch</a></h4>
			<p>Poedagar wristwatch</p>
			<div class="product-bottom-details">
				<div class="product-price"><small></small>N 30,500</div>
				<div class="product-links">
                <FaHeart fontSize={"20px"} className="icon" />
     <a href="https://wa.link/gia7su">
                <button className="crdbtn"><span class="text">Add to Cart</span><span>Added!</span></button>
</a>
				</div>
			</div>
		</div>
	</div>


    <div class="product-card">
		{/* <div class="badge">Hot</div> */}
		<div class="product-tumb">
			 <Img src={menww7}></Img>
		</div>
		<div class="product-details">
			<span class="product-catagory">Men</span>
			<h4><a href="">Wrist-Watch</a></h4>
			<p>Valenzo Wrist watch</p>
			<div class="product-bottom-details">
				<div class="product-price"><small></small>N 40,000</div>
				<div class="product-links">
                <FaHeart fontSize={"20px"} className="icon" />
    <a href="https://wa.link/mq1a3a">       
                <button className="crdbtn"><span class="text">Add to Cart</span><span>Added!</span></button>
</a>
				</div>
			</div>
		</div>
	</div>


    
    </Box> );
}
 
export default Menww; 