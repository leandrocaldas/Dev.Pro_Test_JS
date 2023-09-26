document.addEventListener("DOMContentLoaded", function () {
    const sortButton = document.getElementById("sortButton");
    sortButton.addEventListener("click", sortProducts);

    function sortProducts() {
        const productList = document.getElementById("productList").value;
        const sortKey = document.getElementById("sortKey").value;
        const sortOrder = document.getElementById("sortOrder").value;

        try {
            const products = JSON.parse(productList);

            const sortedProducts = sortProductsArray(products, sortKey, sortOrder);
            displaySortedProducts(sortedProducts);
        } catch (error) {
            alert("Invalid JSON format for the product list.");
        }
    }

    function sortProductsArray(products, key, order) {
        return products.sort((a, b) => {
            const valueA = a[key];
            const valueB = b[key];

            if (key === "name") {
                return order === "ascending" ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
            } else {
                return order === "ascending" ? valueA - valueB : valueB - valueA;
            }
        });
    }

    function displaySortedProducts(products) {
        const sortedList = document.getElementById("sortedList");
        sortedList.innerHTML = "";

        products.forEach(product => {
            const productInfo = `Name: ${product.name}, Price: $${product.price}, Stock: ${product.stock}`;
            const productDiv = document.createElement("div");
            productDiv.textContent = productInfo;
            sortedList.appendChild(productDiv);
        });
    }
});
