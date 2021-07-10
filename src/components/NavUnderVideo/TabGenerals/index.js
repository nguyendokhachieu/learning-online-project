import "./tab-generals.scss";

export default function TabsGeneral() {
  return (
    <div id="general" className="general">
      <div className="paragraphs">
        <p>
          Tham gia học lập trìnhTham gia học lập trìnhTham gia học lập trìnhTham
          gia học lập trình
        </p>
        <p>
          Tham gia học lập trìnhTham gia học lập trìnhTham gia học lập trìnhTham
          gia học lập trình
        </p>
        <p>
          Tham gia học lập trìnhTham gia học lập trìnhTham gia học lập trìnhTham
          gia học lập trình
        </p>
      </div>
      <div className="comments-section">
        <div className="comments-section-top">
          <h5 className="comments-count">99 hỏi đáp</h5>
        </div>
        <div className="comment-adder">
          <div className="form">
            <div className="avatar">
              <img
                src="https://pdp.edu.vn/wp-content/uploads/2021/05/hinh-anh-avatar-de-thuong.jpg"
                className="avatar-img"
                alt="user-avatar"
              />
            </div>
            <div className="adder">
              <div
                class="comment-input"
                tabindex="0"
                contenteditable="true"
                role="textbox"
                aria-multiline="true"
                spellcheck="false"
              ></div>
            </div>
          </div>
          <div className="buttons">
            <button className="btn btn-cancel">Hủy bỏ</button>
            <button className="btn btn-submit">Bình luận</button>
          </div>
        </div>
        <div className="comments-list">
          <section className="comment-item">
            <div className="comment-top">
              <div className="avatar">
                <img
                  src="https://pdp.edu.vn/wp-content/uploads/2021/05/hinh-anh-avatar-de-thuong.jpg"
                  className="avatar-img"
                  alt="user-avatar"
                />
              </div>
              <div className="comment-content">
                <div className="commentator-name">Nguyễn Đỗ Khắc Hiếu</div>
                <div className="comment-text">
                  Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum Lorem
                  ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum Lorem
                  ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
                </div>
              </div>
            </div>
            <div className="comment-reactions">
              <div className="react like active">Thích</div>
              <div className="react reply">Trả lời</div>
            </div>
            <div className="comment-show-reply">
              <i className="fas fa-arrow-right icon"></i>
              <span className="text">Xem thêm 99 câu trả lời</span>
            </div>
            <div className="comment-reply">
              <div className="form">
                <div className="avatar">
                  <img
                    src="https://pdp.edu.vn/wp-content/uploads/2021/05/hinh-anh-avatar-de-thuong.jpg"
                    className="avatar-img"
                    alt="user-avatar"
                  />
                </div>
                <div className="adder">
                  <div
                    class="comment-input"
                    tabindex="0"
                    contenteditable="true"
                    role="textbox"
                    aria-multiline="true"
                    spellcheck="false"
                  ></div>
                </div>
              </div>
              <div className="buttons">
                <button className="btn btn-cancel">Hủy bỏ</button>
                <button className="btn btn-submit">Trả lời</button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
