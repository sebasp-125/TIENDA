import React from "react";
import { Button, Col, Form } from "react-bootstrap";
import useForm from "../hooks/useForm";
import { useDispatch } from "react-redux";
import { actionGoogle, actionLoginAsyn } from "../redux/actions/actionsLogin";
import { Link } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const [formValue, handleInputChange, reset] = useForm({
    email: "",
    pass: "",
  });

  const { email, pass } = formValue;
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(actionLoginAsyn(email, pass));
    reset();
  };

  return (
    <div className="container" style={{ textAlign: "center", paddingTop: "50px" }}>
      <div className="card" style={{ maxWidth: "400px", margin: "0 auto", borderRadius: "20px", boxShadow: "0px 0px 15px rgba(0, 20, 5, 0.1)" }}>
        <div className="card-body">
          <h2 className="card-title">Iniciar Sesión</h2>
          <hr />
          <p>Por favor, <b>Inicia Sesión</b> o <b>Registrate</b> para acceder a nuestra plataforma.</p>
<b style={{color: "orange"}}>¡Disculpanos!</b>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formPlaintextEmail">
              <Form.Control
                type="email"
                placeholder="Correo electrónico"
                name="email"
                value={formValue.email}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPlaintextPassword">
              <Form.Control
                type="password"
                placeholder="Contraseña"
                name="pass"
                value={formValue.pass}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Button type="submit" variant="warning" className="btn-block mb-3" style={{margin: "20px"}}>Iniciar Sesión</Button>
            <Button onClick={() => dispatch(actionGoogle())} variant="warning" className="btn-block">Iniciar con Google</Button>
            
          </Form>
          <hr />
          <p className="card-text">¿Eres nuevo? <Link to="/register">Regístrate aquí</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
