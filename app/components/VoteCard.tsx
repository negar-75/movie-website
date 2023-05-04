import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

type VoteCardProps = {
  rate: number;
  voteCount: number;
};

function VoteCard({ rate, voteCount }: VoteCardProps) {
  return (
    <div className="absolute h-[360px] w-[275px] right-16 top-[33%] bg-lightRed flex flex-col items-center text-black">
      <div className=" text-[10rem] font-thin ">{rate}</div>
      <FontAwesomeIcon
        icon={faStar}
        style={{ fontSize: 30, color: "black", cursor: "pointer" }}
        className="-mt-5"
      />
      <span className="text-[2rem] mt-4 ">{voteCount} Vote</span>
    </div>
  );
}

export default VoteCard;
