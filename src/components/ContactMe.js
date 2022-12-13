import Form from './Form';

export default function ContactMe() {
  return (
    <div className="d-flex p-5 flex-column align-items-center">
      <h3 className="fw-bold fs-1">Fale comigo</h3>
      <h4 className="fw-light fs-5 mb-5">
        Envie uma mensagem para mim!
      </h4>
      <Form />
    </div>
  );
}
