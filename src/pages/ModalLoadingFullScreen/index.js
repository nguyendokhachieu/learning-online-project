import './modal-loading-fullscreen.scss';

export default function ModalLoadingFullScreen({
    show = false,
}) 
{
    return (
        <div className={ show ? "modal-loading-fullscreen" : "modal-loading-fullscreen hidden" }>
            <div className="inner-modal-loading-fullscreen">
                <img src="/assets/images/loading-4-bars.gif" className="img" alt="loading"/>
            </div>
        </div>
    );
}