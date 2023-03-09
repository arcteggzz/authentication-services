import React from "react";
import styles from "./Advert.module.scss";
import SpotifyAdvert from "../assets/spotifyAdvert.png";
import Image from "next/image";

function Advert() {
  return (
    <div className={styles.advert}>
      <Image
        src={SpotifyAdvert}
        alt="Picture of the author"
        className={styles.imageHolder}
      />
    </div>
  );
}

export default Advert;
