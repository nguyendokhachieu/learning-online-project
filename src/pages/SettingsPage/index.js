import "./settings-page.scss";

import { useEffect, useState } from "react";
import { Switch, Route } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { useWindowSize } from "../../hooks/useWindowSize";
import { actFetchUserDetailInfoAsync } from "../../store/users/actions";
import { actHideLoadingFullscreen, actShowLoadingFullscreen } from "../../store/modals/actions";

import SettingsNavigation from "../../components/SettingsNavigation";
import AccountInfo from "../../components/AccountInfo";
import ChangePassword from "../../components/ChangePassword";
import UploadAvatar from "../../components/UploadAvatar";
import NotFoundPage from "../NotFoundPage";

export default function SettingsPage() {
    const dispatch = useDispatch();
    const { width } = useWindowSize();
    const { user } = useSelector(state => state.users.currentUser);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (loading) return;

        dispatch(actShowLoadingFullscreen());
        setLoading(true);
        dispatch(actFetchUserDetailInfoAsync()).then(() => {
            setLoading(false);
            dispatch(actHideLoadingFullscreen());
        });
    }, []);

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
                        {/* <Route exact path="/settings/upload-avatar"><UploadAvatar /></Route> */}
                        <Route>
                            <div className="settings-not-exist">
                                <h2 className="settings-title-xs settings-title-m">Kh??ng c?? c??i ?????t b???n l???a ch???n</h2>
                                <div className="settings-instruct">
                                    <i className="fas fa-exclamation-triangle icon"></i>
                                    <span className="text">H??y ch???n 1 c??i ?????t ph?? h???p t???i thanh ??i???u h?????ng c??c t??y ch???n, ho???c n???u kh??ng c?? c??i ?????t n??o ph?? h???p, h??y <Link className="link" to="/">quay v??? trang ch???</Link></span>
                                </div>
                            </div>
                        </Route>
                    </Switch>
                </div>
            </div>
        </div>
    )
}