import "./categories-list.scss";

export default function CategoriesList() {
  return (
    <div className="categories-section">
      <ul className="categories-list">
        <li className="item active">
          <span className="text">Theo lộ trình</span>
        </li>
        <li className="item">
          <span className="text">ReactJS</span>
        </li>
        <li className="item">
          <span className="text">Next</span>
        </li>
        <li className="item">
          <span className="text">Nuxt</span>
        </li>
        <li className="item">
          <span className="text">PHP</span>
        </li>
      </ul>
    </div>
  );
}
