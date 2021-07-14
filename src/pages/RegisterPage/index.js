import "./register-page.scss";

import { useScrolledPercentage } from "../../hooks/useScrolledPercentage";

export default function RegisterPage() {
    const { scrolledPercentY } = useScrolledPercentage();

    const isLogoMinimized = scrolledPercentY > 17;

    return (
        <section className="register-section">
            <div className={ isLogoMinimized ? "logo-fluid minimize" : "logo-fluid" }>
                <h1 className="title">
                    <a href="/" className="link">
                    Online Learning
                    </a>
                </h1>
                <div className="logo-float">
                    <h2 className="title">
                        <a href="/" className="link-float">
                        Online Learning
                        </a>
                        <span>Đăng ký tài khoản mới</span>
                    </h2>
                </div>
            </div>
            <div className="container">
                <div className="centered-box">
                    <div className="heading">
                        <h2 className="title">Đăng ký</h2>
                    </div>
                    <div className="form-register">
                        <form className="form">
                            <div className="form-control-wrap">
                                <input type="text" className="form-control" placeholder="Họ và tên" />
                            </div>
                            <div className="form-control-wrap">
                                <input type="email" className="form-control" placeholder="Email của bạn" />
                            </div>
                            <div className="form-control-wrap">
                                <input type="text" className="form-control" placeholder="Mật khẩu" />
                            </div>
                            <div className="form-control-wrap">
                                <input type="text" className="form-control" placeholder="Nhập lại mật khẩu" />
                            </div>
                            <div className="form-control-wrap">
                                <input type="submit" className="btn btn-login" value="Đăng ký" />
                            </div>
                        </form>
                    </div>
                    <div className="divider">
                        <span className="text">Bạn đã có tài khoản ?</span>
                    </div>
                    <div className="register-options">
                        <div className="btn-fluid">
                            <button className="btn btn-register">
                                Đăng nhập
                            </button>
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
                            <button className="btn btn-register">
                                <img src="assets/images/facebook-logo.png" className="img-logo" alt="facebook" />
                                Đăng ký bằng Facebook
                            </button>
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