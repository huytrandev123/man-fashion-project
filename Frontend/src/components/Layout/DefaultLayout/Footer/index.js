import styles from './Footer.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('footer')}>
            <div className={cx('footer_inner')}>
                <div className={cx('footer_innner--left')}>
                    
                    <h2>COOLMATE luôn lắng nghe bạn</h2>
                    <p>
                        Chúng tôi luôn trân trọng và mong đợi nhận được mọi ý kiến đóng góp từ khách hàng để có thể nâng
                        cấp trải nghiệm dịch vụ và sản phẩm tốt hơn nữa.
                    </p>
                </div>
                <div className={cx('footer_innner--right')}>
                    <p>Địa chỉ: 165 Trần Trọng Cung, Tân Thuận Đông, Quận 7, Thành phố Hồ Chí Minh</p>
                    <p>Hotline 1900.272737 - 028.7777.2737 (8:30 - 22:00)</p>
                    <p>Email ....@gmail.com</p>
                    <a href='https://www.coolmate.me/' >https://www.coolmate.me/</a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
