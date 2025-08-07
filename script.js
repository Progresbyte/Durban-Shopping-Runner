document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.products li');
    items.forEach(item => {
        item.addEventListener('click', () => {
            alert('You clicked on: ' + item.textContent);
        });
    });
});