import { getImageUrl, getRareColor } from '../../utils/functions';
import styles from './itemWithPicture.module.css'

const ItemWithPicture = ({ name = "Name", description = "description placeholder", rare = 'uncommon', image = "" }) => {
    return (
        <div className={styles.container}>
            <p className={styles.rare} style={{ color: `${getRareColor(rare)}`}} >{rare}</p>
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