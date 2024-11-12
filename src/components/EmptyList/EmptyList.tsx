import styles from './EmptyList.module.css';
import { Clipboard } from 'lucide-react';

export function EmptyList() {
    return (
        <div className={styles.container}>
            <Clipboard className='clipboard' color='var(--gray-400)' size={56} />
            <h2>Você ainda não tem tarefas cadastradas</h2>
            <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
    )
}