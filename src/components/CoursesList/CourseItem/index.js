import "./course-item.scss";

export default function CoursesItem() {
  return (
    <section className="course-item">
      <div className="course-item-inner">
        <div className="course-thumbnail">
          <a href="/">
            <img
              src="https://cdn.slidesharecdn.com/ss_thumbnails/reactjssulokramani-160805123618-thumbnail-4.jpg?cb=1470400672"
              className="img"
              alt="course-thumbnail"
            />
          </a>
        </div>
        <div className="course-item-body">
          <div className="course-item-heading">
            <div className="course-name">
              <h2>
                <a href="/" title="Reactjs từ cơ ">
                  Reactjs từ cơ bản đến nâng cao cho cơ bản đến nâng cao cho
                  người mới cho người mới
                </a>
              </h2>
            </div>
            <p className="course-desc">
              Xây dựng web trong thực tế với ReactJS với cách chia sẻ chi tiết,
              tận tâm, dễ hiểu và chất giọng giàu sức sống của người chia sẻ Xây
              dựng web trong thực tế với ReactJS với cách chia sẻ chi tiết, tận
              tâm, dễ hiểu và chất giọng giàu sức sống của người chia sẻ Xây
              dựng web trong thực tế với ReactJS Xây dựng web trong thực tế với
              ReactJS
            </p>
          </div>
          <div className="course-info">
            <div className="participants-count">
              <i className="fas fa-users icon"></i>
              <span className="text">12.345 người tham gia</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
