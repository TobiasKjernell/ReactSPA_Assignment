import styles from './logo.module.css';
import { getImageUrl } from '../../utils/functions';

const Logo = () => {
    return (
        <img className={styles.logo} src={`${getImageUrl('logo.png')}`} alt="site logo" />
    )
}

export default Logo;