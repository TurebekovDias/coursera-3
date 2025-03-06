// Функция upDate - вызывается при наведении курсора на изображение
function upDate(previewPic) {
    // Получаем элемент с id 'image'
    const imageElement = document.getElementById('image');
    
    // Сохраняем alt-текст и src изображения, на которое наведен курсор
    console.log("Наведение на изображение:", previewPic.alt, previewPic.src);
    
    // Меняем текст в элементе на alt-текст изображения
    imageElement.innerHTML = previewPic.alt;
    
    // Меняем фоновое изображение на то, на которое наведен курсор
    imageElement.style.backgroundImage = "url('" + previewPic.src + "')";
}

// Функция unDo - вызывается при уходе курсора с изображения
function unDo() {
    // Получаем элемент с id 'image'
    const imageElement = document.getElementById('image');
    
    // Возвращаем исходный текст
    imageElement.innerHTML = "Наведите курсор на изображение ниже, чтобы отобразить его здесь";
    
    // Удаляем фоновое изображение
    imageElement.style.backgroundImage = "url('')";
}
