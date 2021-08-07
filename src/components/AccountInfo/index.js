import { useSelector } from "react-redux";

import { Helpers } from "../../utils/Helpers";

export default function AccountInfo() {
  const userDetail = useSelector(state => state.users.userDetail);

  return (
    <>
      <h2 className="settings-title-m">Thông tin chung tài khoản</h2>
      <div className="settings-inner">
        <form>
          <div className="row">
            <div className="col-6 col-0">
              <span className="text">Họ và tên</span>
            </div>
            <div className="col-6 col-12">
              <input type="text" className="input" value={ userDetail?.name } />
            </div>
          </div>
          <div className="row">
            <div className="col-6 col-0">
              <span className="text">Email</span>
            </div>
            <div className="col-6 col-12">
              <input type="text" className="input" value={ userDetail?.email } />
            </div>
          </div>
          <div className="row">
            <div className="col-6 col-0">
              <span className="text">Ngày tham gia</span>
            </div>
            <div className="col-6 col-12">
              <input type="text" className="input" value={ `Đã tham gia ${Helpers.getTimeAgoInString(userDetail?.created_at)}` } />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
