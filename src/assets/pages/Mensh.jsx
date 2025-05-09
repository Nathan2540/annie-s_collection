import { Box, Img } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";
import mensh1 from "./../images/mensh1.jpeg"
import mensh2 from "./../images/mensh2.jpeg"
import mensh3 from "./../images/mensh3.jpeg"
import mensh4 from "./../images/mensh4.jpeg"
import mensh5 from "./../images/mensh5.jpeg"
import mensn1 from "./../images/mensn1.jpeg"
import mensn2 from "./../images/mensn2.jpeg"
import mensn3 from "./../images/mensn3.jpeg"
import mensn4 from "./../images/mensn4.jpeg"
import mensn5 from "./../images/mensnuni.jpeg"
import menpm2 from "./../images/menpm2.jpeg"
import menpm3 from "./../images/menpm3.jpeg"
import menpm4 from "./../images/menpm4.jpeg"
import menpm1 from "./../images/menpm1.jpeg"

const Mensh = () => {
    return ( 
    
    <Box display={"grid"} gridTemplateColumns={{base:"repeat(1,1fr)", lg:"repeat(3,1fr)"}} gridTemplateRows={"repeat(1, 1fr)"} gridColumnGap={"50px"} gridRowGap={"50px"} justifyContent={"center"} width={"100%"} alignItems={"center"} p={10} height={"fit-content"} >
        
        <div class="product-card">
		{/* <div class="badge">Hot</div> */}
		<div class="product-tumb">
			 <Img src={menpm1}></Img>
		</div>
		<div class="product-details">
			<span class="product-catagory">Men</span>
			<h4><a href="">FootWear</a></h4>
			<p>Timberland cross sandals <br /> Available in sizes :40-45 </p>
			<div class="product-bottom-details">
				<div class="product-price"><small></small>N 48,000</div>
				<div class="product-links">
                <FaHeart fontSize={"20px"} className="icon" />
                 <a href="https://wa.link/hfpt69">
                <button className="crdbtn"><span class="text">Add to Cart</span><span>Added!</span></button>
				</a>
				</div>
			</div>
		</div>
	</div>



    <div class="product-card">
		{/* <div class="badge">Hot</div> */}
		<div class="product-tumb">
			 <Img src={mensh1}></Img>
		</div>
		<div class="product-details">
			<span class="product-catagory">Men</span>
			<h4><a href="">FootWear</a></h4>
			<p>Versace cooprate shoes<br /> Available in sizes: 40-45 </p>
			<div class="product-bottom-details">
				<div class="product-price"><small></small>N 50,000</div>
				<div class="product-links">
                <FaHeart fontSize={"20px"} className="icon" />
              <a href="https://wa.link/wel4km">  
                <button className="crdbtn"><span class="text">Add to Cart</span><span>Added!</span></button>
				</a> 
				</div>
			</div>
		</div>
	</div>


    <div class="product-card">
		{/* <div class="badge">Hot</div> */}
		<div class="product-tumb">
			 <Img src={mensh2}></Img>
		</div>
		<div class="product-details">
			<span class="product-catagory">Men</span>
			<h4><a href="">FootWear</a></h4>
			<p>Givenchy Cooprate shoes <br /> Available in sizes: 40-45</p>
			<div class="product-bottom-details">
				<div class="product-price"><small></small>N 45,000</div>
				<div class="product-links">
                <FaHeart fontSize={"20px"} className="icon" />
                 <a href="https://wa.link/wcvuqh">
                <button className="crdbtn"><span class="text">Add to Cart</span><span>Added!</span></button>
				</a>
				</div>
			</div>
		</div>
	</div>


    <div class="product-card">
		{/* <div class="badge">Hot</div> */}
		<div class="product-tumb">
			 <Img src={menpm2}></Img>
		</div>
		<div class="product-details">
			<span class="product-catagory">Men</span>
			<h4><a href="">FootWear</a></h4>
			<p>Lv Cover Pam <br /> Available in sizes: 40-46</p>
			<div class="product-bottom-details">
				<div class="product-price"><small></small>N 50,000</div>
				<div class="product-links">
                <FaHeart fontSize={"20px"} className="icon" />
              <a href="https://wa.link/5oj567"></a>   
                <button className="crdbtn"><span class="text">Add to Cart</span><span>Added!</span></button>

				</div>
			</div>
		</div>
	</div>


    <div class="product-card">
		{/* <div class="badge">Hot</div> */}
		<div class="product-tumb">
			 <Img src={menpm3}></Img>
		</div>
		<div class="product-details">
			<span class="product-catagory">Men</span>
			<h4><a href="">FootWear</a></h4>
			<p>BALENCIAGA Cover Pam <br /> Available in sizes: 40-46</p>
			<div class="product-bottom-details">
				<div class="product-price"><small></small>N 50,000</div>
				<div class="product-links">
                <FaHeart fontSize={"20px"} className="icon" />
                 <a href="https://wa.link/l674cw"></a>
                <button className="crdbtn"><span class="text">Add to Cart</span><span>Added!</span></button>

				</div>
			</div>
		</div>
	</div>


    <div class="product-card">
		{/* <div class="badge">Hot</div> */}
		<div class="product-tumb">
			 <Img src={mensh3}></Img>
		</div>
		<div class="product-details">
			<span class="product-catagory">Men</span>
			<h4><a href="">FootWear</a></h4>
			<p>Dr Airway Martens <br />Available in sizes: 40-46</p>
			<div class="product-bottom-details">
				<div class="product-price"><small></small>N 50,000</div>
				<div class="product-links">
                <FaHeart fontSize={"20px"} className="icon" />
          <a href="https://wa.link/7fxnt3">      
                <button className="crdbtn"><span class="text">Add to Cart</span><span>Added!</span></button>
				</a> 
				</div>
			</div>
		</div>
	</div>


    <div class="product-card">
		{/* <div class="badge">Hot</div> */}
		<div class="product-tumb">
			 <Img src={mensh4}></Img>
		</div>
		<div class="product-details">
			<span class="product-catagory">Men</span>
			<h4><a href="">FootWear</a></h4>
			<p>Botega Venetia <br /> Available in sizes:40-46</p>
			<div class="product-bottom-details">
				<div class="product-price"><small></small>N 50,000</div>
				<div class="product-links">
                <FaHeart fontSize={"20px"} className="icon" />
                 <a href="https://wa.link/aa1gql">
                <button className="crdbtn"><span class="text">Add to Cart</span><span>Added!</span></button>
</a>
				</div>
			</div>
		</div>
	</div>


     <div class="product-card">
		{/* <div class="badge">Hot</div> */}
		<div class="product-tumb">
			 <Img src={mensn1}></Img>
		</div>
		<div class="product-details">
			<span class="product-catagory">Men</span>
			<h4><a href="">FootWear</a></h4>
			<p>Adidas sneakers <br /> Available in sizes: 40-45</p>
			<div class="product-bottom-details">
				<div class="product-price"><small></small>N 70,000</div>
				<div class="product-links">
                <FaHeart fontSize={"20px"} className="icon" />
                 <a href="https://wa.link/ewe6a2">
                <button className="crdbtn"><span class="text">Add to Cart</span><span>Added!</span></button>
</a>
				</div>
			</div>
		</div>
	</div>


    <div class="product-card">
		{/* <div class="badge">Hot</div> */}
		<div class="product-tumb">
			 <Img src={mensh5}></Img>
		</div>
		<div class="product-details">
			<span class="product-catagory">Men</span>
			<h4><a href="">FootWear</a></h4>
			<p>Naked wolf Cooprate shoes <br /> Available in sizes:40-45</p>
			<div class="product-bottom-details">
				<div class="product-price"><small></small>N 115,000</div>
				<div class="product-links">
                <FaHeart fontSize={"20px"} className="icon" />
                 <a href="https://wa.link/zn2fid">
                <button className="crdbtn"><span class="text">Add to Cart</span><span>Added!</span></button>
</a>
				</div>
			</div>
		</div>
	</div>



    <div class="product-card">
		{/* <div class="badge">Hot</div> */}
		<div class="product-tumb">
			 <Img src={mensn2}></Img>
		</div>
		<div class="product-details">
			<span class="product-catagory">Men</span>
			<h4><a href="">FootWear</a></h4>
			<p>Rick Owen <br /> Available in sizes: 40-45</p>
			<div class="product-bottom-details">
				<div class="product-price"><small></small>N 100,000</div>
				<div class="product-links">
                <FaHeart fontSize={"20px"} className="icon" />
    <a href="https://wa.link/uzwuk3">         
                <button className="crdbtn"><span class="text">Add to Cart</span><span>Added!</span></button>
</a>
				</div>
			</div>
		</div>
	</div>
    


    <div class="product-card">
		{/* <div class="badge">Hot</div> */}
		<div class="product-tumb">
			 <Img src={mensn3}></Img>
		</div>
		<div class="product-details">
			<span class="product-catagory">Men</span>
			<h4><a href="">FootWear</a></h4>
			<p>LV sneakers <br /> Available in sizes: 40-45</p>
			<div class="product-bottom-details">
				<div class="product-price"><small></small>N 55,000</div>
				<div class="product-links">
                <FaHeart fontSize={"20px"} className="icon" />
    <a href="https://wa.link/ij53ji">        
                <button className="crdbtn"><span class="text">Add to Cart</span><span>Added!</span></button>
</a>
				</div>
			</div>
		</div>
	</div>

    <div class="product-card">
		{/* <div class="badge">Hot</div> */}
		<div class="product-tumb">
			 <Img src={mensn4}></Img>
		</div>
		<div class="product-details">
			<span class="product-catagory">Men</span>
			<h4><a href="">FootWear</a></h4>
			<p>Rick Owen <br /> Available in sizes: 40-45</p>
			<div class="product-bottom-details">
				<div class="product-price"><small></small>N 85,000</div>
				<div class="product-links">
                <FaHeart fontSize={"20px"} className="icon" />
    <a href="https://wa.link/k425g9">
                <button className="crdbtn"><span class="text">Add to Cart</span><span>Added!</span></button>
</a>
				</div>
			</div>
		</div>
	</div>


    <div class="product-card">
		{/* <div class="badge">Hot</div> */}
		<div class="product-tumb">
			 <Img src={menpm4}></Img>
		</div>
		<div class="product-details">
			<span class="product-catagory">Men</span>
			<h4><a href="">FootWear</a></h4>
			<p>Zara palm <br /> Available in sizes: 40-45</p>
			<div class="product-bottom-details">
				<div class="product-price"><small></small>N 45,000</div>
				<div class="product-links">
                <FaHeart fontSize={"20px"} className="icon" />
    <a href="https://wa.link/u49yvs"></a>             
                <button className="crdbtn"><span class="text">Add to Cart</span><span>Added!</span></button>

				</div>
			</div>
		</div>
	</div>


    <div class="product-card">
		{/* <div class="badge">Hot</div> */}
		<div class="product-tumb">
			 <Img src={mensn5}></Img>
		</div>
		<div class="product-details">
			<span class="product-catagory">Men</span>
			<h4><a href="">FootWear</a></h4>
			<p>Nike DHL <br />Available in sizes:40-45</p>
			<div class="product-bottom-details">
				<div class="product-price"><small></small>N 58,000</div>
				<div class="product-links">
                <FaHeart fontSize={"20px"} className="icon" />
                 <a href="https://wa.link/kiuy1l">
                <button className="crdbtn"><span class="text">Add to Cart</span><span>Added!</span></button>
</a>
				</div>
			</div>
		</div>
	</div>


    
    </Box> );
}
 
export default Mensh; 