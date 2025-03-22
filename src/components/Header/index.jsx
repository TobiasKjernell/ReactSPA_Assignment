import Logo from '../Logo';
import Navigation from '../Navigation';
import styles from './header.module.css';

const Header = ({onCurrentPage, currentPage}) => {
    return (
        <header className={styles.header}>
            <Logo />
            <h1 className={styles.title}>Dungeon Item Bank</h1>
            <Navigation onCurrentPage={onCurrentPage} currentPage={currentPage} />
        </header>
    )
}

export default Header;