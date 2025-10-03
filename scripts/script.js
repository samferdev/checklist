//Componentes de Form
const newItemInput = document.querySelector("#itemInput")
const addItemBtn = document.querySelector("#addBtn")
const removeBtn = document.querySelector(".remove-btn")
const list = document.querySelector(".list")
const alert = document.querySelector(".alert")

//Eventos de Form
addItemBtn.addEventListener("click", () => {

    const newItem = document.createElement("list-item")
    newItem.classList.add("list-item")

    const span = document.createElement("span");
    span.textContent = newItemInput.value;

    const removeBtn = document.createElement("button")
    removeBtn.classList.add("remove-btn")

    removeBtn.textContent = "X"

    list.appendChild(newItem)

    removeBtn.addEventListener("click", () => {  
        removeBtn.textContent = "X"
        newItem.remove()
        removeBtn.remove()

        setTimeout(() => {
            alert(alert)
        }, 1000)
    })

    newItem.appendChild(span)
    newItem.appendChild(removeBtn)

    list.appendChild(newItem)

    newItemInput.value = ""
    newItemInput.focus()

})
