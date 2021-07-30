export default function UploadAvatar() {
  return (
    <>
      <h2 className="settings-title-m">Cập nhật ảnh đại diện</h2>
      <div className="settings-inner">
        <form>
          <div className="row">
            <div className="col-6 col-0">
              <span className="text">Chọn một ảnh</span>
            </div>
            <div className="col-6 col-12">
              <label htmlFor="file" className="file-label">
                <i className="fas fa-plus icon"></i>
                Chọn từ thiết bị
              </label>
              <input type="file" className="input file" id="file" />
            </div>
          </div>
          <div className="row">
            <button type="submit" className="btn btn-save-change disabled">
              Tải ảnh lên
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
