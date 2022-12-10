// ─── Values ──────────────────────────────────────────────────────
let zapnout = false

let prepisovani = false
let bezMezer = false
let odradkovani = false

let newline = true

var inputState = 0


// ─── Menu Setup ──────────────────────────────────────────────────────────────
function showMenu(){
    this.x = document.createElement("div")
    this.x.className = "menu-de-la-plus"
    document.querySelector(".dropdown-menu-left").appendChild(this.x)

    this.x.innerHTML = `<p class="a1 dropdown-item-text" style="color: ${prepisovani? "green": "red"}; margin: 0px;;">přepisování</p><p class="a2 dropdown-item-text" style="color: ${bezMezer? "green": "red"}; margin: 0px;">Mezery</p><p class="a3 dropdown-item-text" style="color: ${odradkovani? "green": "red"}; margin: 0px;">Odřádkování</p>`
    zapnout = !zapnout
}

function removeMenu(){
    this.x = document.querySelector(".menu-de-la-plus")
    this.x.innerHTML = ""

    this.x.remove()
    zapnout = !zapnout
}

// ─── Key Detection ───────────────────────────────────────────────────────────
document.body.addEventListener("keydown",function(e){
    // ─── Keybinds for Hacks and Menu ─────────────────────────────────────
    if(e.key === "ArrowUp"){
        zapnout ? removeMenu() : showMenu()
    }

    if(e.key === "ArrowLeft"){
        prepisovani = !prepisovani
        document.querySelector(".menu-de-la-plus").querySelector(".a1").style.color = prepisovani ? "green" : "red"
    }

    if(e.key === "ArrowDown"){
        bezMezer = !bezMezer
        document.querySelector(".menu-de-la-plus").querySelector(".a2").style.color = bezMezer ? "green" : "red"
    }

    if(e.key === "ArrowRight"){
        odradkovani = !odradkovani
        document.querySelector(".menu-de-la-plus").querySelector(".a3").style.color = odradkovani ? "green" : "red"
    }

    if(prepisovani && e.key !== "ArrowDown" && e.key !== "ArrowLeft" && e.key !== "ArrowUp" && e.key !== "ArrowRight" && e.key !=="Backspace"){
        let text = document.querySelector(".ql-editor").textContent
        let textSliced = x.slice(0,p)
        let textLength = x.length

        let inputText = document.querySelector(".zav-dynamic-height").querySelector(".ql-editor").querySelectorAll("p")[inputState].textContent
        let inputLength = inputText.length
        
        var p = 0

        e.key === "Enter" ? newline = false : newline = newline

        bezMezer ? text = () => {text.replaceAll(" ",""); text = replaceAll(" ","");} : text = text

        if(newline === true){
            let wwa = document.querySelector(".zav-dynamic-height").querySelector(".ql-editor").querySelectorAll("p")[rr].textContent
            p = wwa.length
            p++
            m = x.slice(0,p)
            document.querySelector(".zav-dynamic-height").querySelector(".ql-editor").querySelectorAll("p")[rr].innerHTML = m
        } else {
            let wwa = document.querySelector(".zav-dynamic-height").querySelector(".ql-editor").querySelectorAll("p")[rr].textContent
            document.querySelector(".zav-dynamic-height").querySelector(".ql-editor").querySelectorAll("p")[rr].innerHTML = wwa+"¶"
            let zas = document.querySelector(".zav-dynamic-height").querySelector(".ql-editor").innerHTML
            p = 0
            m = x.slice(0,p)
            document.querySelector(".zav-dynamic-height").querySelector(".ql-editor").innerHTML = zas+"<p>"+m+"</p>"
            rr = document.querySelector(".zav-dynamic-height").querySelector(".ql-editor").querySelectorAll("p").length
            rr = rr - 1
            newline = true
        }
    }
})
