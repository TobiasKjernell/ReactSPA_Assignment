import { getImageUrl } from '../../utils/functions';
import styles from './itemWithPicture.module.css'

const ItemWithPicture = ({ name = "MountainHauberk", description = "description placeholder", rare = 'uncommon', image = "" }) => {
    return (
        <div className={styles.container}>
            <p className={styles.rare} style={{ color: `${rare === 'set' ? 'green' : rare === 'epic' ? '#8c0099' : rare === 'legendary' ? 'red' :  rare === 'rare' ? '#1714b9' : rare === 'uncommon' && '#fff'}` }} >{rare}</p>
            <div className={styles.infoWrapper}>
                <div className={styles.imageContainer}>
                    <img className={styles.image} src={`${getImageUrl(image + ".png")}`} alt="item logo"
                        style={{ background: `url(${getImageUrl(`${rare}.png`)})` }} />
                </div>

                <div className={styles.infoContainer}>
                    <h2 className={styles.itemTitle}>{name}</h2>
                    <p className={styles.itemDescription}>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default ItemWithPicture