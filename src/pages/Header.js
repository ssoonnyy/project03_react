import { Navbar, Nav, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import React from "react";

import "./style/header.scss";
import "./style/style.css";

export default function Header() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand
            onClick={() => {
              navigate("/");
            }}
          >
            <div className="logo_box">
              <div className="logo_img">
                <img
                  src={process.env.PUBLIC_URL + "/images/logo.jpg"}
                  alt="로고이미지"
                />
              </div>
              <div className="logo_txt_box">
                <p className="logo_txt01">나아짐코리아</p>
                <p className="logo_txt02">NAAGYM KOREA</p>
              </div>
            </div>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/shop");
              }}
            >
              쇼핑몰
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/center");
              }}
            >
              센터안내
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/introduce");
              }}
            >
              회사소개
            </Nav.Link>
          </Nav>

          <nav className="gnb">
            <ul>
              <li>Login</li>
              <li>Join</li>
              <li>Cart</li>
              <li>Mypage</li>
            </ul>
          </nav>
        </Container>
      </Navbar>
    </>
  );
}
