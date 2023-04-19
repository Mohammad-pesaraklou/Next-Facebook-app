// components
import Navbar from './Navbar';
// style
import styles from '../../styles/Home.module.scss'


const Layout = ({ children }) => {
    return (
        <div>
            <header>
                <Navbar />
            </header>
            <main>
                {children}
            </main>
            <footer className={styles.footer}>
                Next.js Facebook Clone App | Next Project &copy;
            </footer>
        </div>
    );
};

export default Layout;