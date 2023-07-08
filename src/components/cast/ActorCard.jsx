import ProgressiveImage from "../lib/ProgressiveImage";

const ActorCard = (props) => {
  return (
    <div className="border-solid bg-secondary w-36 h-72 mt-2 ml-3">
      <div className="avatar">
        <div className="w-36 h-52">
          {/* <img src={props.actor.image} /> */}
          <ProgressiveImage
            src={props.actor.image}
            placeholder="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.drodd.com%2Fimages16%2Fdark-red8.jpg&f=1&nofb=1&ipt=30cec2f03096860e00f8170df486743b26704e4c911a3ad9042bfe3844e4f03e&ipo=images"
            size="h-32 w-36"
          ></ProgressiveImage>
        </div>
      </div>
      <div className="flex-row justify-center text-center">
        <div className="mt-1 text-m text-white font-mono">
          {props.actor.name}
        </div>
        <div className="mt-1 text-xs text-gray-500 font-mono">
          {props.actor.asCharacter}
        </div>
      </div>
    </div>
  );
};

export default ActorCard;
