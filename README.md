# Описание:
Программа построена по стандартному шаблону простых сайтов (html, css) и работает на чистом *JavaScript*. Введенный текст проходит фильтрацию (только английский алфавит), после чего выводится соответствующий результат, как показано на скриншоте:
![Пример](example.jpg "Пример")

# Открытие и использование:
* Необходимо открыть файл ___index.html___, чтобы запустить программу. Откроется бразуер, где в новой вкладке будет находиться интерфейс программы, показанный на скриншоте выше. 
*желательно открывать через браузер Google Chrome либо Yandex*

* Перед вами весь доступный функционал, под строчкой "Введите текст:" в форме ввода на центральной панельке введите желаемый текст, чтобы зашифровать его; ниже, под строчкой "Результат:", появится необходимый шифр. 
* На правой панельке находится управление шифрованием: под строчкой "Сейчас активна:" размещена кнопка переключения между шифровкой и расшифровкой кода, поставленный режим будет автоматически высвечиваться на этой же кнопке. Ниже, под строчкой "Количество сдвигов:", можно ввести в форму ввода необходимое количество сдвигов.

# Среда программирования: 
Программа построена на чистом JavaScript с использованием разметки html и стилей css. Открывать можно в любом удобном редакторе, который поддерживает данные форматы файлов, для примера, *Visual Code Studio*, *Notepad++* или *блокнот*. Весь пользовательский интерфейс представлен в файле index.html, через него и осуществляется управление программой. Вся введенная информация берётся автоматически с интерфейса с помощью js/main.js, проходит проверку на наличие ошибок через псевдо-класс js/Error.js (в случае нахождения ошибок, соответствующий комментарий выводится с правой стороны экрана, под блоком управления), после чего информация обрабатывается через псевдо-класс в файле js/Caesar/Cipher.js, который содержит 2 функции для шифровки и расшифровки данных. Результат обработки поступает в main.js. В свою очередь main.js реактивным образом отображает информацию в интерфейсе пользователя.
