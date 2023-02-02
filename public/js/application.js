const postsContainer = document.querySelector('.post-container');

postsContainer.addEventListener('click', async (e) => {
  e.preventDefault();

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
      console.log('ERROR ---> Не могу отправить запрос на сервер!', error);
    }

    // Красим кнопку в красные цвет после нажатия
    button.style.color = 'red';

    // console.log(id);
  }
});
