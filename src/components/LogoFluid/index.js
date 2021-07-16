import "./logo-fluid.scss";

import { useScrolledPercentage } from "../../hooks/useScrolledPercentage";

export default function LogoFluid({
    threshold = 17,
    sideHeadingTitle = 'Đăng ký tài khoản',
}) 
{
  const { scrolledPercentY } = useScrolledPercentage();

  const isLogoMinimized = scrolledPercentY > threshold;

  return (
    <div className={isLogoMinimized ? "logo-fluid minimize" : "logo-fluid"}>
      <h1 className="title">
        <a href="/" className="link">
          Online Learning
        </a>
      </h1>
      <div className="logo-float">
        <h2 className="title">
          <a href="/" className="link-float">
            Online Learning
          </a>
          <span>{ sideHeadingTitle }</span>
        </h2>
      </div>
    </div>
  );
}
