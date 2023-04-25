import { useState } from "react";
import { FaStar } from "react-icons/fa";
import useToastify from "../../../hooks/ToastHook";
// import "./ReviewForm.css";

const ReviewForm = (props) => {
  const [starValue, setStarValue] = useState(0);
  const notify = useToastify();

  let current = new Date();
  let cDate =
    current.getFullYear() +
    "-" +
    (current.getMonth() + 1) +
    "-" +
    current.getDate();
  let cTime =
    current.getHours() +
    ":" +
    current.getMinutes() +
    ":" +
    current.getSeconds();
  let dateTime = cDate + " " + cTime;

  const submitHandler = (e) => {
    e.preventDefault();

    if (
      e.target.title.value == "" ||
      e.target.review.value == "" ||
      starValue == 0
    ) {
      notify("warning", "You must fill the entire form!");
      return;
    }

    const reviewData = {
      title: e.target.title.value,
      review: e.target.review.value,
      stars: starValue,
      date: dateTime,
    };

    props.onSubmit(reviewData);

    e.target.title.value = "";
    e.target.review.value = "";
    setStarValue(0);
  };

  const starColors = {
    orange: "#b31b1b",
    grey: "#a9a9a9",
  };

  const handleStarClick = (value) => {
    setStarValue(value);
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className=" w-full bg-secondary p-1 font-mono">
          <h2 className="text-">Tell us your oppinion!</h2>
          <div className="">
            <div className="mt-1 flex flex-row">
              <input
                className="input input-primary bg-secondary"
                label="Name"
                type="text"
                name="title"
                placeholder={props.title || "Title"}
              />
              <div className="mt-3 ml-5 flex flex-row">
                {[...Array(5).keys()].map((index) => {
                  return (
                    <FaStar
                      key={index}
                      size={22}
                      style={{
                        marginRight: 10,
                        cursor: "pointer",
                      }}
                      color={
                        starValue > index ? starColors.orange : starColors.grey
                      }
                      onClick={() => handleStarClick(index + 1)}
                    ></FaStar>
                  );
                })}
              </div>
            </div>
            <div className="mt-2">
              <textarea
                className="textarea textarea-primary  w-full bg-secondary font-mono"
                label="Review"
                name="review"
                placeholder={props.review || "Your review"}
              />
            </div>
          </div>
          <br></br>
          <div className="flex">
            {props.mode === "edit" ? (
              <button className="btn btn-primary">Edit</button>
            ) : (
              <button className="btn btn-primary">Send</button>
            )}
          </div>
        </div>
      </form>
    </>
  );
};

export default ReviewForm;
