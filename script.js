/* Новые элементы должны добавляться в список по нажатию на Enter */
/* Пустые элементы не должны добавляться */
const sendInput = document.querySelector('#input');
const listItems = document.querySelector('.items');
const inputWapper = document.querySelector('.input-wrapper');

sendInput.addEventListener('keydown', function(event) {

    const textOfTheListItem = sendInput.value;
    const newListItem = document.createElement('div');
    newListItem.classList.add('text');
    newListItem.textContent = textOfTheListItem;

    if (event.key == 'Enter' && textOfTheListItem != '') {
        listItems.append(newListItem);
        sendInput.value = '';
    }


    newListItem.addEventListener('click', function() {
        newListItem.classList.toggle('done');

    })
});





/* Если кликнуть на элемент списка, он зачеркивается */


/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */


/* Очищать input после добавления нового элемента в список */