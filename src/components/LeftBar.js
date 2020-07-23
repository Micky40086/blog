import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import Avatar from '@material-ui/core/Avatar';
import { Instagram, GitHub } from '@material-ui/icons';

import styles from './LeftBar.scss'

export default function LeftBar({}) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  // const container = window !== undefined ? () => window().document.body : undefined;
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className={styles["drawer-container"]}>
      <h1>Mickey's Blog</h1>
      <Avatar className={styles.avatar} alt="Mickey" src="/Tumurin.png" />
      <p>Hi, my name is Mickey. A fullstack developer.</p>
      <div className={styles["social-btn-group"]}>
        <div className={styles["social-btn"]}>
          <Instagram />
        </div>
        <div className={styles["social-btn"]}>
          <GitHub />
        </div>
      </div>
    </div>
  );

  return (
    <nav aria-label="mailbox folders">
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Hidden smUp implementation="css">
        <Drawer
          // container={container}
          variant="temporary"
          anchor={'left'}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          // classes={{
          //   paper: classes.drawerPaper,
          // }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          // classes={{
          //   paper: classes.drawerPaper,
          // }}
          variant="permanent"
          open
        >
          {drawer}
        </Drawer>
      </Hidden>
    </nav>
  )
}