const urlParams = new URLSearchParams(window.location.search);

const postId = urlParams.get("postId");
console.log(postId);
fetch(`https://dummyjson.com/products/${postId}`)
    .then((response) => response.json())
    .then((json) => clickfuncition(json));

function clickfuncition(post) {
    console.log(post);
    document.getElementById("demo").innerHTML += `
    <div class="back">
    <a href="./index.html"><button>Back</button></a></div>
    <div class="row" id="row1">
    <div class=textbox>
    <h1>${post.title}</h1>
    <p><b>description:</b>${post.description}</p>
    <p><b>price:</b>${post.price}</p>
    <p><b>discountPercentage:</b>${post.discountPercentage}</p>
    <p><b>rating:</b>${post.rating}</p>
    <p><b>stock:</b>${post.stock}</p>
    <p><b>brand:</b>${post.brand}</p>
    <p><b>category:</b>${post.category}</p></div>
    <div class=imgbox><img src="${post.thumbnail}"/></div>
    </div>
      
        <a href="./click.html?postId=${parseInt(postId)+1}"><button>Next</button></a>`;

}