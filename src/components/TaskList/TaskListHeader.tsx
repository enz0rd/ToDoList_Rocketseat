import styles from "./TaskList.module.css";

interface TaskListProps {
  tasks: number;
  doneTasks: number;
  children: React.ReactNode;
}

export function TaskListHeader({ tasks, doneTasks, children }: TaskListProps) {

  return (
    <main className={styles.container}>
      <div className={styles.indicators}>
        <div className={styles.created}>
          <p>Tarefas Criadas</p>
          <span>{tasks}</span>
        </div>
        <div className={styles.done}>
          <p>Concluídas</p>
          <span>{doneTasks}</span>
        </div>
      </div>
      {children}
    </main>
  );
}
