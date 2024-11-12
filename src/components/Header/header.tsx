import rocket from '../../assets/rocket.svg'
import styles from './header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <img className={styles.rocket} src={rocket} width={22} height={36} />
      <h1 className={styles.title}>
        <strong className={styles.to}>to</strong>
        <strong className={styles.do}>do</strong>
      </h1>
    </header>
  );
}
