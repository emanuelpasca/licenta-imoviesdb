import { useState } from "react";
import { set } from "../../../configs/firebase/actions";
import ReviewForm from "../add-review/ReviewForm";
import Modal from "../../lib/modal/Modal";

const EditReview = (props) => {
  // props: {
  //   onEdit: Function;
  //   userName: string;
  //   review: string;
  //   stars: number;
  //   id: string;
  // }
  const [isModalOpen, setIsModalOpen] = useState(false);

  const clickHandler = () => setIsModalOpen(true);
  const modalCloseHandler = () => setIsModalOpen(false);

  const editReview = (data) => {
    set("reviews", props.id, data).then(() => {
      setIsModalOpen(false);
      props.onEdit({ id: props.id, ...data });
    });
  };

  return (
    <>
      <button className="btn-controls mt-20" onClick={clickHandler}>
        Edit
      </button>
      <Modal isOpen={isModalOpen} closeModal={modalCloseHandler}>
        <h2>Edit Your Review</h2>
        <ReviewForm
          mode="edit"
          data={{
            id: props.id,
            userName: props.userName,
            review: props.review,
            stars: props.stars,
          }}
          onSubmit={editReview}
        ></ReviewForm>
      </Modal>
    </>
  );
};

export default EditReview;
