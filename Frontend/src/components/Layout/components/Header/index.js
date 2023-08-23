import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
// Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCartShopping,
    faCircleQuestion,
    faEarthAsia,
    faEllipsis,
    faEllipsisVertical,
    faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';

import Button from '../../../Button';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Menu from '../../../Poppers/Menu';
import DarkMode from '../../../DarkMode';
import { useEffect, useState } from 'react';
import axios from 'axios';
const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'Tiếng Việt',
        // Menu cấp 2
        children: {
            title: 'Ngôn ngữ',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'Tiếng Anh',
                },

                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },

    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Hỗ trợ và đánh giá',
        to: '/cart',
    },
];

function Header() {
    const currentUsers = false;
    const [auth, setAuth] = useState(false);
    console.log(auth);
    const [name, setName] = useState('');
    console.log(name);
    const [message, setMessage] = useState('');

    useEffect(() => {
        axios.get('http://localhost:8000').then((res) => {
            if (res.data.Status === 'SUCCESS') {
                setAuth(true);
                setName(res.data.name);
            } else {
                setMessage(res.data.Error);
            }
        });
    }, []);

    // Handle logic menu change
    const handleMenuChange = (menuItem) => {
        console.log(menuItem);
    };
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* Logo */}
                <Link to="/">
                    <img src="https://www.coolmate.me/images/logo-coolmate.svg"></img>
                </Link>
                {/* HeaderMenu */}
                <div className={cx('headerMenu')}>
                    <ul>
                        <li>
                            <Link to="/">Trang chủ</Link>
                        </li>

                        <li>
                            <Link to="/blog">Blog</Link>
                        </li>

                        <li>
                            <Link to="/product">Sản phẩm</Link>
                        </li>

                        <li>
                            <Link to="/contact">Liên hệ</Link>
                        </li>
                    </ul>
                </div>

                {/* <Button primary leftIcon={<FontAwesomeIcon className={cx('cart')} icon={faCartShopping} />}>
                    Login
                </Button> */}

                {/* {auth ? (
                    <div>
                        <h3>You are authen {name}</h3>
                        <button>Logout</button>
                    </div>
                ) : (
                    <div>
                        <h3>{message}</h3>
                        <h3>Login now</h3>
                        <button>Login</button>
                    </div>
                )} */}

                {/* user */}

                <div className={cx('icon')}>
                    {auth ? (
                        <div className={cx('icon__main')}>
                            {/* user */}
                            <Link to="/login">
                                <button className={cx('icon-btn')}>
                                    <img
                                        src="https://i.pinimg.com/564x/2c/68/78/2c687844ea0792946c292d163f1dac68.jpg"
                                        className={cx('avatar')}
                                    />
                                </button>
                            </Link>
                            {/* search */}
                            <FontAwesomeIcon className={cx('search')} icon={faMagnifyingGlass} />

                            {/* cart */}
                            <Link to="/cart">
                                {' '}
                                <FontAwesomeIcon className={cx('cart')} icon={faCartShopping} />
                            </Link>
                        </div>
                    ) : (
                        <>
                            {/* user */}
                            <Link to="/login">
                                <FontAwesomeIcon className={cx('user')} icon={faUser} />
                            </Link>

                            {/* search */}
                            <FontAwesomeIcon className={cx('search')} icon={faMagnifyingGlass} />

                            {/* cart */}
                            <Link to="/cart">
                                {' '}
                                <FontAwesomeIcon className={cx('cart')} icon={faCartShopping} />
                            </Link>

                            {/* Menu Poppers */}
                            {/* <Tippy
                                interactive
                                placement="bottom-end"
                                render={(attrs) => (
                                    <div className={cx('menu-items')} tabIndex="-1" {...attrs}>
                                        <PopperWrapper>
                                            <SearchFashionItem />
                                            <SearchFashionItem />
                                            <SearchFashionItem />
                                            <SearchFashionItem />
                                        </PopperWrapper>
                                    </div>
                                )}
                            >
                                <button className={cx('more-btn')}>
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </button>
                            </Tippy> */}

                            <Menu items={MENU_ITEMS} onChange={handleMenuChange}>
                                <button className={cx('more-btn')}>
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </button>
                            </Menu>
                            {/* Dark mode */}
                            {/* <DarkMode/> */}
                        </>
                    )}
                    {/* <DarkMode/> */}
                </div>
            </div>
        </header>
    );
}

export default Header;
