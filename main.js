fetch("https://dummyjson.com/products")
    .then((responce) => responce.json())
    .then((json) => productslist(json));

var box = "";

function productslist(items) {
    console.log('items', items)
    for (var i = 0; i < items.products.length; i++) {
        box += `<div class="row">
        <a href="./click.html?postId=${items.products[i].id}">
      <div class="text-wrap"> 
       <h1>${items.products[i].title}</h1>
        <p><b>description:</b>${items.products[i].description}</p>
        <p><b>price:</b>${items.products[i].price}</p>
        <p><b>discountPercentage:</b>${items.products[i].discountPercentage}</p>
        <p><b>rating:</b>${items.products[i].rating}</p>
        <p><b>stock:</b>${items.products[i].stock}</p>
        <p><b>brand:</b>${items.products[i].brand}</p>
        <p><b>category:</b>${items.products[i].category}</p></div>
        <div class=img-wrap>
        <img src="${items.products[i].thumbnail}"/>
       </div>
        </div>`;

    }
    box += `</div>`
    console.log(box)
    document.getElementById("click").innerHTML = box;
}
/* <div class="img-wrap"> <img src="${items.products[i].images[key]}"/></div>
for (var key in items.products[i].images)  */

// <
// a href = "/pages/articleSingle.html?postId=${post.id}" >