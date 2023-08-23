import classNames from 'classnames/bind';
import styles from './Shirt.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function Shirt() {
    const [shirts, setShirts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:8000/shirts')
            .then((res) => res.json())
            .then((shirts) => setShirts(shirts));
    }, []);

    const handleDetail = (id) => {
        navigate('/product/shirt/shirt_detail/' + id);
    };

    return (
        <div className={cx('wrapper__total')}>
            <h1>Áo thun thể thao</h1>
            <div className={cx('wrapper')}>
                {/* <h1 className='title'>BestSeller</h1> */}
                <div className={cx('inner')}>
                    {shirts.map((shirt) => (
                        <div className={cx('inner__item')} key={shirt.id}>
                            <img
                                src={shirt.img}
                                className={cx('inner__item-img')}
                                onClick={() => handleDetail(shirt.id)}
                            />
                            <div className={cx('inner__item-content')}>
                                <p className={cx('inner__item-content-title')}>{shirt.name}</p>
                                <div className={cx('inner__item-content--inner')}>
                                    <p className={cx('inner__item-content-price')}>
                                        {shirt.price}.000
                                        {/* <span>130 lượt mua</span> */}
                                    </p>
                                    <span className={cx('inner__item-content-buy')}>
                                        Đã bán:
                                        {shirt.buy} cái
                                        {/* <span>130 lượt mua</span> */}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* <div className={cx('inner__item')}>
                        <img
                            src={
                                'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/June2023/Quan_lot_Gym_Powerfit-listing-26.jpg'
                            }
                            className={cx('inner__item-img')}
                        />
                        <div className={cx('inner__item-content')}>
                            <p className={cx('inner__item-content-title')}>
                                <Link to="">Áo thun gym Powerfit - Xám đậm</Link>
                            </p>
                            <p className={cx('inner__item-content-price')}>299.000</p>
                        </div>
                    </div>

                    <div className={cx('inner__item')}>
                        <img
                            src={
                                'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/June2023/Ao_thun_Cotton_Summer_Coolwaves-23-5.jpg'
                            }
                            className={cx('inner__item-img')}
                        />
                        <div className={cx('inner__item-content')}>
                            <p className={cx('inner__item-content-title')}>
                                <Link to="">Áo thun Cotton Summor Coolwaves</Link>
                            </p>
                            <p className={cx('inner__item-content-price')}>199.000</p>
                        </div>
                    </div>

                    <div className={cx('inner__item')}>
                        <img
                            src={
                                'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/April2023/10krun-front.jpg'
                            }
                            className={cx('inner__item-img')}
                        />
                        <div className={cx('inner__item-content')}>
                            <p className={cx('inner__item-content-title')}>
                                <Link to="">Áo thun chạy bộ Quick Dry in Graphic</Link>
                            </p>
                            <p className={cx('inner__item-content-price')}>129.000</p>
                        </div>
                    </div>

                    <div className={cx('inner__item')}>
                        <img
                            src={
                                'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/May2023/zzCotton_100_-_Xanh_2D_-_Front_1.jpg'
                            }
                            className={cx('inner__item-img')}
                        />
                        <div className={cx('inner__item-content')}>
                            <p className={cx('inner__item-content-title')}>
                                <Link to="">Áo thun nam Cotton Basics - Xanh đậm</Link>
                            </p>
                            <p className={cx('inner__item-content-price')}>149.000</p>
                        </div>
                    </div>

                    <div className={cx('inner__item')}>
                        <img
                            src={
                                'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/March2023/Ao_thun_chay_bo_nam_Essential_Fast__Free_Run5.jpg'
                            }
                            className={cx('inner__item-img')}
                        />
                        <div className={cx('inner__item-content')}>
                            <p className={cx('inner__item-content-title')}>
                                <Link to="">Áo thun chạy bộ nam</Link>
                            </p>
                            <p className={cx('inner__item-content-price')}>159.000</p>
                        </div>
                    </div>

                    <div className={cx('inner__item')}>
                        <img
                            src={
                                'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/May2023/sat-nach-aqua.jpg.png'
                            }
                            className={cx('inner__item-img')}
                        />
                        <div className={cx('inner__item-content')}>
                            <p className={cx('inner__item-content-title')}>
                                <Link to="">Áo sát nách thể thao Dri-Breathe</Link>
                            </p>
                            <p className={cx('inner__item-content-price')}>189.000</p>
                        </div>
                    </div>

                    <div className={cx('inner__item')}>
                        <img
                            src={
                                'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/June2023/Drop_Arm_Gym_Powerfit_Xanh_ngoc_2.jpg'
                            }
                            className={cx('inner__item-img')}
                        />
                        <div className={cx('inner__item-content')}>
                            <p className={cx('inner__item-content-title')}>
                                <Link to="">Áo Drop Arm Gym Powerfit - Xanh ngọc</Link>
                            </p>
                            <p className={cx('inner__item-content-price')}>199.000</p>
                        </div>
                    </div>

                    <div className={cx('inner__item')}>
                        <img
                            src={
                                'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/May2022/34-0.jpg'
                            }
                            className={cx('inner__item-img')}
                        />
                        <div className={cx('inner__item-content')}>
                            <p className={cx('inner__item-content-title')}>
                                <Link to="">Áo Polo ProMax-S2 thoáng khí</Link>
                            </p>
                            <p className={cx('inner__item-content-price')}>216.000</p>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default Shirt;
