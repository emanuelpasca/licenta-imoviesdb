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
          <div key={review.id} className="items-container mt-10">
            <Review
              onEdit={props.onEdit}
              id={review.id}
              review={review.review}
              title={review.title}
              stars={review.stars}
              date={review.date}
              userName={review.userName}
              userId={review.userId}
            ></Review>
          </div>
        );
      })}
    </div>
  );
};

export default ReviewsList;
