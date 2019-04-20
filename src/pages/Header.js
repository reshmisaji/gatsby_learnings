import styled from "styled-components"

const Header = styled.header`
  background-color: ${props => props.bgcolor};
  color: ${props => props.color};
  height: ${props => props.height};
  font-size: 30px;
  font-family: sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`
export default Header
