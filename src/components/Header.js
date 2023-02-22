/* eslint-disable jsx-a11y/anchor-is-valid */
import img from '../assets/lws-logo.svg';

export default function Header() {
  return (
    <div id="header">
      <div class="container">
        <img src={img} alt="logo" class="logo" />
        <div class="flex items-center">
          <a class="text-white min-w-[50px] font-medium" href="#">
            Home
          </a>
          <button class="log-btn btn">Login</button>
        </div>
      </div>
    </div>
  );
}
