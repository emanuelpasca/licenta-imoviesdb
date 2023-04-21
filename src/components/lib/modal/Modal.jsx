const Modal = (props) => {
  if (props.isOpen) {
    return (
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Congratulations random Internet user!
          </h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div className="modal-action">
            <label
              onClick={props.closeModal}
              htmlFor="my-modal-6"
              className="btn"
            >
              Yay!
            </label>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Modal;
