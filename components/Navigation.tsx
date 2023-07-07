"use client";
import { menu } from "@/constants/menu";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import Button from "./Button";

const Navigation = () => {
  return (
    <nav className="nav_wrapper">
      <Container>
        <Row>
          <Col xs={12} className="nav_wrapper_inner">
            <div className="logo_wrapper">
              <Image src="/images/logo.svg" alt="logo" width={110} height={60} />
            </div>
            <div className="menu_wrapper">
              <div className="menu_list">
                <ul>
                  {menu.map((data, index) => {
                    return (
                      <li key={index}>
                        <Link href={data.path}>{data.title}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="nav_button">
                <Button title="Get in Touch" btnType="primary" btnLink="btn" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </nav>
  );
};

export default Navigation;
