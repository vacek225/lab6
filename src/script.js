// Задание 1a
function задание1a() {
    const число = parseFloat(prompt("Введите число для вычисления sin(x):"));
    if (!isNaN(число)) {
        alert(`sin(${число}) = ${Math.sin(число)}`);
    } else {
        alert("Ошибка: введите число!");
    }
}

// Задание 1b
function задание1b() {
    const x1 = parseFloat(prompt("Введите x первой вершины квадрата:"));
    const y1 = parseFloat(prompt("Введите y первой вершины квадрата:"));
    const x2 = parseFloat(prompt("Введите x противоположной вершины квадрата:"));
    const y2 = parseFloat(prompt("Введите y противоположной вершины квадрата:"));
    const x = parseFloat(prompt("Введите x точки:"));
    const y = parseFloat(prompt("Введите y точки:"));

    if (isNaN(x1) || isNaN(y1) || isNaN(x2) || isNaN(y2) || isNaN(x) || isNaN(y)) {
        alert("Ошибка: вводите только числа!");
        return;
    }

    const minX = Math.min(x1, x2);
    const maxX = Math.max(x1, x2);
    const minY = Math.min(y1, y2);
    const maxY = Math.max(y1, y2);

    const внутри = x >= minX && x <= maxX && y >= minY && y <= maxY;
    alert(`Точка (${x}, ${y}) ${внутри ? "внутри" : "вне"} квадрата.`);
}

// Задание 1c
function задание1c() {
    const число = parseInt(prompt("Введите натуральное число:"));
    if (isNaN(число) || число <= 0) {
        alert("Ошибка: введите натуральное число!");
        return;
    }

    let найдено = false;
    for (let a = 1; a * a <= число; a++) {
        const b = Math.sqrt(число - a * a);
        if (b === Math.floor(b) && b > 0) {
            alert(`${число} = ${a}² + ${b}²`);
            найдено = true;
            break;
        }
    }

    if (!найдено) {
        alert(`${число} нельзя представить как сумму квадратов двух натуральных чисел.`);
    }
}

// Задание 1d
function задание1d() {
    const email = prompt("Введите email:");
    if (email.indexOf('@') === -1) {
        alert("Ошибка: email должен содержать @!");
    } else {
        alert("Email корректный.");
    }
}

// Задание 1e
function задание1e() {
    const текст = prompt("Введите текст:");
    let латинскихБукв = 0;

    for (const символ of текст) {
        if ((символ >= 'a' && символ <= 'z') || (символ >= 'A' && символ <= 'Z')) {
            латинскихБукв++;
        }
    }

    const процент = (латинскихБукв / текст.length) * 100;
    alert(`Латинских букв: ${процент.toFixed(2)}%`);
}

// Задание 1f
function задание1f() {
    const текст = prompt("Введите текст со словами:");
    const слова = текст.split(/\s+/).filter(слово => слово.length > 0);
    const уникальныеСлова = [...new Set(слова)];
    alert(`Без повторений: ${уникальныеСлова.join(' ')}`);
}

// Задание 1g
function задание1g() {
    const n = parseInt(prompt("Сколько чисел в массиве?"));
    if (isNaN(n) || n <= 0) {
        alert("Ошибка: введите положительное число!");
        return;
    }

    const массив = [];
    for (let i = 0; i < n; i++) {
        массив.push(Math.floor(Math.random() * 100));
    }

    const перевернутый = [...массив].reverse();
    let вывод = "Массив (5 чисел в строке):\n";

    for (let i = 0; i < перевернутый.length; i++) {
        вывод += перевернутый[i] + " ";
        if ((i + 1) % 5 === 0 || i === перевернутый.length - 1) {
            вывод += "\n";
        }
    }

    alert(вывод);
}

// Задание 1h
function задание1h() {
    const n = parseInt(prompt("Размер матрицы (n):"));
    if (isNaN(n) || n <= 0) {
        alert("Ошибка: введите положительное число!");
        return;
    }

    const матрица = [];
    for (let i = 0; i < n; i++) {
        const строка = [];
        for (let j = 0; j < n; j++) {
            строка.push(Math.floor(Math.random() * 100));
        }
        матрица.push(строка);
    }

    let мин = Infinity, макс = -Infinity;
    for (let i = 0; i < n; i++) {
        if (матрица[i][i] < мин) мин = матрица[i][i];
        if (матрица[i][i] > макс) макс = матрица[i][i];

        if (i !== n - 1 - i) {
            if (матрица[i][n - 1 - i] < мин) мин = матрица[i][n - 1 - i];
            if (матрица[i][n - 1 - i] > макс) макс = матрица[i][n - 1 - i];
        }
    }

    for (let i = 0; i < n; i++) {
        if (матрица[i][i] !== мин && матрица[i][i] !== макс) {
            матрица[i][i] = 0;
        }

        if (i !== n - 1 - i && матрица[i][n - 1 - i] !== мин && матрица[i][n - 1 - i] !== макс) {
            матрица[i][n - 1 - i] = 0;
        }
    }

    let вывод = "Матрица:\n";
    for (const строка of матрица) {
        вывод += строка.join("\t") + "\n";
    }
    alert(вывод);
}

// Задание 1i
function задание1i() {
    const дней = parseInt(prompt("Сколько дней добавить?"));
    if (isNaN(дней)) {
        alert("Ошибка: введите число!");
        return;
    }

    const дата = new Date();
    дата.setDate(дата.getDate() + дней);
    alert(`Новая дата: ${дата.toLocaleDateString()}`);
}

// Задание 1j
function задание1j() {
    const сегодня = new Date();
    let следующее1Сентября = new Date(сегодня.getFullYear(), 8, 1);

    if (сегодня > следующее1Сентября) {
        следующее1Сентября = new Date(сегодня.getFullYear() + 1, 8, 1);
    }

    const месяцев = (следующее1Сентября.getFullYear() - сегодня.getFullYear()) * 12 +
        (следующее1Сентября.getMonth() - сегодня.getMonth());

    alert(`До 1 сентября осталось ${месяцев} месяцев.`);
}

// Задание 3
function задание3() {
    const div = document.querySelector('div');
    const ul = document.querySelector('ul');
    const второйLi = document.querySelectorAll('li')[1];

    alert(`Div: ${div.textContent}\nUL: ${ul.textContent}\nВторой LI: ${второйLi.textContent}`);
}

// Задание 4
function задание4() {
    const ячейки = document.querySelectorAll('td');
    ячейки.forEach(ячейка => {
        const [i, j] = ячейка.textContent.split(':').map(Number);
        if ((i + j) % 2 === 0) {
            ячейка.style.backgroundColor = 'red';
            ячейка.style.color = 'white';
        }
    });
}

// Получаем все ссылки на странице
const links = document.querySelectorAll('a');

// Функция для проверки, является ли ссылка внешней
function isExternalLink(href) {
    return href &&
        href.includes('://') &&
        !href.startsWith('http://internal.com');
}

// Перебираем все ссылки и применяем стиль
links.forEach(link => {
    if (isExternalLink(link.getAttribute('href'))) {
        link.style.color = 'orange';
    }
});

// Задание 7
function очистить(элемент) {
    элемент.innerHTML = '';
}

// Задание 8
function задание8() {
    const количество = parseInt(prompt("Сколько пунктов в списке?"));
    if (isNaN(количество) || количество <= 0) {
        alert("Ошибка: введите положительное число!");
        return;
    }

    const ul = document.createElement('ul');

    for (let i = 0; i < количество; i++) {
        const текст = prompt(`Текст пункта ${i + 1}:`);
        const li = document.createElement('li');
        li.textContent = текст || `Пункт ${i + 1}`;
        ul.appendChild(li);
    }

    document.body.appendChild(ul);
}