function delay() {
  return new Promise((resolve, reject) => setTimeout(() => {
    console.log("отправили запрос");
    if (запрос < 1000) {
        resolve ("Успех!");
        } else {
            reject ("Ошибка!");
        }, 2000})
)};



// Написать через эмулятор промиса (пример delay выше)  с задержкой 2 секунды запрос. Есть условие: если наш запрос работает больше чем одну секунду, то выдавать ошибку.

ДЗ:
url - https:jsonplaceholder.typicode.com/users
метод - get
сервер должен возращать данные в виде массива объектов.
Необходимо:
1. получить эти данные
2. преобразовать их (по полю name) в объект {firstName: "", lastName}

fetch("https:jsonplaceholder.typicode.com/users")
    .then((response) => {
        response.text()
        return Object.fromEntries(response);
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("сделано!")
    });
    
