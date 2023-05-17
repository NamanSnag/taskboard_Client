import React from 'react'

import './style.scss'
import { Draggable } from 'react-beautiful-dnd'

const Task = ({task, index}) => {
  console.log(task)

  return (
    <Draggable draggableId={task._id} index={index}>
    {(provided) => (
      <div
        className='task'
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref={provided.innerRef} 
      >
        <div className='task__list'>
          <input type='checkbox' />
          <div className='list__title'>
            {task.title}
          </div>
        </div>
      </div>
    )}
  </Draggable>
  )
}

export default Task
