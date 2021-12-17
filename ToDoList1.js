'use strict';

const todo = document.getElementById('todo'); //入力されるタスク
const deadline = document.querySelector('input[type="date"]'); //日付の入力
const add = document.getElementById('add'); //追加ボタン
const table = document.getElementById('table'); //表

add.addEventListener('click', function(){
    const item = {}; //入力した値を格納するオブジェクト

    item.todo = todo.value; //オブジェクト名.プロパティ名
    item.deadline = deadline.value; //オブジェクト名.プロパティ名

    todo.value = ''; //フォームをリセットする
    deadline.value = ''; //フォームのリセット

    console.log(item); //サイトを右クリックして検証で確認できる

　　const tr = document.createElement('tr'); //tr(表)要素の作成

　　for (const prop in item){                     //propはプロパティ名
        const td = document.createElement('td');
        td.textContent = item[prop]; //tdの内容を[prop](プロパティ名)に入れる
        tr.appendChild(td); //td要素をtr要素に追加
    }

    table.append(tr); //tr要素をtable要素に追加

    /*if(deadline.value !=''){
        item.deadline = deadline.value;
    }else{
        item.deadline = new Date().toLocaleString()
        //window.alert('期日を入力してください');
        //return;
    }*/
});

