const todo = document.getElementById('todo');   //タスク
const submitTime = document.getElementById('submitDate');  //日付
const add = document.getElementById('add'); //追加ボタン
const taskList = document.getElementById('taskList');
//const favorite = document.getElementById('favorite');

let list = [];
const storage = localStorage;

document.addEventListener('DOMContentLoaded', () => {
  const json = storage.TodoList;
  if (json == undefined) {
    return;
  }
  list = JSON.parse(json);      //json = storage.TodoList をjavascriptオブジェクトに変換
  for (const item of list) {
    addItem(item);
  }
});

const addItem = (item) => {

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

    remove.addEventListener('click', (index) => {
        removeTask(remove);
        list.splice(index,1);       //リスト内の[1]の位置にある要素を一つ削除
        storage.TodoList = JSON.stringify(list);   //listをjson文字列に変換
    });

    const removeTask = (removal) => {
        const chosenTask = removal.closest('label');
        taskList.removeChild(chosenTask);
    };
};

add.addEventListener('click', () => {
    const item = {};

    if(todo.value.trim() !== ''){ //trim()は前後の空白を示す
        item.todo = todo.value;
        todo.value = ''; //タスクを追加すると同時にラベル内を空にする

        /*const remove = document.createElement('button');
        remove.id = 'delete';*/

        addItem(item);

        list.push(item);
        storage.TodoList = JSON.stringify(list);

        

        /*for (const prop in item){                     //propはプロパティ名
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
        }*?

        /*$(function () {
            $('#checkBox').on('change', function(){
                window.alert('お気に入りに追加されました');
                relocateTask();
            });
        });

        const relocateTask = (changeLabel) => {
            const selectTask = changeLabel.closest('label');
            favorite.appendChild(selectTask);
        };*/

        /*remove.addEventListener('click', () => {
            removeTask(remove);
        });

        const removeTask = (removal) => {
            const chosenTask = removal.closest('label');
            taskList.removeChild(chosenTask);
        };*/

    }else{
        window.alert('タスクを入力してください');
        todo.value = '';
    }
});