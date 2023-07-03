function grabData(input) {
    let URL = window.URL || window.webkitURL;
    const file = input.files[0];

    if (file) {
        const img = document.querySelector("img");
        img.src = URL.createObjectURL(file);
    }
}
