import React from 'react'

import './style.scss'

const Task = ({task}) => {
  console.log(task)
  return (
    <div className='task'>
        <div className='task__list'>
        <input type='checkbox' />
          <div className='list__title'>
            {task.title}
          </div>
        </div>
    </div>
  )
}

export default Task
