fetch('https://apis.scrimba.com/jsonplaceholder/posts',{method: "GET"})
.then(res => res.json())
.then(data => {
   //name our data reference
   let postArray = data.slice(0,8)
   //name where we will put the data
   let container = document.getElementById('blog-list')
   //name a variable we can update
   let postHtml = ''

   //loop over the list of posts until we hit our desired numbers
   for (const post of postArray) {
      //update our variable with the html tags we want to create and pass in our content
      postHtml += `
         <h2 class="title post">${post.title}</h2>
         <p class="body" post>${post.body}</p>
         <hr />
         `
   }

   // inject our new data into our page
   container.innerHTML = postHtml

})
