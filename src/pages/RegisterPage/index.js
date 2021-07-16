import "./register-page.scss";

import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

import FacebookLogin from 'react-facebook-login';

import { actRegisterAsync } from "../../store/users/actions";
import { actShowNotificationCard } from "../../store/modals/actions";

import { checkFullname } from "../../utils/checkFullname";
import { checkPassword } from "../../utils/checkPassword";
import { checkEmail } from "../../utils/checkEmail";

import LogoFluid from "../../components/LogoFluid";

export default function RegisterPage() {
    const fullnameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const dispatch = useDispatch();
    const history = useHistory();

    const { accessToken } = useSelector(state => state.users.currentUser);

    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [avatar, setAvatar] = useState('null');
    const [facebookID, setFacebookID] = useState('null');

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
 
    function responseFacebook(response) {
        if (response && response.email) {
            setFullname(response.name);
            setEmail(response.email);
            setAvatar(response.picture.data.url || 'null');
            setFacebookID(response.userID || response.id || 'null');
        }
    } 

    function register(e) {
        e && e.preventDefault();

        if (loading) return;

        if (!checkFullname(fullname)) {
            setError('Họ và tên không hợp lệ');
            setFullname('');
            fullnameRef.current && fullnameRef.current.focus();
            return;
        }

        if (!checkEmail(email)) {
            setError('Email không hợp lệ');
            setEmail('');
            emailRef.current && emailRef.current.focus();
            return;
        }

        if (facebookID === 'null') {
            if (!checkPassword(password, rePassword)) {
                setError('Password không hợp lệ');
                setPassword('')
                setRePassword('');
                passwordRef.current && passwordRef.current.focus();
                return;
            }
        }

        setError('');
        setFullname('');
        setEmail('');
        setPassword('');
        setRePassword('');

        setLoading(true);
        dispatch(actRegisterAsync({
            fullname,
            email,
            password,
            rePassword,
            avatar,
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
            fullnameRef.current && fullnameRef.current.focus();
        })
    }

    useEffect(() => {
        facebookID !== 'null' && register(null);
    }, [facebookID]);

    if (accessToken) {
        history.push('/');
        dispatch(actShowNotificationCard({
            content: 'Bạn đã đăng nhập',
            link: '',
        }))

        return null;
    }

    return (
        <section className="register-section">
            <LogoFluid />
            <div className="container">
                <div className="centered-box">
                    <div className="heading">
                        <h2 className="title">Đăng ký</h2>
                    </div>
                    <div className={ error ? "error-box active animate" : "error-box" }>
                        <div className="error-text">
                            <i className="fas fa-exclamation-circle icon"></i>
                            <span className="text">{ error }</span>
                        </div>
                    </div>
                    <div className="form-register">
                        <form className="form" onSubmit={ register }>
                            <div className="form-control-wrap">
                                <input type="text" ref={ fullnameRef } onChange={ e => setFullname(e.target.value) } value={ fullname } className="form-control" placeholder="Họ và tên" />
                            </div>
                            <div className="form-control-wrap">
                                <input type="email" ref={ emailRef } onChange={ e => setEmail(e.target.value) } value={ email } className="form-control" placeholder="Email của bạn" />
                            </div>
                            <div className="form-control-wrap">
                                <input type="text" ref={ passwordRef } onChange={ e => setPassword(e.target.value) } value={ password } className="form-control" placeholder="Mật khẩu" />
                            </div>
                            <div className="form-control-wrap">
                                <input type="text" onChange={ e => setRePassword(e.target.value) } value={ rePassword } className="form-control" placeholder="Nhập lại mật khẩu" />
                            </div>
                            <div className="form-control-wrap">
                                <button 
                                    type="submit" 
                                    className={ loading ? "btn btn-login disabled" : "btn btn-login" }
                                >
                                    { loading ? <i className="fas fa-circle-notch icon fa-spin"></i> : 'Đăng ký' }
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="divider">
                        <span className="text">Bạn đã có tài khoản ?</span>
                    </div>
                    <div className="register-options">
                        <div className="btn-fluid">
                            <Link to="/login" className="btn btn-register">
                                Đăng nhập
                            </Link>
                        </div>
                    </div>
                    <div className="divider">
                        <span className="text">Đăng ký bằng tài khoản sẵn có</span>
                    </div>
                    <div className="register-options">
                        <div className="tips">
                            <i className="fas fa-lightbulb icon"></i>
                            <p className="paragraph">Đăng ký nhanh hơn chỉ với vài thao tác bằng tài khoản Facebook hoặc Google của bạn</p>
                        </div>
                        <div className="btn-fluid">
                            <div className="btn btn-register">
                                <img src="assets/images/facebook-logo.png" className="img-logo" alt="facebook" />
                                Đăng ký bằng Facebook
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
                                Đăng ký bằng Google
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}