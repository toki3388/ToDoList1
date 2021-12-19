'use strict';

const todo = document.getElementById('todo'); //タスク
const deadline = document.querySelector('input[type="date"]'); //日付
const add = document.getElementById('add'); //追加ボタン
const table = document.getElementById('table'); //表

add.addEventListener('click', function(){
    const item = {};

    item.todo = todo.value; 
    item.deadline = deadline.value; 

    todo.value = '';
    deadline.value = ''; 

    console.log(item); 

　　const tr = document.createElement('tr'); 

　　for (const prop in item){                     //propはプロパティ名
        const td = document.createElement('td');
        td.textContent = item[prop]; 
        tr.appendChild(td); 
    }

    table.append(tr); 
    
});

