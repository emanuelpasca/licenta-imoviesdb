import ActorCard from "./ActorCard";

const CastList = (props) => {
  return (
    <div className="flex flex-row">
      {props.cast.map((actor) => (
        <ActorCard key={actor.id} actor={actor}></ActorCard>
      ))}
    </div>
  );
};

export default CastList;
