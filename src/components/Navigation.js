import React from "react"; //로그인 하고, 어디로 갈지 정하는 곳
import {Link} from "react-router-dom";
const Navigation = () => 
<nav>
    <ul>
       <li>
           <Link to="/">여기는 메인 화면</Link>
        </li> 
        <li>
           <Link to="/profile">마이 페이지</Link>
        </li> 
    </ul>
</nav>;
export default Navigation;