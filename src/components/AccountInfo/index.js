
export default function AccountInfo() {
  return (
    <>
      <h2 className="settings-title-m">Thông tin chung tài khoản</h2>
      <div className="settings-inner">
        <form>
          <div className="row">
            <div className="col-6 col-0">
              <span className="text">Email</span>
            </div>
            <div className="col-6 col-12">
              <input type="text" className="input" value="nguyenhieu@gmail.com" />
            </div>
          </div>
          <div className="row">
            <div className="col-6 col-0">
              <span className="text">Ngày tham gia</span>
            </div>
            <div className="col-6 col-12">
              <input type="text" className="input" value="11/11/2021" />
            </div>
          </div>
          <div className="row">
            <div className="col-6 col-0">
              <span className="text">Tổng số khóa học đã tham gia</span>
            </div>
            <div className="col-6 col-12">
              <input type="text" className="input" value="12" />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
