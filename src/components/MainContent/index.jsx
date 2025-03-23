import ItemWithPicture from '../ItemWithPicture';
import styles from './mainContent.module.css';
import OptionsSorter from '../OptionsSorter';
import { getSortedByFilter } from '../../data/data';

const MainContent = ({ items, currentPage, onSortBy, sortBy }) => {

    let sortedItems = getSortedByFilter(items, sortBy)

    return (
        <>
            <h2 className={styles.pageTitle}>{currentPage ? currentPage : 'All items'}</h2>
            <OptionsSorter sortBy={sortBy} onSortBy={onSortBy} showPrefixText={true} />

            <div className={styles.container}>
                <div className={styles.itemContainer}>
                    {sortedItems.map((item, index) => <ItemWithPicture {...item} key={index} />)}
                </div>
            </div>
        </>
    )
}

export default MainContent;