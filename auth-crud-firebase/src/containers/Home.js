import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionListproductAsyn } from "../redux/actions/actionsProduct";
import { Button, Container, Modal, Navbar, Offcanvas } from "react-bootstrap";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const dispatch = useDispatch();
  const { products } = useSelector((store) => store.productsStore);

  useEffect(() => {
    dispatch(actionListproductAsyn());
  }, [dispatch]);

  const handleShowModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="container">
      <div>
        {[false].map((expand) => (
          <Navbar key={expand} expand={expand}>
            <Container fluid style={{ display: "flex", position: "relative", left: "47%", width: "60px", border: "none" }}>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
              <Navbar.Offcanvas
                placement="end"
              >
                <Offcanvas.Body>
                  {selectedProduct && (
                    <div>
                      <img src={selectedProduct.foto} alt="PRODUCTO COMPRADO" />
                    </div>
                  )}
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </div>

      <Modal show={showModal} onHide={handleCloseModal}>
        <div className="custom-modal-content">
          <Modal.Header className="custom-modal-header" closeButton>
            {selectedProduct && (
              <div>
                <img className="img_Nodal" src={selectedProduct.foto} alt="IMAGEN DE LA NODAL, NO EXISTE" />
                <div>
                  <h1>{selectedProduct.name}</h1>
                  <p>{selectedProduct.price}</p>
                  <p>Precio con IVA incluido</p>
                  <h5 className="h5_Peso">Peso aproximado por pieza, puede variar de acuerdo al peso real</h5>
                  <h3 className="h3_Madurez">Selecciona la Madurez que deseas</h3>
                  <select>
                    <option className="wrapOption_">Por elegir</option>
                    <option>Maduro (Para Hoy)</option>
                    <option>Normal (3-5 días)</option>
                    <option>Verde (7 días)</option>
                  </select>
                  <h1>Productos Relacionados</h1>
                </div>
              </div>
            )}
          </Modal.Header>
          <Modal.Footer className="custom-modal-footer">
            <Button variant="secondary" onClick={handleCloseModal}>
              Agregar
            </Button>
          </Modal.Footer>
        </div>
      </Modal>

      <div className="row">
        <div className="col">
          <img src="https://res.cloudinary.com/dbwgsrqgm/image/upload/v1708568321/TIENDA/banner_bfvvrh.png" className="img-fluid" alt="Banner" />
          <h1 className="text-center mt-3">¡Adquiere todos tus productos favoritos al mejor precio!</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h1 className="row-title">Ofertas</h1>
          <div className="row" style={{ boxShadow: '2px 2px 4px rgba(0.2, 0, 0, 0.2)', padding: '10px', borderRadius: "20px" }}>
            {products.map((product, index) => (
              <div className="col-md-3" key={index}>
                <div className="card mb-3">
                  <p className="card-discount">{product.description}</p>
                  <img src={product.foto} className="card-img-top" alt="IMAGEN PRODUCTO" />
                  <p className="price">{product.price}</p>
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <button className="btn-success" onClick={() => handleShowModal(product)}>Agregar</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <h1 className="row-title" style={{ margin: "20px" }}>Lo mas popular</h1>
          <div className="row" style={{ boxShadow: '2px 2px 4px rgba(0.2, 0, 0, 0.2)', padding: '10px', borderRadius: "20px" }}>
            {products.map((product, index) => (
              <div className="col-md-3" key={index}>
                <div className="card mb-3">
                  <p className="card-discount">{product.description}</p>
                  <img src={product.foto} className="card-img-top" alt="IMAGEN PRODUCTO" />
                  <p className="price">{product.price}</p>
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <button className="btn-success" onClick={() => handleShowModal(product)}>Agregar</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
