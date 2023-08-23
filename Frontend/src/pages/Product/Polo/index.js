import classNames from 'classnames/bind';
import styles from './Polo.module.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PoloDetail from './PoloDetail';


const cx = classNames.bind(styles);

function Polo() {
    const [polos, setPolos] = useState([]);
    const navigate = useNavigate()

    const handleDetail = (id) => {
        navigate('/product/polo/detail/' + id);
    };

    useEffect(() => {
        fetch('http://localhost:8000/polos')
            .then((res) => res.json())
            .then((polos) => setPolos(polos));
    }, []);

    return (
        <div className={cx('wrapper__total')}>
            <h1>áo polo nam & áo sơ mi nam</h1>
            <div className={cx('wrapper')}>
                {/* <h1 className='title'>BestSeller</h1> */}
                <div className={cx('inner')}>
                    {polos.map((polo) => (
                        <div className={cx('inner__item')} key={polo.id}>
                            <img
                                src={polo.img}
                                className={cx('inner__item-img')}
                                onClick={() => handleDetail(polo.id)}
                            />
                            <div className={cx('inner__item-content')}>
                                <p className={cx('inner__item-content-title')}>
                                    <Link to="" className={cx('inner__item-content-title-link')}>
                                        {polo.name}
                                    </Link>
                                </p>
                                <div className={cx('inner__item-content--inner')}>
                                    <p className={cx('inner__item-content-price')}>
                                        {polo.price}.000
                                        {/* <span>130 lượt mua</span> */}
                                    </p>
                                    <span className={cx('inner__item-content-buy')}>
                                        Đã bán:
                                        {polo.buy} cái
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

export default Polo;
