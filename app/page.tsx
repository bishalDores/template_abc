"use client";
import Button from "@/components/Button";
import { Container, Row, Col } from "react-bootstrap";

export default function Home() {
  return (
    <main>
      <div className="banner">
        <Container>
          <Row>
            <Col xs={12}>
              <div className="banner_headline">
                <h1>
                  <span className="title-word title-word-1">Innovative Solutions</span>
                  <br />
                  <span className="title-word title-word-2">for a </span>
                  <span className="title-word title-word-3">Digital World</span>
                  <br />
                  <span className="title-word title-word-4">Trusted Agency</span>
                </h1>
              </div>
              <div className="banner_subHead">
                <h4>Elevate Your Brand: Powerhouse Agency for Impactful Strategies</h4>
              </div>
              <div className="banner_cta">
                <Button title="Our Services" btnLink="btn" btnType="primary" />
                <Button title="Work With Us" btnLink="btn" btnType="secondary" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </main>
  );
}
