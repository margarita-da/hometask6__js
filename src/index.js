/* ДЗ 6 - Асинхронность и работа с сетью */

/*
 Задание 1:

 Функция должна возвращать Promise, который должен быть разрешен через указанное количество секунду

 Пример:
   delayPromise(3) // вернет promise, который будет разрешен через 3 секунды
 */
function delayPromise(seconds) {
  return new Promise(resolve => {
    setTimeout(()=>{
      resolve();
    },seconds*1000);
  })
}
delayPromise(3)
/*
 Задание 2:

 2.1: Функция должна вернуть Promise, который должен быть разрешен с массивом городов в качестве значения

 Массив городов пожно получить отправив асинхронный запрос по адресу
 https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json

 2.2: Элементы полученного массива должны быть отсортированы по имени города

 Пример:
   loadAndSortTowns().then(towns => console.log(towns)) // должна вывести в консоль отсортированный массив городов
 */
function loadAndSortTowns() {
//   return new Promise((resolve,reject) => {
//     const xhr = new XMLHttpRequest();
//     const towns = [];
//     xhr.open('GET', 'https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json');
//     xhr.send();
//     xhr.responseType = 'json';
//     xhr.addEventListener('load', ()=>{
//       if(xhr.status>=400){
//         reject('ошибка');
//       }else{
//         let jsonTowns = JSON.parse(xhr.response);
//         for(let i = 0; i<jsonTowns.length; i++){
//           towns.push(jsonTowns[i].name);
//         }
//         towns.sort();
//         resolve(towns)
//       }
//     })
// })
  return new Promise ((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json');
    xhr.send();
    xhr.addEventListener('load', ()=> {
        if (xhr.status >= 400) {
            reject();    
        } else {
            const townsArray = JSON.parse(xhr.responseText);

            townsArray.sort( (a, b) => {
                if ( a.name < b.name ) {
                    return -1;
                }
                if ( a.name > b.name ) {
                    return 1;
                }

                return 0;
            });
            
            resolve(townsArray);
        }
    });

  });

}
loadAndSortTowns()
export {
    delayPromise,
    loadAndSortTowns
};
