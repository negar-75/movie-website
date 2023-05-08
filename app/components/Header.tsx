"client side";
import "animate.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
function Header() {
  return (
    <div className="lg:h-[500px] mb-10 h-[100vh] relative  ">
      <video
        id="background-video"
        autoPlay
        loop
        muted
        poster="https://assets.codepen.io/6093409/river.jpg"
        className="absolute left-0 top-0 w-[100%] h-[100%] object-cover -z-2"
      >
        <source
          src="/header.mp4"
          type="video/webm"
        />
      </video>

      <div className="absolute lg:top-40 left-10 text-white max-[640px]:w-[200px] whitespace-pre-line bottom-[300px] z-10">
        <div>
          <p className="lg:text-8xl text-6xl font-semibold animate__animated animate__fadeInDown animate__slow tracking-[.15em] leading-relaxed">
            Enjoy Movie
          </p>
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
      <svg
        viewBox="0 0 192 343"
        fill="none"
        className="svg-draw absolute"
      >
        <path
          d="M21.1411 1.31531C7.47799 1.86183 1.23123 12.3115 1.23123 25.2072C1.23123 46.3128 26.423 54.2245 34.1195 72.696C44.6792 98.0395 20.855 111.947 8.67901 131.172C4.2695 138.135 5.38365 150.07 10.5225 156.318C21.319 169.443 35.3156 178.022 44.8856 192.377C52.4944 203.79 53.0988 210.983 46.4341 222.979C43.3968 228.446 39.3859 232.493 35.8892 237.58C31.2696 244.299 31.6676 252.019 31.7598 259.849C31.9894 279.366 52.4527 294.173 67.8926 303.356C80.3707 310.778 94.086 316.135 108.155 319.579C115.712 321.429 126.43 322.102 133.153 326.584C140.664 331.592 105.479 340.791 102.846 340.964C93.5425 341.574 78.5868 344.233 75.2666 333.442C73.3 327.051 108.186 333.166 112.284 333.885C128.557 336.736 144.46 337.129 160.953 337.129C172.903 337.129 182.327 337.877 191.039 329.165"
          stroke="#B5A9A9"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

export default Header;
