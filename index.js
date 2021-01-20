window.addEventListener("load", function () {
    if (window.innerWidth > 1100) {
        let elements = document.querySelectorAll(".buy")
        for (let i = 0; i < elements.length; i++) {
            console.log("raz")
            elements[i].classList.add("buyAfterLoad")
        }
        let elements2 = document.querySelectorAll(".oneProduct")
        for (let i = 0; i < elements2.length; i++) {
            elements2[i].addEventListener("mouseover", function () {
                let properIamge = elements2[i].querySelector("img")
                properIamge.style.width = "300px"
                properIamge.style.height = "300px"
            })
            elements2[i].addEventListener("mouseout", function () {
                let properIamge = elements2[i].querySelector("img")
                properIamge.style.width = "250px"
                properIamge.style.height = "250px"
            })
        }
    }
})
