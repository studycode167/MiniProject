import { inject } from 'vue'

export const useFilter = () => {
  const today = inject('today')
  const fnSort = (a, b) => {
    const a_date = Date.parse(a.date)
    const b_date = Date.parse(b.date)
    if (a_date > b_date) return 1
    else if (a_date < b_date) return 0
    else return a.id - b.id
  }

  const getPendingTodos = (todos) => {
    return todos.value
      .filter((todo) => todo.date < today && !todo.completed)
      .slice()    //정해진 구간의 배열값들을 뽑아 새로운 배열을 만듦, 만약 인자 없이 사용되면 동일한 배열의 복사본 생성
      .sort(fnSort)
  }

  const getActiveTodayTodos = (todos) => {
    return todos.value
      .filter((todo) => todo.date == today && !todo.completed)
      .slice()
      .sort(fnSort)
  }

  const getCompletedTodayTodos = (todos) => {
    return todos.value
      .filter((todo) => todo.date == today && todo.completed)
      .slice()
      .sort(fnSort)
  }

  const getAllTodayTodos = (todos) => {
    return getActiveTodayTodos(todos)
      .concat(getCompletedTodayTodos(todos))
      .slice()
      .sort(fnSort)
  }

  const getAllTodos = (todos) => {
    return todos.value.slice().sort(fnSort)
  }

  return {
    getPendingTodos,
    getActiveTodayTodos,
    getCompletedTodayTodos,
    getAllTodayTodos,
    getAllTodos,
  }
}

/*
데이터를 필터링 해서 보여줄 수 있는 방법을 filter로 정의
4개의 필터를 만들어야 함 
1. 날짜가 지났지만 완료하지 않은 일
2. 오늘 해야할 일
3. 오늘 해야할 일 중 완료한 일
4. 모든 날을 아울러 상태와 상관없는 일들
**(주의)** 최근 날짜의 데이터가 더 위에 나와야하고 같은 날이라면 뒤늦게 입력한 데이터가 더 위에 나와야 함 => sort메서드로 해결



*/
