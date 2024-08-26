document.addEventListener("DOMContentLoaded", () => { 

    let inputTaskDiv = document.querySelector("#input-task");
    let addbutton = document.querySelector("#addbtn");
    let inputListDiv = document.querySelector(".input-list");

    addbutton.addEventListener("click", () => {
        if (inputTaskDiv.value != "") {
            const newList = document.createElement('p');
            const donebtn = document.createElement('button');
            const listItem = document.createElement('div');

            donebtn.textContent = "Done";
            donebtn.id = "btn-done";

            listItem.classList.add("input-list-item");

            listItem.style.color = "black";
            listItem.style.border = "1px solid rgba(0, 0, 0, 0.267)";
            listItem.style.borderRadius = "1rem";
            listItem.style.padding = "0.5rem";
            listItem.style.display = "flex";
            listItem.style.justifyContent = "space-between";
            listItem.style.alignItems = "center";

            newList.textContent = inputTaskDiv.value;
            listItem.appendChild(newList);
            listItem.appendChild(donebtn);
            inputListDiv.appendChild(listItem);
            inputTaskDiv.value = "";

            donebtn.addEventListener("click", () => {
                inputListDiv.removeChild(listItem);
            });
        }
        else {
            window.alert("No Task! Please input task");
        }
    });
});
