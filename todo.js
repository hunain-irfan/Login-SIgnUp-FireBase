let inputBox = document.getElementById('input-box');
let listContainer = document.getElementById("list-container");

function Addtask(){
    if(inputBox.value === ''){
        alert('You must right something!')
    }else{
        let li = document.createElement('li');
        li.innerText = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement('span');
        let img = document.createElement('img');
        img.src = 'images/close.png'
        span.appendChild(img)
        li.appendChild(span)
    }
    inputBox.value = '';
    addDatatoLocalStorsge()
}

listContainer.addEventListener('click' , function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        addDatatoLocalStorsge()

    }else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        addDatatoLocalStorsge()
    }
})

function addDatatoLocalStorsge(){
    localStorage.setItem('task' , listContainer.innerHTML)
}

function showDataWhileRefreshingPage(){
    listContainer.innerHTML = localStorage.getItem('task');
}
showDataWhileRefreshingPage()
