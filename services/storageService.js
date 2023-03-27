export const setTasks = (data) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (process.client) localStorage.setItem('tasks', data)
      resolve()
    }, 250)
  })
}

export const getTasks = () =>
  new Promise((resolve, reject) => {
    if (process.client) {
      setTimeout(() => {
        const tasks = localStorage.getItem('tasks')
        resolve(tasks ? JSON.parse(tasks) : [])
      }, 250)
    }
    reject('Server')
  })
