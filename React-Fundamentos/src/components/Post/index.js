import React from "react"
import PropTypes from "prop-types"
import PostHeader from "./PostHeader"

import *  as styles from "./Post.scss";

export default function Post(props) {

  console.log(props)
  return (
    <article
      className={
        props.post.removed
          ? styles.postDeleted
          : styles.post
      }
    >
      <PostHeader
        onRemove={props.onRemove}
        post={{
          id: props.post.id,
          title: props.post.title,
          read: props.post.read,
        }}
      ></PostHeader>
      <br />
      <small>{props.post.subtitle}</small>
      <br>
      </br>
      Media: {props.post.likes / 2}
    </article>
  )
}

Post.propTypes = {
  onRemove: PropTypes.func.isRequired,
  post: PropTypes.shape({
    likes: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    read: PropTypes.bool.isRequired,
    removed: PropTypes.bool.isRequired,
  }).isRequired
}