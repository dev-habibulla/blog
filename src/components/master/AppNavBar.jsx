"use client";
import Link from "next/link";
import { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";

const AppNavBar = (props) => {
  let [keyword, SetKeyword] = useState("");

  return (
    <div>
      <Navbar expand="lg" className="bg-white sticky-top shadow-sm">
        <div className="container">
          <div className="navbar-brand">
            <img className="nav-logo" src={"/images/logo.svg"} alt="img" />
          </div>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto ms-3 my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link className="nav-link f-13" href="/">
                Home
              </Link>
              {props.data["categories"].map((item, i) => {
                return (
                  <Link
                    key={i}
                    className="nav-link f-13"
                    href={`/category?id=${item["id"]}`}
                  >
                    {item["name"]}
                  </Link>
                );
              })}
            </Nav>
            <div className="d-flex ms-3">
              <div className="input-group">
                <input
                  onChange={(e) => {
                    SetKeyword(e.target.value);
                  }}
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                />
                <Link
                  href={keyword === "" ? "/" : `/search?keyword=${keyword}`}
                  className="btn btn-danger"
                  type="button"
                >
                  <i className="bi bi-search"></i>
                </Link>
              </div>
            </div>
            {props.isLogin ? (
              <>
                <div className="float-right mx-3 h-auto d-flex">
                  <div className="user-dropdown">
                    <img
                      className="icon-nav-img icon-nav"
                      src="/images/profile.png"
                      alt=""
                    />
                    <div className="user-dropdown-content ">
                      <div className="mt-4 text-center">
                        <img
                          className="icon-nav-img"
                          src="/images/profile.png"
                          alt=""
                        />
                        <hr className="user-dropdown-divider  p-0" />
                      </div>
                      <Link href="/profile" className="side-bar-item">
                        <span className="side-bar-item-caption">Profile</span>
                      </Link>
                      <Link href="/comments" className="side-bar-item">
                        <span className="side-bar-item-caption">Comments</span>
                      </Link>
                      <a href="/api/user/login" className="side-bar-item">
                        <span className="side-bar-item-caption">Logout</span>
                      </a>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <Link
                  href="/user/login"
                  className="btn ms-3 btn-outline-danger"
                >
                  Login
                </Link>
              </>
            )}
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default AppNavBar;
