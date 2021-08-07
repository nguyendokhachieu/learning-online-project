import "./settings-page.scss";

import { Switch, Route } from "react-router";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { useWindowSize } from "../../hooks/useWindowSize";

import SettingsNavigation from "../../components/SettingsNavigation";
import AccountInfo from "../../components/AccountInfo";
import ChangePassword from "../../components/ChangePassword";
import UploadAvatar from "../../components/UploadAvatar";
import NotFoundPage from "../NotFoundPage";

export default function SettingsPage() {
    const { width } = useWindowSize();
    const { user } = useSelector(state => state.users.currentUser);

    if (!user) return <NotFoundPage />;

    return (
        <div className="settings-a-z-zone">
                { width < 992 ? <SettingsNavigation /> : null }
            <div className="container">
                { width >= 992 ? <SettingsNavigation /> : null }
                <div className="setting-main">
                    <Switch>
                        <Route exact path="/settings/account"><AccountInfo /></Route>
                        <Route exact path="/settings/change-password"><ChangePassword /></Route>
                        <Route exact path="/settings/upload-avatar"><UploadAvatar /></Route>
                        <Route>
                            <div className="settings-not-exist">
                                <h2 className="settings-title-xs settings-title-m">Không có cài đặt bạn lựa chọn</h2>
                                <div className="settings-instruct">
                                    <i className="fas fa-exclamation-triangle icon"></i>
                                    <span className="text">Hãy chọn 1 cài đặt phù hợp tại thanh điều hướng các tùy chọn, hoặc nếu không có cài đặt nào phù hợp, hãy <Link className="link" to="/">quay về trang chủ</Link></span>
                                </div>
                            </div>
                        </Route>
                    </Switch>
                </div>
            </div>
        </div>
    )
}