import { useParams } from "react-router-dom";
import { add } from "../../../configs/firebase/actions";
import ReviewForm from "./ReviewForm";
import useUserDetails from "../../../hooks/UserDetailsHook";
import { useUserAuth } from "../../../contexts/AuthContext";

const AddReview = (props) => {
  // props: { onAdd: Function }
  const { id } = useParams();
  const { getCurrentUserDetails } = useUserDetails();
  const { user } = useUserAuth();

  const addReview = (data) => {
    add("reviews", {
      ...data,
      movieId: id,
      userId: user.uid,
      userName: getCurrentUserDetails().username,
    });

    props.onAdd({
      ...data,
      movieId: id,
      userId: user.uid,
      userName: getCurrentUserDetails().username,
    });
  };

  if (!user) {
    return <p className="text-mono">You must be logged in to add a review!</p>;
  }
  return <ReviewForm onSubmit={addReview}></ReviewForm>;
};

export default AddReview;
