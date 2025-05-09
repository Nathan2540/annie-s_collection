import { Box, Img } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";
import woje1 from "./../images/woje1.jpeg"
import woje2 from "./../images/woje2.jpeg"
import woje3 from "./../images/woje3.jpeg"
import woje4 from "./../images/woje4.jpeg"
import woje5 from "./../images/woje5.jpeg"
import woje6 from "./../images/woje6.jpeg"
import woje7 from "./../images/woje7.jpeg"

const Womenje = () => {
    return ( 
    
    <Box display={"grid"} gridTemplateColumns={{base:"repeat(1,1fr)", lg:"repeat(3,1fr)"}} gridTemplateRows={"repeat(1, 1fr)"} gridColumnGap={"50px"} gridRowGap={"50px"} justifyContent={"center"} width={"100%"} alignItems={"center"} p={10} height={"fit-content"} >
        
        <div class="product-card">
        {/* <div class="badge">Hot</div> */}
        <div class="product-tumb">
             <Img src={woje1}></Img>
        </div>
        <div class="product-details">
            <span class="product-catagory">Women</span>
            <h4><a href="">Jewelry</a></h4>
            <p>Sweet Combo set -- Comes with box</p>
            <div class="product-bottom-details">
                <div class="product-price"><small></small>N 24,000</div>
                <div class="product-links">
                <FaHeart fontSize={"20px"} className="icon" />
                 <a href="https://wa.link/0dsvnm">
                <button className="crdbtn"><span class="text">Add to Cart</span><span>Added!</span></button>
</a>
                </div>
            </div>
        </div>
    </div>



    <div class="product-card">
        {/* <div class="badge">Hot</div> */}
        <div class="product-tumb">
             <Img src={woje2}></Img>
        </div>
        <div class="product-details">
            <span class="product-catagory">Women</span>
            <h4><a href="">Jewelry</a></h4>
            <p>Sweet combo set </p>
            <div class="product-bottom-details">
                <div class="product-price"><small></small>N 24,000</div>
                <div class="product-links">
                <FaHeart fontSize={"20px"} className="icon" />
    <a href="https://wa.link/ip7b7w">
                <button className="crdbtn"><span class="text">Add to Cart</span><span>Added!</span></button>
</a>
                </div>
            </div>
        </div>
    </div>


    <div class="product-card">
        {/* <div class="badge">Hot</div> */}
        <div class="product-tumb">
             <Img src={woje3}></Img>
        </div>
        <div class="product-details">
            <span class="product-catagory">Women</span>
            <h4><a href="">Jewelry</a></h4>
            <p>Poedagar Female Wristwatch</p>
            <div class="product-bottom-details">
                <div class="product-price"><small></small>N 30,000</div>
                <div class="product-links">
                <FaHeart fontSize={"20px"} className="icon" />
                 
                <button className="crdbtn"><span class="text">Add to Cart</span><span>Added!</span></button>

                </div>
            </div>
        </div>
    </div>


    <div class="product-card">
        {/* <div class="badge">Hot</div> */}
        <div class="product-tumb">
             <Img src={woje4}></Img>
        </div>
        <div class="product-details">
            <span class="product-catagory">Women</span>
            <h4><a href="">Jewelry</a></h4>
            <p>Poedagar Female Wristwatch</p>
            <div class="product-bottom-details">
                <div class="product-price"><small></small>N 30,000</div>
                <div class="product-links">
                <FaHeart fontSize={"20px"} className="icon" />
                 
                <button className="crdbtn"><span class="text">Add to Cart</span><span>Added!</span></button>

                </div>
            </div>
        </div>
    </div>


    <div class="product-card">
        {/* <div class="badge">Hot</div> */}
        <div class="product-tumb">
             <Img src={woje5}></Img>
        </div>
        <div class="product-details">
            <span class="product-catagory">Women</span>
            <h4><a href="">Jewelry</a></h4>
            <p>Poedagar Female Wristwatch</p>
            <div class="product-bottom-details">
                <div class="product-price"><small></small>N 30,000</div>
                <div class="product-links">
                <FaHeart fontSize={"20px"} className="icon" />
                 
                <button className="crdbtn"><span class="text">Add to Cart</span><span>Added!</span></button>

                </div>
            </div>
        </div>
    </div>


    <div class="product-card">
        {/* <div class="badge">Hot</div> */}
        <div class="product-tumb">
             <Img src={woje6}></Img>
        </div>
        <div class="product-details">
            <span class="product-catagory">Women</span>
            <h4><a href="">Jewelry</a></h4>
            <p>Perlsilver and Gold set</p>
            <div class="product-bottom-details">
                <div class="product-price"><small></small>N 15,000</div>
                <div class="product-links">
                <FaHeart fontSize={"20px"} className="icon" />
                 
                <button className="crdbtn"><span class="text">Add to Cart</span><span>Added!</span></button>

                </div>
            </div>
        </div>
    </div>


    <div class="product-card">
        {/* <div class="badge">Hot</div> */}
        <div class="product-tumb">
             <Img src={woje7}></Img>
        </div>
        <div class="product-details">
            <span class="product-catagory">Women</span>
            <h4><a href="">Jewelry</a></h4>
            <p>Perlsilver and Gold set</p>
            <div class="product-bottom-details">
                <div class="product-price"><small></small>N 15,000</div>
                <div class="product-links">
                <FaHeart fontSize={"20px"} className="icon" />
                 <a href="https://wa.link/44tvdj">
                <button className="crdbtn"><span class="text">Add to Cart</span><span>Added!</span></button>
</a>
                </div>
            </div>
        </div>
    </div>


    
    </Box> );
}
 
export default Womenje;