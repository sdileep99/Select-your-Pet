let petsImageUrls = {
    dog: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/select-your-pet-dog-img.png",
    cat: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/select-your-pet-cat-img.png",
    parrot: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/select-your-pet-parrot-img.png",
    spider: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/select-your-pet-spider-img.png",
    rabbit: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/select-your-pet-rabbit-img.png"
};
let petList = ["dog", "cat", "parrot", "spider", "rabbit"];
let selectEl = document.getElementById('petSelect');
let imgEl = document.getElementById("petImg");

function onSelectImgChange(event) {
    let selectElValue = event.target.value;
    for (let pet of petList) {
        if (selectElValue === pet) {
            imgEl.src = petsImageUrls[pet];
        }
    }
}
selectEl.addEventListener("change", onSelectImgChange);