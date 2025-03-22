import ItemWithPicture from '../ItemWithPicture';
import styles from './mainContent.module.css';
import OptionsSorter from '../OptionsSorter';

const MainContent = ({ items, currentPage, onSortBy, sortBy }) => {

    let sortedItems;
    if (sortBy === 'none') sortedItems = items;
    if (sortBy === 'name') sortedItems = items.toSorted((a, b) => a.name.localeCompare(b.name));
    if (sortBy === 'rare') sortedItems = items.toSorted((a, b) => a.rare.localeCompare(b.rare));

    return (
        <>
            <h2 className={styles.pageTitle}>{currentPage ? currentPage : 'All items'}</h2>
            <OptionsSorter sortBy={sortBy} onSortBy={onSortBy} showPrefixText={true} />

            <div className={styles.container}>
                {sortedItems.map((item, index) => <ItemWithPicture {...item} key={index} />)}
            </div>
        </>
    )
}

export default MainContent;