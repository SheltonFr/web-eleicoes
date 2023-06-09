import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function MyVerticallyCenteredModal({ show, confirm, cancel }) {
    return (
        <Modal
            show={show}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Confirmação de voto
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    Deseja realmente votar no candidato selecionado?
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={cancel}>Close</Button>
                <Button onClick={confirm} >Save</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default MyVerticallyCenteredModal;
