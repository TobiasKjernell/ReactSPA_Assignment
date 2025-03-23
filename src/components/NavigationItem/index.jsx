import styles from './navItem.module.css'
const NavigationItem = ({ category, onCurrentPage, currentPage }) => {
    return <div className={`${styles.navItem} ${styles[category === currentPage ? "active" : "unactive"]}`} 
    onClick={() => onCurrentPage(category)}>{category}</div>
}
export default NavigationItem;