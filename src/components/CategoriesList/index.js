import "./categories-list.scss";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actGetAllCategoriesAsync } from "../../store/categories/actions";

import CategoryItem from "./CategoryItem";

export default function CategoriesList() {
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
    <div className="categories-section">
      <ul className="categories-list">
        {
          listAllCategories.length !== 0
            ? listAllCategories.map(item => {
              return <CategoryItem key={ item.id } category={ item } />
            })
            : null
        }
      </ul>
    </div>
  );
}
