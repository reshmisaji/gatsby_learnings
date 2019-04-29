import styled from "styled-components"

const Blog = styled.article`
  background-color: papayawhip;
  font-size: 18px;
  font-family: serif;
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow: scroll;
`

const BlogContainer = styled.div`
  background-color: ${props => props.bgcolor};
  color: ${props => props.color};
  width: 80%;
`

const Time = styled.time`
  display: flex;
  justify-content: flex-end;
`

const BlogData = styled.p`
  width: 80%;
  font-size: 18px;
  padding-left: 10px;
  font-family: sans-serif;
  line-height: 1.5;
`

const Like = styled.span`
  width: 50px;
  height: 30px;
  color: black;
`

export { Like, BlogData, Time, BlogContainer, Blog }
