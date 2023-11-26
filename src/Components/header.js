import React from "react";
import "../Styles/header.css";

// header, 네비게이션,, 로그인/회원가입
function Header() {
  return (
    <div className = "wrap">
      <div className="nav">      
        <ul className="nav_ul">
          <li className="nav_li"><a href="/HOME">HOME</a></li>
          <li className="nav_li"><a href="/INTRODUCE">INTRODUCE</a></li>
          <li className="nav_li"><a href="/GAMES">GAMES</a></li>
          <li className="nav_li"><a href="/VIP">VIP</a></li>
          <li className="nav_li"><a href="/RANKING">RANKING</a></li>
          <li className="nav_li"><a href="/SHOP">SHOP</a></li>
        </ul>
      </div>

      <div className="login">
        <ul className="login_ul">
            <li className="login_li"><a href="/LOG IN">LOG IN</a></li>
            <li className="login_li"><a href="/SIGN IN">SIGN IN</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
