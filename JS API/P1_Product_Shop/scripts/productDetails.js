const productId = new URLSearchParams(window.location.search).get("product_id");

const singleProduct = async (productId) => {
    const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
    const product = await res.json();
    const productDetailContainer = document.getElementById("productDetail");
    const productDiv = document.createElement("div")


}


singleProduct(productId);
