import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

import { actFetchListCoursesByCategorySlugAsync } from "../../store/courses/actions";

export default function CategoryItem({
    category = null,
}) 
{
    const history = useHistory();
    const dispatch = useDispatch();
    const { categorySlug } = useSelector(state => state.courses.coursesByCategorySlug);
    const [loading, setLoading] = useState(false);

    function handleFetchCoursesByCategorySlug() {
        history.push(`/courses?category=${ category.slug }`)
        if (category.slug === categorySlug) return;
        if (!category) return;
        if (loading) return;

        setLoading(true);
        dispatch(actFetchListCoursesByCategorySlugAsync({
            page: 1,
            perPage: 6,
            categorySlug: category.slug,
          })).finally(() => {
            setLoading(false);
          });
      
    }

    if (!category) return null;

    return (
        <li 
            className={ categorySlug === category.slug ? "item active" : "item" }
            onClick={ handleFetchCoursesByCategorySlug }
        > 
            <span className="text">
                { loading ? <span className="icon-wrap"><i className="fas fa-circle-notch fa-spin icon"></i></span> : null }
                { category.name }
            </span>
        </li>
    );
}
