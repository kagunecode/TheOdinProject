const container = document.querySelector('#container');

const para = document.createElement('p');
const title = document.createElement('h3')
const divcont = document.createElement('div');
const titledivcont = document.createElement('h1');
const divcontpara = document.createElement('p');
const buttonTest = document.createElement('button');
const buttonDelete = document.createElement('button');

para.style.color = 'red';
para.textContent = 'Hey I\'m red!';
title.style.color = 'blue';
title.textContent = 'I\'m a blue h3!';
divcont.style.cssText = 'background-color: pink; border-color: black; border: solid;';
titledivcont.textContent = 'I\'m in a div';
divcontpara.textContent = 'ME TOO!';
buttonTest.style.marginTop = '16px';
buttonTest.style.padding = '8px 30px';
buttonTest.textContent = 'Press Me!';
buttonDelete.style.marginLeft = '8px';
buttonDelete.style.padding = '8px 30px';
buttonDelete.textContent = 'Delete Result!';

container.appendChild(para)
container.appendChild(title)
divcont.appendChild(titledivcont)
divcont.appendChild(divcontpara)
container.appendChild(divcont)
container.appendChild(buttonTest)
container.appendChild(buttonDelete)

function sumNum() {
    result = 15 + 15;
    para.textContent = `Hey I\'m red and ${result} as well!`
}

function deleteSum() {
    para.textContent = 'Hey I\'m red!'
}

buttonTest.addEventListener('click', sumNum);
buttonDelete.addEventListener('click', deleteSum)