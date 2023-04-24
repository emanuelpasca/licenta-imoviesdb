import "./Review.css";
import { FaStar } from "react-icons/fa";
import EditReview from "./edit-revieww/EditReview";
import useUserDetails from "../../hooks/UserDetailsHook";

const Review = (
  props
  // onEdit: Function;
  // id: string;
  // review: string;
  // userName: string;
  // stars: number;
  // date: string;
  // userEmail: string;
  // userId: string;
) => {
  const { getCurrentUserDetails } = useUserDetails();
  const userId = getCurrentUserDetails().id;

  return (
    // box container
    <div className="review-box-container">
      {/* box 1 */}
      <div className="review-box">
        {/* top box */}
        <div className="review-top">
          {/* profile */}
          <div className="profile">
            {/* image */}
            <div className="profile-img">
              <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F8b%2F16%2F7a%2F8b167af653c2399dd93b952a48740620.jpg&f=1&nofb=1&ipt=1108d45038e47046aac9e44ced0f920725aed09f8a261c7d19c12f7c912bb970&ipo=images"></img>
            </div>
            {/* name and username  */}
            <div className="user-name">
              <strong>{props.userName}</strong>
              <span>{props.userEmail}</span>
            </div>
          </div>

          {/* reviews */}
          <div className="reviews">
            {/* stars  */}
            {[...Array(props.stars).keys()].map((index) => {
              return (
                <FaStar
                  key={index}
                  size={24}
                  style={{
                    marginRight: 10,
                  }}
                  color={"#FFBA5A"}
                ></FaStar>
              );
            })}
          </div>
          {userId === props.userId && (
            <EditReview
              onEdit={props.onEdit}
              id={props.id}
              userName={props.userName}
              review={props.review}
              stars={props.stars}
            ></EditReview>
          )}
        </div>
        <div className="user-review">
          <p>{props.review}</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
