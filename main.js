
var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
const listAmount = document.querySelector('#amt');
const listDesc = document.querySelector('#description');
const listCat = document.querySelector('#category');

//creating an event when input is added and submitted
form.addEventListener('submit',addItem);

function addItem(e){
    e.preventDefault();

    var newAmt = document.getElementById('amt').value;
    var newDesc =document.getElementById('description').value;
    var newCat = document.getElementById('category').value;

    var newString = newAmt.concat("-",newDesc,"-",newCat);
    console.log(newString)
    var li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(newString));

    //delete option
    var deleteBtn = document.createElement('button');
    deleteBtn.className='btn btn-sm delete';
    deleteBtn.appendChild(document.createTextNode('delete'));
    deleteBtn.style.border = 'solid 2px';

    //edit option 
    var editBtn = document.createElement('button');
    editBtn.className='btn btn-sm';
    editBtn.appendChild(document.createTextNode('edit'));
    editBtn.style.border = 'solid 2px';
   
    //adding to local storage
    let myObj={
        amtObj : listAmount.value,
        descObj : listDesc.value,
        catObj : listCat.value
    };
    let myObj_serialized = JSON.stringify(myObj);
    localStorage.setItem(listDesc.value,myObj_serialized);

    li.appendChild(deleteBtn);
    li.appendChild(editBtn);
    itemList.appendChild(li);


    deleteBtn.onclick = () => {
        localStorage.removeItem(myObj.descObj);
        itemList.removeChild(li);
    }

    editBtn.onclick = () => {
        listAmount.value = myObj.amtObj;
        listDesc.value = myObj.descObj;
        listCat.value = myObj.catObj;
        localStorage.removeItem(myObj.descObj);
        itemList.removeChild(li);
    }

    listAmount.value ='';
    listDesc.value ='';
    listCat.value ='';
}

//for deleting an item
// itemList.addEventListener('click',deleteList);
// function deleteList(e){
//     e.preventDefault();
//     if(e.target.classList.contains('delete')){
//         if(confirm('Are you sure?')){
//             var li = e.target.parentElement;
//             itemList.removeChild(li);
//         }
//     }

// }