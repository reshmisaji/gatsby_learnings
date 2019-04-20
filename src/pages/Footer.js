import styled from "styled-components"

const Footer = styled.footer`
  background-color: ${props => props.bgcolor};
  color: ${props => props.color};
  height: ${props => props.height};
  font-size: 20px;
  font-family: sans-serif;
  display: flex;
  justify-content: ${props=>props.inversed?"flex-end":"center"};
  align-items: center;
`

export default Footer
