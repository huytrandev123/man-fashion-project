import styles from './Slider.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Slider() {
    return <div className={cx('slider')}>
       
        <img src={" https://media.coolmate.me/cdn-cgi/image/width=1920,quality=90,format=auto/uploads/June2023/276Running-outdoor.png"} />
    </div>;
}

export default Slider;
