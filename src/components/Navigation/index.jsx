import { itemsCategory } from '../../data/data';
import NavigationItem from '../NavigationItem';
import styles from './navigation.module.css'

const Navigation = ({onCurrentPage, currentPage}) => {

    return (
        <nav className={styles.container}>
            <NavigationItem category={'all items'} onCurrentPage={onCurrentPage} currentPage={currentPage} />
          {itemsCategory.map((category, index) => <NavigationItem  key={index} category={category} onCurrentPage={onCurrentPage} currentPage={currentPage} />)}
        </nav>
    )
}

export default Navigation;