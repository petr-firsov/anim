import './index.css';

const block = document.querySelector('.block');
const conllapseBtn = document.querySelector('.collapse-btn');

conllapseBtn.addEventListener('click', () => {
    if (block.classList.contains('showing-block')) {
        block.classList.replace('showing-block', 'hiding-block');
    } else if (block.classList.contains('hiding-block')) {
        block.classList.replace('hiding-block', 'showing-block');
    } else {
        block.classList.add('showing-block');
    }
});

/**
 * Если класса нет, то добавить showing-block
 * если есть showing-block, то убрать и добавить hiding-block.
 * Есть есть hiding-block, то удаляем и добавляем showing-block.
 */