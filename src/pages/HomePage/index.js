import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actGetAllCategoriesAsync } from "../../store/categories/actions";
import "./home-page.scss";

export default function HomePage() {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const { listAllCategories } = useSelector(state => state.categories);

    useEffect(() => {
        if (loading) return;
    
        setLoading(true);

        dispatch(actGetAllCategoriesAsync()).then(() => {
          setLoading(false);
        })
    
      }, [])

    return (
        <div className="home-page-wrapper">
            <div className="top-show">
                <div className="container">
                    <div className="left-image">
                        <img src="/assets/images/landing-page.png" alt="landing page" className="img" />
                    </div>
                    <div className="right-text">
                        <h1 className="landing-title">Khóa học trực tuyến dành cho bạn</h1>
                        <a href="/courses?category=tat-ca-khoa-hoc" className="join-courses">Xem tất cả khóa học</a>
                    </div>
                </div>
            </div>
            <div className="categories-land">
                <div className="container">
                    <h2 className="landing-title landing-title-h2 color-black">Tất cả danh mục</h2>
                    <p className="description-land">Các khóa học được phân loại thành các danh mục giúp bạn truy cập dễ dàng hơn!</p>
                    <div className="categories-land-listWrap">
                        <ul className="categories-land-list">
                            {
                                listAllCategories.length 
                                    ? listAllCategories.map(category => {
                                        return (
                                            <li key={category.id}>
                                                <a href={`/courses?category=${category.slug}`} className="category-itemLink">{category.name}</a>
                                            </li>
                                        )
                                    })
                                    : null
                            }
                            
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bc-linear-gradient mt-2 ptb-5">
                <h2 className="landing-title landing-title-h2 color-white">Học dễ dàng, mọi lúc mọi nơi</h2>
                <p className="description-land color-white">"Việc đầu tư vào kiến thức mang lại lợi nhuận cao nhất"</p>
                <p className="description-land color-white quote-author">-Benjamin Franklin-</p>
            </div>
            <div className="ptb-5 children-centered">
                <p className="description-land"><i className="far fa-calendar-check large-icon"></i></p>
                <h2 className="landing-title landing-title-h2 text-gradient">Còn chần chừ gì nữa? Lên lịch học ngay thôi!</h2>
                <a href="/courses?category=tat-ca-khoa-hoc" className="join-courses rounded faded-hover uppercase">THAM GIA NGAY!</a>
            </div>
        </div>
    )
}