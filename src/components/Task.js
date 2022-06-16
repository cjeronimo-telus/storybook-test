import React from 'react';
import PropTypes from 'prop-types';

const Task = ({ task: { id, title, state }, onArchiveTask, onPinTask }) => (
  <li className={`list-item ${state}`}>
    <label className='checkbox'>
      <input
        type='checkbox'
        defaultChecked={state === 'TASK_ARCHIVED'}
        disabled={true}
        name='checked'
      />
      <span
        className='checkbox-custom'
        onClick={() => onArchiveTask(id)}
        id={`archiveTask-${id}`}
        aria-label={`archiveTask-${id}`}
      />
    </label>
    <div className='title'>
      <input
        type='text'
        value={title}
        readOnly={true}
        placeholder='Input title'
      />
    </div>

    <div className='actions' onClick={(event) => event.stopPropagation()}>
      {state !== 'TASK_ARCHIVED' && (
        <span onClick={() => onPinTask(id)}>
          <span
            className={`icon-star`}
            id={`pinTask-${id}`}
            aria-label={`pinTask-${id}`}
          />
        </span>
      )}
    </div>
  </li>
);

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired
  }).isRequired,
  onArchiveTask: PropTypes.func,
  onPinTask: PropTypes.func
}

export default Task;