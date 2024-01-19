import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SocialMediaIcon({ brand }: { brand: IconProp }) {
  return (
    <div>
      <FontAwesomeIcon
        icon={brand}
        style={{ fontSize: 30, color: "white", cursor: "pointer" }}
      />
    </div>
  );
}

export default SocialMediaIcon;
