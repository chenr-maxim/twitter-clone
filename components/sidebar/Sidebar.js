import styles from '../../styles/Sidebar.module.css';
import SidebarItem from './Sidebar_item';

const Sidebar = () => {

  const link_type = ['Home', 'Explore', 'Notifications', 'Messages', 'Bookmarks', 'Lists', 'Profile']

  const sidebar_tabs = link_type.map((li_type, i) => {
    return <SidebarItem key={i} li_type={li_type} />
  });

  return (
    <div className={styles.container}>
      <div className={styles.twitter_icon}>
        <h4> Twitter </h4>
      </div>
      <ul>
        {sidebar_tabs}
        {/* <li>
          Icon
        </li>
        <li>
          Home
        </li>
        <li>
          Explore
        </li>
        <li>
          Notifications
        </li>
        <li>
          Messages
        </li>
        <li>
          Bookmarks
        </li>
        <li>
          Lists
        </li>
        <li>
          Profile
        </li>
        <li>
          More
        </li> */}
      </ul>
      <div className={styles.tweet_button}>
        <h4> Tweet </h4>
      </div>
      <div className={styles.profile_container}>
        <div className={styles.profile}>
          <div className={styles.profile_picture}>

          </div>
          <div className={styles.display_name}> 
            display name
          </div>
          <div className={styles.profile_options}> 

          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar;