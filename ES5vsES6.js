ES5 vs ES6

//Стрелочная функция. Привязана к значению this, более лаконичный синтаксис, всегда анонимная
ES6: let funct = (x, y) => x + y;
ES5: let funct = function(x, y) { return y + y };


bind(this) - //предназначен для того, чтобы избежать потерю this из окружающего контекста


let	one = {}     //переменнная с блочной видимостью. еще отличается от var тем, что нельзя ее назначить повторно.
const one = {}	 //то же, что let, только one всегда будет ссылаться на объект в правой части выражения


module, export & omport - // модули, экспорты и импорты


import {...} - // возможность импортировать несколько модулей сразу


{videos} вместо {videos: videos}, при условии, что имя свойствя и значения одинаковы


spread-оператор - перенос всех свойств в новый объект
export default (store = {
    videos: [],
    loading: false
}
return {
        ...store,
        loading: true
}


Встроенные промисы. Принимает два состояния - resolve (успех) и reject (ошибка)
getOneUser: function () {
        return new Promise(function (resolve, reject) {
            axios.get('https://url').then(function (data) {
                resolve(data);
            })
        })
}


Новые методы массивов: .map(), .filter()



super()   -  // используется для вызова функций, принадлежащих родителю объекта.