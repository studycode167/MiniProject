import { reactive, toRefs } from 'vue'

export const useStorage = () => {
  const KEY = 'my-todo-list'
  const storage_obj = reactive({ storage_id: 0 })
  const loadTodos = (initTodos) => {
    let temp_todos = JSON.parse(localStorage.getItem(KEY) || '[]')
    temp_todos.forEach((todo, idx) => {
      todo.id = idx
    })
    storage_obj.storage_id = temp_todos.length
    initTodos(temp_todos)
  }
  const saveTodos = (todos) => {
    localStorage.setItem(KEY, JSON.stringify(todos.value))
  }
  return {
    ...toRefs(storage_obj),
    loadTodos,
    saveTodos,
  }
}

/*
usestorage 함수
KEY : localstorage에서 데이터를 저장할 KEY
storage_obj : 일정리스트를 가질 todo속성과 신규id를 책정할 수 있는 storage_id 속성을 가진 객체
loadTodos : localStorage로 부터 데이터를 불러오는 함수
saveTodo : loclaStorage로 데이터를 저장하는 함수

*/