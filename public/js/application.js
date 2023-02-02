const postsContainer = document.querySelector('.post-container');

postsContainer.addEventListener('click', async (e) => {
  e.preventDefault();

  // Добавляем голосование
  if (e.target.classList.contains('vote-button')) {
    const button = e.target;
    // console.log('---> Button: ', button);
    // Получаем id кнопки по data-set html
    const id = button.dataset.btn_id;
    // console.log('----> ButtonId: ', id);
    // Отправляем запрос на сервер
    try {
      const response = await fetch(
        `/posts/${id}/vote`,
        {
          method: 'POST',
        },
      );
      console.log('Отправил запрос на сервер', response);
      // Получаем запрос с сервера
      const result = await response.json();
      //   console.log(result);
      // Ищем элемент с поинтами
      //   console.log(button.parentNode.parentNode.querySelector('.points'));
      const getElementPoint = button.parentNode.parentNode.querySelector('.points');
      // Записываем увеличенное значение в элемент
      getElementPoint.innerText = result.votes;
    } catch (error) {
      console.log('ERROR ---> Не могу отправить запрос на сервер на добавление!', error);
    }
    // Красим кнопку в красные цвет после нажатия
    button.style.color = 'red';
  }

  // Удаляем пост
  if (e.target.classList.contains('delete')) {
    //  Получем элемент ссылка
    const getLinkEl = (e.target);
    // console.log(getLinkEl);
    // Берем ссылку из элемента
    const { href } = getLinkEl;
    console.log(href);
    try {
      await fetch(href, {
        method: 'DELETE',
      });
    } catch (error) {
      console.log('ERROR ---> Не могу отправить запрос на сервер на удаление!', error);
    }
    // Удаляем элемент (пост) со страницы
    // console.log(getLinkEl.parentNode.parentNode);
    getLinkEl.parentNode.parentNode.remove();
  }
});
