// SHIT********
// const main = document.querySelector('#main')
// const postsList = document.createElement('ul')
// const loading = document.createElement('li')
// loading.textContent = 'Loading...'

// const getPostsBtn = document.createElement('button')
// getPostsBtn.textContent = 'Get Posts'

// getPostsBtn.addEventListener('click', () => {
//   postsList.append(loading)

//   fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((response) => response.json())
//     .then((posts) => {
//       postsList.removeChild(loading)
//       postsList.append(
//         ...posts.map((postData) => {
//           const post = document.createElement('li')

//           const title = document.createElement('h4')
//           title.textContent = postData.title

//           const body = document.createElement('p')
//           body.textContent = postData.body

//           const commentsBtn = document.createElement('button')
//           commentsBtn.textContent = 'Comments'

//           commentsBtn.addEventListener('click', () => {
//             fetch(`https://jsonplaceholder.typicode.com/posts/${postData.id}/comments`)
//               .then((response) => response.json())
//               .then((comments) => {
//                 const commentsList = document.createElement('ul')

//                 commentsList.append(
//                   ...comments.map((commentData) => {
//                     const comment = document.createElement('li')

//                     const title = document.createElement('h5')
//                     title.textContent = commentData.name

//                     const body = document.createElement('p')
//                     body.textContent = commentData.body

//                     comment.append(title, body)

//                     return comment
//                   })
//                 )

//                 post.append(commentsList)
//               })
//           })

//           post.append(title, body, commentsBtn)

//           return post
//         })
//       )
//     })
// })

// main.append(getPostsBtn, postsList)
// SHIT********


// HTTP
const BASE_URL = 'https://jsonplaceholder.typicode.com'
const fetchJson = (url) => fetch(url).then((response) => response.json())
const api = {
  FETCH_POSTS: () => fetchJson(`${BASE_URL}/posts`),
  FETCH_POST_COMMENTS: (postId) => fetchJson(`${BASE_URL}/posts/${postId}/comments`)
}
// ---------------------------------------------


// Containers, Common elements
const main = document.querySelector('#main')
const postsList = document.createElement('ul')
const loading = document.createElement('li')
loading.textContent = 'Loading...'
const getPostsBtn = document.createElement('button')
getPostsBtn.textContent = 'Get Posts'
// ---------------------------------------------

// Helper functions (utility functions)
const createComment = ({ name, body }) => {
  const comment = document.createElement('li')

  const header = document.createElement('h5')
  header.textContent = name

  const content = document.createElement('p')
  content.textContent = body

  comment.append(header, content)

  return comment
}

const createPost = ({ id, title, body }) => {
  const post = document.createElement('li')

  const header = document.createElement('h4')
  title.textContent = title

  const content = document.createElement('p')
  content.textContent = body

  const commentsBtn = document.createElement('button')
  commentsBtn.textContent = 'Comments'

  commentsBtn.addEventListener('click', handleClickCommentsBtn(post, id))

  post.append(header, content, commentsBtn)

  return post
}
// ---------------------------------------------

// Click handlers
const handleClickCommentsBtn = (post, id) => () => {
  api.FETCH_POST_COMMENTS(id).then((comments) => {
    const commentsList = document.createElement('ul')

    commentsList.append(...comments.map(createComment))

    post.append(commentsList)
  })
}

const handleClickGetPosts = () => {
  postsList.append(loading)

  api.FETCH_POSTS().then((posts) => {
    postsList.removeChild(loading)
    postsList.append(...posts.map(createPost))
  })
}
// ---------------------------------------------

getPostsBtn.addEventListener('click', handleClickGetPosts)

main.append(getPostsBtn, postsList)
