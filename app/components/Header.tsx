import "animate.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
function Header() {
  return (
    <div className="h-[500px] mb-10 ">
      <div
        className="relative flex items-center 
        justify-center h-full overflow-hidden rounded-2xl"
      >
        <video
          id="background-video"
          autoPlay
          loop
          muted
          poster="https://assets.codepen.io/6093409/river.jpg"
          className="absolute  "
        >
          <source
            src="/header.mp4"
            type="video/webm"
          />
        </video>
        <div className="absolute z-40 top-40 left-10 text-white ">
          <div className="">
            <h2 className="text-8xl animate__animated animate__fadeInDown animate__slow">
              Enjoy Movie
            </h2>
          </div>
        </div>
        <div
          className="absolute z-40 bottom-10 right-10 text-white border-2 px-10 py-3
         rounded-full flex items-center gap-5 cursor-pointer animate__animated animate__fadeInRight"
        >
          <span>Watch more</span>
          <FontAwesomeIcon
            icon={faCirclePlay}
            style={{ fontSize: 20 }}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
