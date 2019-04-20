import React from "react"
import { graphql } from "gatsby"
import Header from "./Header"
import Footer from "./Footer"
import { Container, Main } from "./Containers"
import { Like, BlogData, Time, BlogContainer, Blog } from "./Blog"

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
    this.state = { blogs: [], data: props.data }
    this.Blogs = this.Blogs.bind(this)
    this.like = this.like.bind(this)
    this.Blog = this.Blog.bind(this)
  }

  like(id) {
    document.getElementById(`like${id}`).innerHTML = "❤️"
    this.state.blogs.forEach(blog => {
      if (blog.node.id === id) blog.node.liked = true
    })
    console.log(this.state.blogs)
  }

  componentDidMount() {
    this.setState({ blogs: this.state.data.allBlogsJson.edges })
  }

  Blog(props) {
    const blogId = props.blog.node.id
    return (
      <BlogContainer id={blogId}>
        <Header color={"white"} bgcolor={"black"} height={"50px"}>
          {props.blog.node.heading}
        </Header>
        <Blog>
          <BlogData>{props.blog.node.description}</BlogData>
          <Time>
            <Like onClick={this.like.bind(null, blogId)} id={`like${blogId}`}>
              ♡
            </Like>{" "}
            {props.blog.node.time}
          </Time>
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
          liked
          id
        }
      }
    }
  }
`
export default App
