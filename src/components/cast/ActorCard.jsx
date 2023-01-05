const ActorCard = (props) => {
  return (
    <div className="border-solid  bg-secondary w-36 h-52 mt-2 ml-2 rounded">
      <div className="avatar">
        <div className="w-36 h-32">
          <img src={props.actor.image} />
        </div>
      </div>
      <div className="flex-row justify-center text-center">
        <div className="mt-1 text-m text-white">{props.actor.name}</div>
        <div className="mt-1 text-xs text-gray-500">
          {props.actor.asCharacter}
        </div>
      </div>
    </div>
  );
};

export default ActorCard;
