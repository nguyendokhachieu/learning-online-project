import "./login-page.scss";

import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

import FacebookLogin from 'react-facebook-login';
import { useScrollToTop } from "../../hooks/useScrollToTop";

import { actLoginAsync } from "../../store/users/actions";
import { actShowNotificationCard } from "../../store/modals/actions";

import { checkEmail } from "../../utils/checkEmail";

import LogoFluid from "../../components/LogoFluid";

export default function LoginPage() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const dispatch = useDispatch();
    const history = useHistory();
    const { scrollToTop } = useScrollToTop();

    const { accessToken } = useSelector(state => state.users.currentUser);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [facebookID, setFacebookID] = useState('null'); 

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    function responseFacebook(response) {
        if (response && response.email) {
            setEmail(response.email);
            setFacebookID(response.userID || response.id || 'null');
        }
    } 

    function login(e) {
        e && e.preventDefault();

        if (loading) return;

        if (facebookID === 'null') {
            if (!checkEmail(email)) {
                setError('Email không hợp lệ');
                setEmail('');
                emailRef.current && emailRef.current.focus();
                return;
            }

            if (password.length <= 7) {
                setError('Password không hợp lệ');
                setPassword('');
                passwordRef.current && passwordRef.current.focus();
                return;
            }
        }

        setError('');
        setEmail('');
        setPassword('');

        setLoading(true);

        dispatch(actLoginAsync({
            email,
            password,
            facebookID,
        })).then(response => {
            setLoading(false);

            if (response.ok) {
                history.push('/');
                dispatch(actShowNotificationCard({
                    content: 'Bạn đã đăng nhập',
                    link: '',
                }))
                return;
            }

            setError(response.message);
            emailRef.current && emailRef.current.focus();
        })
    }

    useEffect(() => {
        facebookID !== 'null' && login(null);
    }, [facebookID, login]);

    useEffect(() => {
        scrollToTop();
    }, [scrollToTop])

    if (accessToken) {
        history.push('/');
        dispatch(actShowNotificationCard({
            content: 'Bạn đã đăng nhập',
            link: '',
        }))

        return null;
    }

    return (
        <section className="login-section">
            <LogoFluid threshold={ 12 } sideHeadingTitle={ 'Đăng nhập' } />
            <div className="container">
                <div className="centered-box">
                    <div className="heading">
                        <h2 className="title">Đăng nhập</h2>
                    </div>
                    <div className={ error ? "error-box active animate" : "error-box" }>
                        <div className="error-text">
                            <i className="fas fa-exclamation-circle icon"></i>
                            <span className="text">{ error }</span>
                        </div>
                    </div>
                    <div className="form-login">
                        <form className="form" onSubmit={ login }>
                            <div className="form-control-wrap">
                                <input type="email" ref={ emailRef } onChange={ e => setEmail(e.target.value) } value={ email } className="form-control" placeholder="Email của bạn" />
                            </div>
                            <div className="form-control-wrap">
                                <input type="text" ref={ passwordRef } onChange={ e => setPassword(e.target.value) } value={ password } className="form-control" placeholder="Mật khẩu" />
                            </div>
                            <div className="form-control-wrap">
                                <button 
                                    type="submit" 
                                    className={ loading ? "btn btn-login disabled" : "btn btn-login" }
                                >
                                    { loading ? <i className="fas fa-circle-notch icon fa-spin"></i> : 'Đăng nhập' }
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="login-options">
                        <div className="forgot-password">
                            <p className="para">Bạn quên mật khẩu?</p>
                            <p className="para"><a href="/" className="link">Nhấn vào đây để khôi phục</a></p>
                        </div>
                    </div>
                    <div className="divider">
                        <span className="text">HOẶC</span>
                    </div>
                    <div className="login-options">
                        <div className="btn-fluid">
                            <div className="btn btn-register">
                                <img src="assets/images/facebook-logo.png" className="img-logo" alt="facebook" />
                                Đăng nhập bằng Facebook
                                <FacebookLogin
                                    cssClass="facebook-login-button hidden"
                                    appId="517141419502868"
                                    autoLoad={ false }
                                    fields="name,email,picture"
                                    callback={ responseFacebook } 
                                />
                            </div>
                        </div>
                        <div className="btn-fluid">
                            <button className="btn btn-register">
                                <img src="assets/images/google-logo.png" className="img-logo" alt="google" />
                                Đăng nhập bằng Google
                            </button>
                        </div>
                    </div>
                    <div className="divider">
                        <span className="text">Bạn chưa có tài khoản ?</span>
                    </div>
                    <div className="login-options">
                        <div className="btn-fluid">
                            <Link to="/register" className="btn btn-register">
                                Đăng ký một tài khoản
                            </Link>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    );
}