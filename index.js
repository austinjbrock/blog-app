let postsArray = []

const titleInput = document.getElementById('post-title')
const bodyInput = document.getElementById('post-body')

function renderPosts (){
      let postHtml = ''
      for (const post of postArray) {
         postHtml += `
            <h2 class="title post">${post.title}</h2>
            <p class="body" post>${post.body}</p>
            <hr />
            `
      }
      document.getElementById("blog-list").innerHTML = postHtml
   }


   fetch('https://apis.scrimba.com/jsonplaceholder/posts',{method: "GET"})
   .then(res => res.json())
   .then(data => {      
         postArray = data.slice(0,5)
         renderPosts()

      })

   document.getElementById('post-btn').addEventListener('click',function(e){
      e.preventDefault()
      const postTitle = titleInput.value
      const postBody = bodyInput.value
      const postData = {
         title: postTitle,
         body: postBody
      }
      

      fetch('https://apis.scrimba.com/jsonplaceholder/posts',{
      method: 'POST',
      body: JSON.stringify(postData),

         headers: {'Content-Type' : 'Application/json'}
      })
      .then(res => res.json())
      .then( postData => {
            postArray.unshift(postData)
         renderPosts()
      })
      titleInput.value = ''
      bodyInput.value = ''
   
   })







