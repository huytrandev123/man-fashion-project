import styles from './Cart.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Cart({data}) {
    console.log(data); 
    
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('inner-product')}>
                    <ul>
                        <li>Sản phẩm</li>
                        <li>Giá</li>
                        <li>Số lượng </li>
                        <li>Tổng cộng </li>
                    </ul>

                    <ul className={cx('inner-product-list')}>
                        <li>
                            <img src="https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/July2023/HN-TU_HAO-3.jpg" />
                            <div className={cx('title')}>
                                <h4>Áo thun nam Cotton Coolmate Basics 200gsm</h4>
                            </div>
                        </li>
                        <li>149.000đ</li>
                        <li>
                            <input type="number" min={1} max={99} />
                        </li>
                        <li className={cx('inner-product__price')}>149.000đ</li>
                    </ul>

                    <ul className={cx('inner-product-list')} style={{ marginTop: '100px' }}>
                        <li>
                            <img src="https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/July2023/HN-TU_HAO-3.jpg" />
                            <div className={cx('title')}>
                                <h4>Áo thun nam Cotton Coolmate Basics 200gsm</h4>
                            </div>
                        </li>
                        <li>149.000đ</li>
                        <li>
                            <input type="number" min={1} max={99} />
                        </li>
                        <li className={cx('inner-product__price')}>149.000đ</li>
                    </ul>

                    <ul className={cx('inner-product-list')} style={{ marginTop: '100px' }}>
                        <li>
                            <img src="https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/July2023/HN-TU_HAO-3.jpg" />
                            <div className={cx('title')}>
                                <h4>Áo thun nam Cotton Coolmate Basics 200gsm</h4>
                            </div>
                        </li>
                        <li>149.000đ</li>
                        <li>
                            <input type="number" min={1} max={99} />
                        </li>
                        <li className={cx('inner-product__price')}>149.000đ</li>
                    </ul>

                    <ul className={cx('inner-product-list')} style={{ marginTop: '100px' }}>
                        <li>
                            <img src="https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/July2023/HN-TU_HAO-3.jpg" />
                            <div className={cx('title')}>
                                <h4>Áo thun nam Cotton Coolmate Basics 200gsm</h4>
                            </div>
                        </li>
                        <li>149.000đ</li>
                        <li>
                            <input type="number" min={1} max={99} />
                        </li>
                        <li className={cx('inner-product__price')}>149.000đ</li>
                    </ul>
                </div>
                <div className={cx('inner-total')}>
                    <hr />
                    <p>
                        Tạm tính:
                        <span>447.000</span>
                    </p>

                    <p>
                        Phí giao hàng:
                        <span>30.000</span>
                    </p>

                    <hr style={{ border: '1px solid #ccc', marginTop: '50px' }} />

                    <p className={cx('total')}>
                        Tổng cộng
                        <span>477.000</span>
                    </p>

                    <Link to="/deliverInfo">
                        <button className={cx('submit')} type="submit">
                            thanh toán ngay
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Cart;
