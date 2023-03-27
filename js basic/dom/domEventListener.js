// const allItem = document.getElementsByClassName("list-item");
// for(let i = 0; i<allItem.length; i++){
//     var element = allItem[i];
//     element.addEventListener("click",function(event){
//         console.log(this,event.target);
//         event.target.parentNode.removeChild(event.target);
//     })
// }

const mainParent = document.getElementById('main-list');
mainParent.addEventListener('click',function(event){
    // console.log(event.target,this);
    event.target.parentNode.removeChild(event.target);
})

const addNewItem = document.getElementById("addNewItem");
addNewItem.addEventListener("click",function(event){
        const parentItem = document.getElementById('main-list');

        const createItem = document.createElement('li');
        createItem.innerHTML = "I am New List";
        parentItem.appendChild(createItem);
})


const changeBackgroundColor = document.getElementById('changeBackground');
changeBackgroundColor.addEventListener('click',function(event){
    document.body.style.backgroundColor = "Black";
});

const changeColor = document.getElementById('changeColor');
changeColor.addEventListener('click',function(event){
    document.body.style.color = "crimson";
    document.body.style.fontSize = "30px";
});