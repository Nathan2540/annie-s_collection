import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
    return ( <Box width={"100%"} height={"-webkit-fit-content"} background={"rgba(201, 24, 74, 0.51)"} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
        <Text fontSize={"22px"}>
            Make a Descriptive Order
        </Text>
        <Text fontSize={"14px"}>Describe what you want and we'll get it for you</Text>
        <form
  action="https://formspree.io/f/xqaqlewn"
  method="POST"
  className="form2"
>
  <label>
    Your email: <br />
    <input type="email" name="email"/>
  </label>
  <label>

    Your message: <br />
    <textarea name="message"></textarea>
  </label>
 
  <button type="submit">Send</button>
</form>
    </Box> );
}
 
export default Footer;