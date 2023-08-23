import classNames from 'classnames/bind';
import styles from './Pants.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PantsDetail from './PantsDetail';

const cx = classNames.bind(styles);

function Pants() {
    const [pants, setPants] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        fetch('http://localhost:8000/pants')
            .then((res) => res.json())
            .then((pants) => setPants(pants));
    }, []);

    const handleDetail = (id) => {
        navigate('/product/pants/detail/' + id);
    };

    return (
        <div className={cx('wrapper__total')}>
            <h1>Quần short nam</h1>
            <div className={cx('wrapper')}>
                {/* <h1 className='title'>BestSeller</h1> */}
                <div className={cx('inner')}>
                    {pants.map((pant) => (
                        <div className={cx('inner__item')} key={pant.id}>
                            <img
                                src={pant.img}
                                className={cx('inner__item-img')}
                                onClick={() => handleDetail(pant.id)}
                            />
                            <div className={cx('inner__item-content')}>
                                <p className={cx('inner__item-content-title')}>{pant.name}</p>
                                <div className={cx('inner__item-content--inner')}>
                                    <p className={cx('inner__item-content-price')}>
                                        {pant.price}.000
                                        {/* <span>130 lượt mua</span> */}
                                    </p>
                                    <span className={cx('inner__item-content-buy')}>
                                        Đã bán:
                                        {pant.buy} cái
                                        {/* <span>130 lượt mua</span> */}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Pants;
