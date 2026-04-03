  const button = document.querySelector("button");
  const textarea = document.querySelector("textarea");
  const postsContainer = document.querySelector(".posts");

  button.addEventListener('click', function(){
    const text = textarea.value;
    if(text === "") return;
    const newPost = document.createElement("p");
    newPost.textContent = text;
    postsContainer.appendChild(newPost);

    textarea.value = "";
  })

  console.log("hello world")