import { useState } from "react";
import { set } from "../../../configs/firebase/actions";
import ReviewForm from "../add-review/ReviewForm";
import Modal from "../../lib/modal/Modal";
import useUserDetails from "../../../hooks/UserDetailsHook";

const EditReview = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const clickHandler = () => setIsModalOpen(true);
  const modalCloseHandler = () => setIsModalOpen(false);
  const { getCurrentUserDetails } = useUserDetails();

  const editReview = (data) => {
    set("reviews", props.id, data).then(() => {
      setIsModalOpen(false);
      props.onEdit({
        id: props.id,
        ...data,
        userName: getCurrentUserDetails().username,
        userId: getCurrentUserDetails().userId,
      });
    });
  };

  return (
    <>
      <button className="btn btn-primary" onClick={clickHandler}>
        Edit
      </button>
      <Modal isOpen={isModalOpen} closeModal={modalCloseHandler}>
        <ReviewForm
          mode="edit"
          id={props.id}
          userName={props.userName}
          title={props.title}
          review={props.review}
          stars={props.stars}
          onSubmit={editReview}
        ></ReviewForm>
      </Modal>
    </>
  );
};

export default EditReview;
