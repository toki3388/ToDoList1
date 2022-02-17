const todo = document.getElementById('todo');   //タスク
const submitTime = document.getElementById('submitDate');  //日付
const add = document.getElementById('add'); //追加ボタン
const taskList = document.getElementById('taskList');

add.addEventListener('click', () => {
    const item = {};

    if(todo.value.trim() !== ''){ //trim()は前後の空白を示す
        item.todo = todo.value;
        todo.value = ''; //タスクを追加すると同時にラベル内を空にする

        const remove = document.createElement('button');
        remove.id = 'delete'; //removeのid名を作成

        for (const prop in item){                     //propはプロパティ名
            const label = document.createElement('label');
            label.id = 'labelElement';
            const input = document.createElement('input');
            input.type = 'checkbox';
            input.id = 'checkBox';
            label.textContent = item[prop]; 
            remove.textContent = '削除';
            label.appendChild(input);
            label.appendChild(remove);
            taskList.appendChild(label);
        }

        remove.addEventListener('click', () => {
            removeTask(remove);
        });

        const removeTask = (remove) => {
            const chosenTask = remove.closest('label');
            taskList.removeChild(chosenTask);
        };
    }else{
        window.alert('タスクを入力してください')
    }
});