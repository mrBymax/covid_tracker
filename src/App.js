import React from "react";

import { Cards, CountryPicker, Chart } from "./components";
import { fetchData } from "./api/";
import styles from "./App.module.css";

import image from "./images/image.png";
import Footer from "./components/Footer/footer";

import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  };

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <ReactJkMusicPlayer
          autoPlay={true}
          glassBg={true}
          defaultVolume={0.25}
          responsive={true}
          theme={"auto"}
          playIndex
          showMediaSession
          showLyric = { false }
          showThemeSwitch = { false }
          preload={true}
          audioLists={[
            {
              name: "SLOW DANCING IN THE DARK",
              musicSrc:
                "https://res.cloudinary.com/dyqvrt9qg/video/upload/v1610327929/videoplayback_ad8lln.mp4",
              singer: "Joji",
            },
            {
              name: "The Nights",
              musicSrc:
                "https://res.cloudinary.com/dyqvrt9qg/video/upload/v1610329739/videoplayback_tmgme0.mp4",
              singer: "Avicii",
            },
            {
              name: "The Ways",
              musicSrc:
                "https://res.cloudinary.com/dyqvrt9qg/video/upload/v1610329968/videoplayback-2_t8d74h.mp4",
              singer: "Khalid",
            },
            {
              name: "Ordinary people",
              musicSrc:
                "https://res.cloudinary.com/dyqvrt9qg/video/upload/v1610330151/videoplayback-3_o4dwzj.mp4",
              singer: "Bugzy Malone Feat. Jp Cooper",
            },
            {
              name: "Colors",
              musicSrc:
                "https://res.cloudinary.com/dyqvrt9qg/video/upload/v1610330477/videoplayback-4_e26obk.mp4",
              singer: "Jason Derulo",
            },
            {
              name: "Window",
              musicSrc: "https://res.cloudinary.com/dyqvrt9qg/video/upload/v1610330684/videoplayback-5_bjwid5.mp4",
              singer: "Still Woozy",
              defaultVolume: "0.15"
            },
          ]}
        />

        <img className={styles.image} src={image} alt="ISIS A.MALIGNANI" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
        <Footer />
      </div>
    );
  }
}

export default App;
