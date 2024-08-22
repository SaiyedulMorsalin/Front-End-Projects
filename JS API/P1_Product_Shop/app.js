

const showAllCategory = async () => {
    const res = await fetch("https://fakestoreapi.com/products/categories")
    const data = await res.json()
    data.forEach(category => {
        const categoriesContainer = document.getElementById("categories-container");
        categoriesContainer.classList.add("list-group");;
        categoriesContainer.style.marginLeft = "25px";
        categoriesContainer.style.listStyle = "none";
        const li = document.createElement("li");
        li.innerHTML = `
        <i class="fa-regular fa-circle mx-2"></i> <a class=" my-2 link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            href="">${category}</a>
        `;
        categoriesContainer.appendChild(li)
        console.log(category);
    });

}

const defaultDataLoad = async () => {
    const res = await fetch('https://fakestoreapi.com/products')
    const data = await res.json()
    const productContainer = document.getElementById("productContainer");

    data.forEach(product => {
        const productCard = document.createElement("div")
        productCard.classList.add("col-3");
        productCard.classList.add("my-1");


        productCard.innerHTML = `
            <div class="card" style=" height: 450px;">
                <img style="height:270px;cursor:pointer;" src="${product.image}" class="card-img-top" alt="...">
                <div class="card-body">
                <h6 class="card-subtitle mb-2 text-body-primary">${product.title}</h6>
                    <p class="card-text">${product.description.slice(0, 60)}</p>
                </div>
                <div class="d-flex align-items-center justify-content-around my-3">
                    <h5>$ ${product.price}</h5>
                    <h5><a href="">Details</a></h5>
                </div>
            </div>
        
        `;
        const card = productCard.querySelector(".card");
        card.addEventListener("mouseover", () => {
            card.style.boxShadow = "4px 4px 8px gray";
        });
        card.addEventListener("mouseout", () => {
            card.style.boxShadow = "";
        });
        productContainer.appendChild(productCard);

    });

}









defaultDataLoad()
showAllCategory()