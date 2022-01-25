const todo = document.getElementById('todo');   //タスク
const deadline = document.querySelector('input[type="date"]');  //日付
const add = document.getElementById('add'); //追加ボタン
const table = document.getElementById('table'); //表

add.addEventListener('click', () => {
    const item = {};

    item.todo = todo.value; 
    item.deadline = deadline.value; 

    if(todo.value != '' && deadline.value != ''){
        item.todo = todo.value;
        item.deadline = deadline.value; 

        const tr = document.createElement('tr'); 
        const remove = document.createElement('button');
        remove.id = 'delete'; //removeのid名を作成

        for (const prop in item){                     //propはプロパティ名
            const td = document.createElement('td');
            td.textContent = item[prop]; 
            remove.textContent = '削除';
            tr.appendChild(td);
            tr.appendChild(remove); 
        }

        table.append(tr);

        tr.appendChild(remove);

        remove.addEventListener('click', () => {
            removeTask(remove);
        });

        const removeTask = (remove) => {
            const chosenTask = remove.closest('tr');
            table.removeChild(chosenTask);
        };
    }else{
        window.alert('タスクと期日を入力してください')
    }
});