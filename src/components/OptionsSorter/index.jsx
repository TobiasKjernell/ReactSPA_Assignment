import styles from './optionsSorter.module.css'

const OptionsSorter = ({ sortBy, onSortBy, showPrefixText = false }) => {
    return (
        <div className={styles.container}>
            {showPrefixText && <p>Filter:</p>}
            <div className={styles.actions}>
                <select className={styles.selection} value={sortBy} onChange={e => onSortBy(e.target.value)}>
                    <option value='none'>None</option>
                    <option value='name'>Sort by Name</option>
                    <option value='rare'>Sort by Rarity</option>
                </select>
            </div>
        </div>
    )
}

export default OptionsSorter;
