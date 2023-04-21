import Review from "./Review";

const ReviewsList = (props) => {
  // { onEdit: Function, reviews: DocumentData[] }
  if (!props.reviews) {
    return <p>No reviews found</p>;
  }

  return (
    <div>
      {props.reviews.map((review) => {
        return (
          <div className="items-container mt-10">
            <Review
              onEdit={props.onEdit}
              id={review.id}
              review={review.review}
              userName={review.userName}
              stars={review.stars}
              date={review.date}
              userEmail={review.userEmail}
              userId={review.userId}
            ></Review>
          </div>
        );
      })}
    </div>
  );
};

export default ReviewsList;
