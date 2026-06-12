export function teste(){
    console.log("GERAL")
}

export function render(el, props = {}, content, config, ctx = {}) {
    
    document.getElementById("page-container").innerHTML = "Geral"
    teste()
}