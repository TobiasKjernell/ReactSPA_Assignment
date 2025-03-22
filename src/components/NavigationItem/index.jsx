import styles from './navItem.module.css'
const NavigationItem = ({ category, onCurrentPage, currentPage }) => {
    
    return <div className={`${styles.navItem} ${styles[category === currentPage ? "active" : ""]}`} 
    onClick={() => onCurrentPage(category === 'home' ? null : category)}>{category}</div>
}
export default NavigationItem;