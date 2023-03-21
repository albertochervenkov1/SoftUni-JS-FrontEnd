// function addItem() {
//     const input=document.getElementById('newItemText');
//     let inputValue=document.getElementById('newItemText').value;
//     const liContainer=document.getElementById('items');
//     const newLi=document.createElement('li');

//     newLi.textContent=inputValue;
//     liContainer.appendChild(newLi);
//     const newA=document.createElement('a');
//     newA.textContent='[Delete]';
//     newA.href='#';
//     newA.addEventListener('click',clickHandler);
//     newLi.appendChild(newA);
//     input.value='';

//     function clickHandler(e){
//         const target=e.target;
//         target.parentElement.remove();
//     }
// }



function addItem(){
    const ulContainer=document.getElementById('items');
    const input=document.getElementById('newItemText');
    const newLi=document.createElement('li');
    newLi.textContent=input.value;
    

    const newA=document.createElement('a');
    newA.textContent='[Delete]';
    newA.addEventListener('click',deleteHandler);
    newLi.appendChild(newA);
    ulContainer.appendChild(newLi);

    input.value='';

    function deleteHandler(e){
        return liItem=e.target.parentElement.remove();
    }
}
