import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

type VoteCardProps = {
  rate: number;
  voteCount: number;
};

function VoteCard({ rate, voteCount }: VoteCardProps) {
  return (
    <div className="absolute  right-[5%] px-[3em] py-[2em] bg-lightRed flex flex-col items-center text-black lg:px-[2em] lg:py-[1em] top-[36%] lg:right-16">
      <div className=" lg:text-[10rem] font-thin text-[4rem]">{rate}</div>
      <FontAwesomeIcon
        icon={faStar}
        className="lg:-mt-5 text-black  lg:text-[40px] text-[30px]"
      />
      <span className="lg:text-[2rem] mt-4 ">{voteCount} Vote</span>
    </div>
  );
}

export default VoteCard;
