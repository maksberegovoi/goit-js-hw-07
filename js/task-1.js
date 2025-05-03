function foo() {
    const liItemElements = document.querySelectorAll('.item')
    console.log(`Number of categories: ${liItemElements.length}`);
    liItemElements.forEach(el => {
        console.log(`Category: ${el.querySelector("h2").textContent}`);
        console.log(`Elements: ${el.querySelectorAll("ul li").length}`);
    })


}

foo()

