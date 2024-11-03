import React, { useState } from "react"
import Post from "./Post"
import Header from "./Header"
import { ThemeProvider } from "./ThemeContext";

// Render -> Renderizar -> mostrar algo em tela
// Props -> Propriedades
function App() {

  // ao colocar [] no posts é escolhida a primeira posicao do array de estados
    // na primeira posicao do useState tem a variavel dos nossos posts
  const [posts, setPosts] = useState([
    { id: Math.random(), title: 'Title#01', subtitle: 'Sub#01',likes: 20  , read: false},
    { id: Math.random(), title: 'Title#02', subtitle: 'Sub#02', likes: 10 , read: true},
    { id: Math.random(), title: 'Title#03', subtitle: 'Sub#03', likes: 50 , read: false},
  ]);

  function handleRemovePost(postId){
    setPosts((prevState) => prevState.filter(post => post.id !== postId))
  }

  function handleRefresh() {
    setPosts((prevStates) => [
      ...prevStates, 
      {
        id: Math.random(),
        title: `Title#0${prevStates.length + 1}`,
        subtitle: `Sub#0${prevStates.length + 1}`,
        likes: 50
      }
    ]);
  }

  return (
    <ThemeProvider>
      <Header
        title="Jstack's blog">
        <h2>Posts da semana
          <button onClick={handleRefresh}>Atualizar</button>
        </h2>
      </Header>

      {posts.map(post => (
        <Post
          key={post.id}
          post={post}
          likes={post.likes}
          onRemove = {handleRemovePost}
        ></Post>
      ))}

      <hr></hr>
    </ThemeProvider>
  )
}

export default App