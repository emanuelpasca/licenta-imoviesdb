import { useParams } from "react-router-dom";
import { add } from "../../../configs/firebase/actions";
import ReviewForm from "./ReviewForm";
import useUserDetails from "../../../hooks/UserDetailsHook";

const AddReview = (props) => {
  // props: { onAdd: Function }
  const { id } = useParams();
  const { getCurrentUserDetails } = useUserDetails();

  const userId = getCurrentUserDetails().id;
  const userEmail = getCurrentUserDetails().email;

  const addReview = (data) => {
    add("reviews", {
      ...data,
      movieId: id,
      userId: userId,
      userEmail: userEmail,
    });

    props.onAdd({
      ...data,
      movieId: id,
      userId: userId,
      userEmail: userEmail,
    });
  };

  return <ReviewForm onSubmit={addReview}></ReviewForm>;
};

export default AddReview;
