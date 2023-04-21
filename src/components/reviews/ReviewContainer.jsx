import { useEffect, useState } from "react";
import ReviewsList from "./ReviewsList";
import { useParams } from "react-router-dom";
import { whereQuery } from "../../configs/firebase/actions";
import useUserDetails from "../../hooks/UserDetailsHook";
import AddReview from "./add-review/AddReview";

const ReviewsContainer = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userReviewed, setUserReviewed] = useState(false);
  const { id } = useParams();

  const { getCurrentUserDetails } = useUserDetails();
  const userId = getCurrentUserDetails().id;
  // const userIsClient = getCurrentUserDetails().type === UserTypes.CLIENT;

  useEffect(() => {
    if (id) {
      whereQuery("reviews", "movieId", id).then((receivedReviews) => {
        if (!receivedReviews) return;

        receivedReviews.forEach((review) => {
          review.userId === userId
            ? setUserReviewed(true)
            : setUserReviewed(false);
        });

        setReviews(receivedReviews);
        setLoading(false);
      });
    }
  }, []);

  const onAddHandler = (data) => {
    setReviews((prevReviews) => {
      return [...prevReviews, data];
    });
    setUserReviewed(true);
  };

  const onEditHandler = (data) => {
    setReviews((prevReviews) => {
      const newReviews = prevReviews.map((review) => {
        if (review.id === data.id) {
          return data;
        }

        return review;
      });

      return newReviews;
    });
  };

  if (loading)
    return (
      <div className="mt-10 h-screen w-96 bg-secondary absolute">
        <div className="flex justify-center">
          <div>
            <button className="btn btn-primary btn-circle loading border-transparent"></button>
          </div>
        </div>
      </div>
    );

  return (
    <div className="card">
      {userReviewed ? (
        <p>Thank you for your feedback!</p>
      ) : (
        <AddReview onAdd={onAddHandler}></AddReview>
      )}
      <hr></hr>
      <h3>User reviews:</h3>
      {reviews.length == 0 && <p>No reviews found.</p>}
      {!loading && (
        <ReviewsList onEdit={onEditHandler} reviews={reviews}></ReviewsList>
      )}
    </div>
  );
};

export default ReviewsContainer;
