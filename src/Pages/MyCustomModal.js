import React, {Component} from "react";
import ReactDOM from "react-dom";

class MyCustomModal extends Component{
    state = { show: false };

    showModal = () => {
        this.state.show = true;
        console.log(this.state.show);
    };

    hideModal = () => {
        this.setState({ show: false });
    };

    render() {
        return (
            <main>
                <h1>React Modal</h1>
                <Modal show={this.state.show} handleClose={this.hideModal}>
                    <p>Modal</p>
                    <p>Data</p>
                </Modal>
                <button type="button" onClick={this.showModal}>
                    open
                </button>
            </main>
        );
    }
}

const Modal = ({ handleClose, show, children }) => {
    console.log("trying to open modal");
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                {children}
                <button onClick={handleClose}>close</button>
            </section>
        </div>
    );
};
export default MyCustomModal
