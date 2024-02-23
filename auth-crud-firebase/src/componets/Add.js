import React from "react";
import { useDispatch } from "react-redux";
import useForm from "../hooks/useForm";
import { Button, Form } from "react-bootstrap";
import { actionAddproductAsyn } from "../redux/actions/actionsProduct";
import { FileUpload } from "../helpers/FileUpload";

const Add = () => {
  const dispatch = useDispatch();
  const [formValue, handleInputChange, reset] = useForm({
    name: "",
    price: "",
    des: "",
    foto: " ",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValue);
    let obj = {
      id: Math.floor(Math.random() * 200),
      name: formValue.name,
      price: formValue.price,
      description: formValue.des,
      foto: formValue.foto,
    };
    dispatch(actionAddproductAsyn(obj));
    reset();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    FileUpload(file)
      .then((resp) => (formValue.foto = resp))
      .catch((err) => console.warn(err));
  };

  return (
    <div className="divAdd" style={{ borderRadius: "20px",position: "relative" ,top: "50px" , maxWidth: "400px", margin: "auto" }}>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formPlaintextname">
          <Form.Label style={{ color: "red" }}>Nombre Producto</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese el nombre del producto"
            name="name"
            value={formValue.name}
            onChange={handleInputChange}
            style={{ borderColor: "red", color: "red" }}
          />
        </Form.Group>

        <Form.Group controlId="formPlaintextprice">
          <Form.Label style={{ color: "red" }}>Precio</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese el precio"
            name="price"
            value={formValue.price}
            onChange={handleInputChange}
            style={{ borderColor: "red", color: "red" }}
          />
        </Form.Group>

        <Form.Group controlId="formPlaintextprice">
          <Form.Label style={{ color: "red" }}>Descripción</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese la descripción"
            name="des"
            value={formValue.des}
            onChange={handleInputChange}
            style={{ borderColor: "red", color: "red" }}
          />
        </Form.Group>

        <Form.Group controlId="formPlaintextprice">
          <Form.Label style={{ color: "red" }}>Imagen</Form.Label>
          <Form.Control
            type="file"
            name="foto"
            accept="*/jpg"
            placeholder="Ingrese Foto.jpg"
            onChange={handleFileChange}
            style={{ borderColor: "red", color: "red" }}
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          style={{
            backgroundColor: "red",
            borderColor: "red",
            marginTop: "15px",
          }}
        >
          Guardar
        </Button>
      </Form>
    </div>
  );
};

export default Add;
