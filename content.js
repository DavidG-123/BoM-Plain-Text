function doThis() {
   readThis();
}

async function readThis() {
    await fetch("BoM.txt").then((response) => response.text()).then((data) => {document.querySelector("#BoM-medium").innerHTML = data;});
}