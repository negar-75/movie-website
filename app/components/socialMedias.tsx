import React from "react";
import SocialMediaIcon from "./socialMediaIcon";
import {
  faGoogle,
  faApple,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

function SocialMedias() {
  return (
    <div className="flex gap-5">
      <SocialMediaIcon brand={faGoogle as IconProp} />
      <SocialMediaIcon brand={faApple as IconProp} />
      <SocialMediaIcon brand={faFacebook as IconProp} />
    </div>
  );
}

export default SocialMedias;
