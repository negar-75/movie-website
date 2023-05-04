import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <>
      <div className="flex items-center h-[250px] flex-col justify-center gap-10 relative">
        <div className="flex h-px bg-light w-[90%]"></div>
        <div className="flex gap-4">
          <FontAwesomeIcon
            icon={faFacebook as IconProp}
            style={{ fontSize: 30, color: "#ffff", cursor: "pointer" }}
          />
          <FontAwesomeIcon
            icon={faInstagram as IconProp}
            style={{ fontSize: 30, color: "#ffff", cursor: "pointer" }}
          />
          <FontAwesomeIcon
            icon={faTwitter as IconProp}
            style={{ fontSize: 30, color: "#ffff", cursor: "pointer" }}
          />
        </div>
        <div className="text-white flex justify-center items-center flex-col gap-3">
          <div>
            <span>Info</span> <span className="text-red-500">•</span>{" "}
            <span>Support</span> <span className="text-red-500">•</span>{" "}
            <span>Marketing</span>
          </div>
          <div>
            <span>Terms of Use</span> <span className="text-red-500">•</span>{" "}
            <span>Privacy Policy</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
