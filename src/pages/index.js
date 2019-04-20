import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

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

const Container = styled.div`
  width: 98vw;
  height: 98vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Footer = styled.footer`
  background-color: ${props => props.bgcolor};
  color: ${props => props.color};
  height: ${props => props.height};
  font-size: 20px;
  font-family: sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Blog = styled.article`
  background-color: wheat;
  font-size: 18px;
  font-family: serif;
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: scroll;
`

const BlogContainer = styled.div`
  background-color: ${props => props.bgcolor};
  color: ${props => props.color};
  width: 80%;
`

const Main = styled.main`
  width: 100%;
  height: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
`

const Time = styled.time`
  display: flex;
  justify-content: flex-end;
`

const BlogData = styled.p`
  font-size: 18px;
  padding-left: 10px;
  font-family: sans-serif;
  line-height: 1.5;
`

const Heading = function(props) {
  return (
    <Header color={"white"} bgcolor={"gray"} height={"10%"}>
      {props.heading}
    </Header>
  )
}

const Bottom = function(props) {
  return (
    <Footer color={"white"} bgcolor={"gray"} height={"5%"}>
      {props.text}
    </Footer>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.Blogs = this.Blogs.bind(this)
    this.state = { blogs: [],data:props.data }
  }

  componentDidMount() {
    this.setState({blogs:this.state.data.allBlogsJson.edges})
  }

  Blog(props) {
    return (
      <BlogContainer>
        <Header color={"white"} bgcolor={"black"} height={"50px"}>
          {props.blog.node.heading}
        </Header>
        <Blog>
          <BlogData>{props.blog.node.description}</BlogData>
          <Time>{props.blog.node.time}</Time>
        </Blog>
        <br />
      </BlogContainer>
    )
  }

  Blogs() {
    const blogs = this.state.blogs.map(blog => <this.Blog blog={blog} />)
    return blogs
  }

  render() {
    return (
      <Container>
        <Heading heading={"My First Blog"} />
        <Main>
          <this.Blogs />
        </Main>
        <Bottom text={"Reshmi Saji"} />
      </Container>
    )
  }
}

export const query = graphql`
  {
    allBlogsJson {
      edges {
        node {
          heading
          description
          time
        }
      }
    }
  }
`
export default App
