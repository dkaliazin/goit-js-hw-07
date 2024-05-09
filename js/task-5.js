/*
Напиши скрипт, який змінює колір фону елемента <body> через інлайн-стиль по кліку на button.change-color і задає це значення кольору текстовим вмістом для span.color.

<div class="widget">
  <p>Background color: <span class="color">-</span></p>
  <button type="button" class="change-color">Change color</button>
</div>

Для генерування випадкового кольору використовуй функцію getRandomHexColor().

Зверни увагу, що функція getRandomHexColor() повертає колір у hex-форматі, в той час як колір фону на <body> буде у форматі rgb. Це нормально й не потребує якихось правок.

На що буде звертати увагу ментор при перевірці:

Фон на <body> задається тільки після кліку на button.change-color
При кожному кліку на елемент button.change-color фон <body> зафарбовується новим рандомним кольором
На <body> і span.color значення одного й того самого кольору
*/
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const changeColor = document.querySelector(".change-color");
const spanColor = document.querySelector(".color");
changeColor.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  spanColor.textContent = randomColor;
})