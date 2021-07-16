import "./login-page.scss";

import LogoFluid from "../../components/LogoFluid";

export default function LoginPage() {

    return (
        <section className="login-section">
            <LogoFluid threshold={ 12 } sideHeadingTitle={ 'Đăng nhập' } />
            <div className="container">
                <div className="centered-box">
                    <div className="heading">
                        <h2 className="title">Đăng nhập</h2>
                    </div>
                    <div className="form-login">
                        <form className="form">
                            <div className="form-control-wrap">
                                <input type="text" className="form-control" placeholder="Email của bạn" />
                            </div>
                            <div className="form-control-wrap">
                                <input type="text" className="form-control" placeholder="Mật khẩu" />
                            </div>
                            <div className="form-control-wrap">
                                <input type="submit" className="btn btn-login" value="Đăng nhập" />
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
                            <button className="btn btn-register">
                                <img src="assets/images/facebook-logo.png" className="img-logo" alt="facebook" />
                                Đăng nhập bằng Facebook
                            </button>
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
                            <button className="btn btn-register">
                                Đăng ký một tài khoản
                            </button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    );
}