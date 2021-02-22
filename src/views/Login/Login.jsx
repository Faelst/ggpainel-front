import React from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";

const LoginPage = () => {
  const history = useHistory();

  function changePage() {
    history.push("/Panel");
  }

  return (
    <Container fluid className="bg-dark">
      <div class="d-flex justify-content-center">
        <Card class="card-login">
          <Form className="form-size">
            <div class="text-center">
              <img
                className="login-logo"
                src="/assets/gg-logo.png"
                width="65%"
                alt="GG Logo"
              />
            </div>
            <div class="form-login">
              <Form.Group controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Digite seu Email" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword" class="d-flex">
                <Form.Control type="password" placeholder="Senha" />
                <Link class="d-flex justify-content-end link-forgot-pass">
                  Esqueceu a senha ?
                </Link>
              </Form.Group>
            </div>
            <div class="d-flex justify-content-end">
              <Button
                className="mb-0 btn btn-success btn-login"
                variant="primary"
                type="submit"
                onClick={changePage}
              >
                Entrar
              </Button>
            </div>
            <Button
              className="max-button mt-4 btn-singup"
              variant="primary"
              type="submit"
              onClick={changePage}
            >
              Se tonar um membro
              <img
                class="ml-2"
                src="/assets/gg.png"
                width="10%"
                alt="GG Logo"
              />
            </Button>
          </Form>
        </Card>
      </div>
    </Container>
  );
};

export default LoginPage;
