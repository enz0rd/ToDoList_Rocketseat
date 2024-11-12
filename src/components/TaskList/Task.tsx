import { Check, Trash } from 'lucide-react';
import styles from './Task.module.css'
import { useState } from 'react';

export interface TaskType {
    id: number;
    text: string;
    isChecked: boolean;
}

interface Props {
  task: TaskType;
  removeTask: (id: number) => void;
  onChangeStatus: (id: number, isChecked: boolean) => void;
}

export function Task({ task, removeTask, onChangeStatus }: Props) {
  const [status, toggleStatus] = useState(task.isChecked);

  function handleStatusToggle() {
    const newStatus = !status;
    toggleStatus(newStatus);
    onChangeStatus(task.id, newStatus);
  }

  function handleRemove() {
    removeTask(task.id);
  }

  const checkboxCheckedClassname = status
    ? styles["checkbox-checked"]
    : styles["checkbox-unchecked"];
  const paragraphCheckedClassname = status
    ? styles["paragraph-checked"]
    : "";

  return (
    <div className={styles.container}>
      <div>
        <label htmlFor="checkbox" onClick={handleStatusToggle}>
          <input readOnly type="checkbox" checked={task.isChecked} />
          <span className={`${styles.checkbox} ${checkboxCheckedClassname}`}>
            {status && <Check size={12} />}
          </span>

          <p className={`${styles.paragraph} ${paragraphCheckedClassname}`}>
            {task.text}
          </p>
        </label>
      </div>

      <button onClick={handleRemove}>
        <Trash size={16} className={styles.trash} />
      </button>
    </div>
  );
}
