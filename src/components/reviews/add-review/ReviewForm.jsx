import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./ReviewForm.css";

const ReviewForm = (props) => {
  // props:  mode?: string;
  // onSubmit: Function;
  // review?: object;
  // data?: {
  //   id: string;
  //   userName: string;
  //   review: string;
  //   stars: number;
  // };
  const [starValue, setStarValue] = useState(0);

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
    // const target = e.target as typeof e.target & {
    //   [key: string]: {
    //     value: string;
    //   };
    // };

    if (
      target.userName.value == "" ||
      target.review.value == "" ||
      starValue == 0
    ) {
      alert("Please fill the form corecly!");
      return;
    }

    const reviewData = {
      userName: e.target.userName.value,
      review: e.target.review.value,
      stars: starValue,
      date: dateTime,
    };

    props.onSubmit(reviewData);

    target.userName.value = "";
    target.review.value = "";
    setStarValue(0);
  };

  const starColors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9",
  };

  const handleStarClick = (value) => {
    setStarValue(value);
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <h2>Tell us your oppinion!</h2>
        <div className="container">
          <div>
            {/* <Input
              label="Name"
              type="text"
              name="userName"
              value={props.data?.userName || ""}
            ></Input> */}
            <input label="Name" type="text" name="userName">
              {props.data.username || ""}
            </input>
            {/* <TextArea
              label="Review"
              name="review"
              value={props.data?.review || ""}
            ></TextArea> */}
            <textarea label="Review" name="review">
              {props.data.review || ""}
            </textarea>
            <div className="stars adica margin-top 20px">
              {[...Array(5).keys()].map((index) => {
                return (
                  <FaStar
                    key={index}
                    size={24}
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
          <br></br>
          <div className="flex">
            {props.mode === "edit" ? (
              <button className="btn btn-grad">EDIT</button>
            ) : (
              <button className="btn btn-grad">SEND</button>
            )}
          </div>
        </div>
      </form>
    </>
  );
};

export default ReviewForm;
