'use strict'

const passName = 'hiden pass';
const timer = 5;
let passwordLength = 11;//назначается длина пароля 12!

document.querySelector('.generation').addEventListener('click', function() {

        document.querySelector('.timer').textContent = timer;//назначает нальный отсчет "5"

          let secs = 5;
          setInterval(tick,1000)
          function tick(){ //обратный остчет
            document.querySelector('.timer').textContent = (--secs);//отнимает по 1 секунде и назначет это значение .timer
            if (secs <= 0) {
              document.querySelector('.timer').textContent = '...';//если значение - 0 то возвращаем "..." .timer
            }
          };

        function clear() { //скрывает результат в .password через 5 сек. 
            document.querySelector('.password').textContent = passName;
          }
          setTimeout(clear, 5000);//задержка перед завершение 5 сек

          let chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";//все значения для пароля
          let password = ""; //сюда помещается сгенерированный пароль
 
          for (let i = 0; i <= passwordLength; i++) {//
            let randomNumber = Math.floor(Math.random() * chars.length);//случайное значение множим на число значений в chars
            password += chars.substring(randomNumber, randomNumber +1);
            //^назначает и прибавляет по случайному сиволу за каждую итерацию к переменной password
            //^значение между randomNumber и randomNumber +1 (т.е одно значение напрю между 3 и 4 - это 3 (4-уже не в счет))
          }
        document.querySelector('.password').textContent = password;//отправляем готовый пароль в .password
});