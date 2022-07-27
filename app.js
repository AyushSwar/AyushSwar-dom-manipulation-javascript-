window.addEventListener("load",function(){
    
    const list = document.querySelector('#movie-list ul');
    const forms =  document.forms;
     
    //delete movie title
    list.addEventListener("click",(e)=>{
        if(e.target.className == 'delet'){
            const li = e.target.parentElement;
            li.parentNode.removeChild(li);
        }

    });
    
    //adding movie title
    const addform = forms['add-movie'];
    addform.addEventListener('submit', (e)=>{
        e.preventDefault();

    //Creating elements
    const value = addform.querySelector('input[type="text"]').value;
    const li = document.createElement('li');
    const movieName = document.createElement('span');
    const deleteBtn = document.createElement('span');

    //add the text content
    movieName.textContent = value;
    deleteBtn.textContent = 'delete';

    //add classes
    movieName.classList.add('name');
    deleteBtn.classList.add('delet');

    //append to DOM
    li.appendChild(movieName);
    li.appendChild(deleteBtn);
    list.appendChild(li);
    });
});
  