// Тестовое задание №1
const str = `
яблоки 5 штук
бананы 10 штук
помидоры 1 штука
мытая морковь 7 штук
огурцы 0 штук
`;

const newStr = str.replace(/(\d+)\s+(штука?|штук?)/g, ':$1')
                    .replace(/(\d+);?/g, '$1;')
                    .replace(/\s*:\s*/g, ':')
                    .trim()
console.log("Str by 1 regexp:" +"\n"  + newStr);
console.log("============================");

const newStr2 = newStr.match(/^.*:0;$/gm).join('\n');

console.log("Str by 2 regexp:" +"\n" + newStr2);








// Тестовое задание №2
const startHTML = `
<html>

<body>

    <div class="main">

        <div class="block delete">удалить этот блок <div>X</div></div>
        <div class="block">оставить этот блок <div>V</div></div>
        <div class="block delete">удалить этот блок</div>
        <div class="block">оставить этот блок</div>
        <div class="block delete">удалить <div>этот</div> блок </div>
        <div class="block">оставить <div>этот</div> блок</div>

    </div>

</body>

</html>
`;

const finalHTML = startHTML.replace(/(<div class="block delete">)[\s\S]*?(<\/div>)$\s*/gm, '');

console.log(finalHTML);