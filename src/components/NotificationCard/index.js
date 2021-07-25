import "./noti-card.scss";

import { useDispatch, useSelector } from "react-redux";
import { actHideNotificationCard } from "../../store/modals/actions";
import { useEffect } from "react";

export default function NotificationCard({
    show = false,
    content = '',
    link = '',
    timeInMilliseconds = 5000,
}) 
{ 
    const dispatch = useDispatch();
    const { show: showThis } = useSelector(state => state.modals.notificationCard);

    useEffect(() => {
        showThis && (
            setTimeout(() => {
                dispatch(actHideNotificationCard());
            }, timeInMilliseconds)
        )
    }, [showThis, dispatch, timeInMilliseconds]);

    return (
        <div className={ show ? "notification-card active" : "notification-card" }>
            <div className="inner-notification-card">
                <span className="text">{ content }</span>
                <span className="link">{ link }</span>
            </div>
            <div className="close-noti-card" onClick={ () => dispatch(actHideNotificationCard()) }>
                <i className="fas fa-times icon"></i>
            </div>
        </div>
    )
}