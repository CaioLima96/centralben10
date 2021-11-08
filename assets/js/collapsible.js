let coll = document.getElementsByClassName("rulesCollapsible");

let i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("rulesActive");
        let content = this.nextElementSibling;
        if (content.style.maxHeight){
        content.style.maxHeight = null;
        } else {
        content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}