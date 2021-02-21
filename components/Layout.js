import styles from '../styles/Layout.module.css';
import Sidebar from './sidebar/Sidebar';
import Trending from './Trending';
import Feed from './Feed';

const Layout = ({children}) => {
  return (
    <>
      <div className={styles.container}>
        <Sidebar />
        <Feed />
        <Trending />
      </div>
    </>
  )
}

export default Layout