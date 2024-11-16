import './index.css';

const textbox = document.querySelector('.textbox');
const conllapseBtn = document.querySelector('.collapse-btn');

conllapseBtn.addEventListener('click', () => {
    textbox.classList.toggle('visible');
});