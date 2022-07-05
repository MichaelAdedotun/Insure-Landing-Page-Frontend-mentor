// let modal = document.getElementById('modal');
let modalOpen = document.getElementById('modal-open');
let open = document.getElementById('open');
let close = document.getElementById('close');

open.addEventListener("click" , () =>{
    modalOpen.classList.add('show-modal');
    open.style.display = ('none');
    close.style.display = ('block')
})

close.addEventListener('click', () =>{
    modalOpen.classList.remove('show-modal');
    open.style.display = ('block');
    close.style.display  = ('none');
})

