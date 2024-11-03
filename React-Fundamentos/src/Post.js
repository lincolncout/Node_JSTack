import React from "react"
import PropTypes from "prop-types"
import PostHeader from "./PostHeader"

export default function Post(props) {
  return (
    <>
      <article>
        <PostHeader 
          onRemove = {props.onRemove}
          post = {{
            id : props.post.id,
            title : props.post.title,
            read : props.post.read,
          }}
        ></PostHeader>
        <br />
        <small>{props.post.subtitle}</small>
        <br>
        </br>
        Media: {props.post.likes / 2}
      </article>
      <br></br>
    </>
  )
}

Post.propTypes = {
  onRemove: PropTypes.func.isRequired,
  post: PropTypes.shape({
    likes: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    read: PropTypes.bool.isRequired
  }).isRequired
}