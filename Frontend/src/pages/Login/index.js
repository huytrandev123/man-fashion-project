import { useEffect, useState } from 'react';
import styles from './Login.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import LoginValidate from './LoginValidate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import Button from '../../components/Button';
import axios from 'axios';

const cx = classNames.bind(styles);

const accountsAPI = 'http://localhost:8000/users';

// function Login() {
//     const navigate = useNavigate();
//     const [loginAccount, setLoginAccount] = useState('');
//     const [password, setPassword] = useState('');
//     const [accounts, setAccounts] = useState([]);
//     // console.log(accounts);

//     const handleLogin = () => {

//     };

//     const handleSubmit = () => {
//         {
//             accounts.map((account, index) => {
//                 if (loginAccount === account.user_name && password === account.password) {
//                     alert('Tài khoản chính xác');
//                     navigate('/');
//                 } else {
//                     alert ('Tài khoản không đúng')
//                     loginAccount('')
//                     password('')

//                 }
//             });
//         }
//     }

//     useEffect(() => {
//         getAccounts((acc) => setAccounts(acc));
//     }, []);

//     const getAccounts = (callback) => {
//         fetch(accountsAPI)
//             .then((res) => res.json()) // API chạy xong
//             .then(callback); // mới gọi tới callback và lấy ra từng account
//     };
//     return (
//         <div className={cx('wrapper')}>
//             <h3 className={cx('wrapper-title')}>Đăng nhập</h3>
//             <p className={cx('wrapper-sub')}>
//                 Nếu đã từng mua hàng trên Website trước đây, bạn có thể dùng tính năng
//                 <Link to="/forget_password">
//                     <span> "Lấy mật khẩu" </span>
//                 </Link>
//                 để có thể truy cập vào tài khoản bằng email nhé.
//             </p>

//             <div className={cx('form-field')}>
//                 <form onSubmit={handleSubmit}>
//                     <input
//                         className={cx('form-input')}
//                         placeholder="Tên đăng nhập của bạn"
//                         onChange={(e) => setLoginAccount(e.target.value)}
//                         value={loginAccount}
//                         name='email'
//                         required
//                     />

//                     <input
//                         className={cx('form-input')}
//                         type="password"
//                         placeholder="Mật khẩu..."
//                         onChange={(e) => setPassword(e.target.value)}
//                         value={password}
//                         name='password'
//                         required

//                     />
//                     <button className={cx('form-input__login')} onClick={handleLogin}>
//                         Đăng nhập
//                     </button>
//                     <hr />

//                     <button className={cx('form-input__login--facebook')}>Đăng nhập với Facebook</button>

//                     <button className={cx('form-input__login--google')}>Đăng nhập với Google</button>
//                     <div className={cx('form-sub')}>
//                         <Link to="/register">
//                             <p>Đăng ký tài khoản mới?</p>
//                         </Link>
//                         <Link to="/forget_password">
//                             <p>Quên mật khẩu</p>
//                         </Link>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default Login;

function Login() {
    const [values, setValues] = useState({
        user_account: '',
        password: '',
    });
    // console.log(values.user_account);

    const navigate = useNavigate();

    // Cookies
    axios.defaults.withCredentials = true;

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post('http://localhost:8000/login', values)
            // .then((res) => console.log(res))
            // .then((err) => console.log(err));

            .then((res) => {
                if (res.data.Status == 'SUCCESS') {
                        navigate('/');
                    
                } else {
                    alert(res.data.Error);
                }
            });
    };

    return (
        <section className={cx('wrapper')}>
            <div className={cx('form-box')}>
                <div className={cx('form-value')}>
                    <form onSubmit={handleSubmit}>
                        <h2 className={cx('form-title')}>Đăng nhập</h2>
                        <div className={cx('inputbox')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faUser} />
                            <input
                                type="text"
                                name="user_account"
                                required
                                onChange={(e) => setValues({ ...values, user_account: e.target.value })}
                            />
                            <label className={cx('title')}>Tên đăng nhập</label>
                        </div>

                        <div className={cx('inputbox')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faLock} />
                            <input
                                type="password"
                                name="password"
                                required
                                onChange={(e) => setValues({ ...values, password: e.target.value })}
                            />
                            <label className={cx('title')}>Mật khẩu</label>
                        </div>

                        <div className={cx('remember-forget')}>
                            {/* <label>
                                <input type="checkbox" />
                                <span className={cx('remember')}>Ghi nhớ tôi?</span>
                            </label> */}
                            <Link to="/">Trở về trang chủ</Link>

                            <Link to="/forget_password" className={cx('forget-password')}>
                                Quên mật khẩu
                            </Link>
                        </div>

                        <Button primary type="submit" className={cx('btn')}>
                            Đăng nhập
                        </Button>
                        <div className={cx('register')}>
                            <label>Không có tài khoản? </label>
                            <Link to="/register" className={cx('register_btn')}>
                                Tạo tài khoản
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Login;
