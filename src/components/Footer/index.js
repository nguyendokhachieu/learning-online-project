import "./footer.scss";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="website-info">
                    <h2 className="title">
                        <a href="/" className="logo-wrap">
                            Online Learning
                        </a>
                    </h2>
                    <p className="desc">
                        <span>Online Learning</span> là website tổng hợp các khóa học được công khai trên 
                        <a href="https://youtube.com" className="link"> YouTube</a>, 
                        giúp việc tìm kiếm các khóa học online và tự học trở nên dễ dàng hơn 
                    </p>
                </div>
            </div>
        </footer>
    )
}