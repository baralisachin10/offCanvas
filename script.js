const btn = document.querySelector('.btn');
const sidebar = document.querySelector('.sidebar');
const sidebarContainer = document.querySelector('.sidebar-container');

btn.addEventListener('click',()=>{
    sidebar.classList.toggle('active');
})