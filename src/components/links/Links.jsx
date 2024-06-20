import React from "react";
import FacebookImg from "../../assets/icons/facebook.png";
import TwitterImg from "../../assets/icons/twitter.png";
import TelegramImg from "../../assets/icons/telegram.png";
import InstagramImg from "../../assets/icons/instagram.png";
import YoutubeImg from "../../assets/icons/youtube.png";
import PinterestImg from "../../assets/icons/pinterest.png";
import './style.css'

const Links = () => {
  return (
    <div className="links">
      <button>
        <img src={FacebookImg} alt="facebook" />
      </button>
      <button>
        <img src={TwitterImg} alt="twitter" />
      </button>
      <button>
        <img src={TelegramImg} alt="telegram" />{" "}
      </button>
      <button>
        <img src={InstagramImg} alt="instagram" />
      </button>
      <button>
        <img src={YoutubeImg} alt="youtube" />
      </button>
      <button>
        <img src={PinterestImg} alt="pinterest" />
      </button>
    </div>
  );
};

export default Links;
