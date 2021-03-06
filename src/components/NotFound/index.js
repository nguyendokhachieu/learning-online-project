import './not-found.scss';

import Particles from "react-tsparticles";
import { Link } from 'react-router-dom';

export default function NotFound() {

    return (
        <div className="not-found-section">
            <div className="particles">
                <Particles
                    id="particles-s"
                    options={{
                    background: {
                        color: {
                        value: "#ffffff",
                        },
                    },
                    fpsLimit: 1000,
                    interactivity: {
                        detectsOn: "canvas",
                        modes: {
                        bubble: {
                            distance: 400,
                            duration: 10,
                            opacity: 0.8,
                            size: 40,
                        },
                        push: {
                            quantity: 10,
                        },
                        repulse: {
                            distance: 10,
                            duration: 0.4,
                        },
                        },
                    },
                    particles: {
                        color: {
                        value: "#e83e8c33",
                        },
                        collisions: {
                        enable: true,
                        },
                        move: {
                        direction: "none",
                        enable: true,
                        outMode: "bounce",
                        random: false,
                        speed: 2,
                        straight: false,
                        },
                        number: {
                        density: {
                            enable: true,
                            value_area: 1000,
                        },
                        value: 80,
                        },
                        opacity: {
                        value: 0.5,
                        },
                        shape: {
                        type: "circle",
                        },
                        size: {
                        random: true,
                        value: 5,
                        },
                    },
                    detectRetina: true,
                    }}
                />
                <div className="container">
                    <div className="n-f-heading">
                        <h1>Kh??ng t??m th???y trang b???n y??u c???u</h1>
                    </div>
                    <div className="n-f-desc">
                        <h4>C?? th??? trang ???? kh??ng t???n t???i do ???????ng d???n sai, ho???c b???n truy c???p ?????n kh??a h???c m??nh ch??a ????ng k??, ho???c c?? th??? l?? do l???i Internet</h4>
                    </div>
                    <div className="buttons">
                        <Link to="/" className="btn btn-back">Quay v??? trang ch???</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}