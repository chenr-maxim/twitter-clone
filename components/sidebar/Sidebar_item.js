import styles from '../../styles/SidebarItem.module.css';

const SidebarItem = ({li_type}) => {
  return (
    <div className={styles.container}>
      <div className={styles.icon}></div>
      <div className={styles.link}>
        {li_type}
      </div>
    </div>
  )
}

export default SidebarItem