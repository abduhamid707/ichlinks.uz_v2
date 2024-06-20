import React, { useState, useEffect, useRef } from "react";
import "./style.css";
import { GrNext, GrPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";
import FacebookImg from "../../assets/icons/facebook.png";
import TwitterImg from "../../assets/icons/twitter.png";
import TelegramImg from "../../assets/icons/telegram.png";
import InstagramImg from "../../assets/icons/instagram.png";
import YoutubeImg from "../../assets/icons/youtube.png";
import PinterestImg from "../../assets/icons/pinterest.png";
import BgIconImg from "../../assets/icons/Group.svg";
import MapImg from "../../assets/icons/map.png";
import { CgArrowTopRight } from "react-icons/cg";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaFacebook, FaInstagram, FaPlay, FaTelegram, FaTwitter, FaYoutube } from "react-icons/fa";
import FirstGallery from "../../assets/icons/gallery-1.png";
import SecondGallery from "../../assets/icons/gallery-2.png";
import HomeIMg from "../../assets/icons/home-section-1.png"
import ThirdGallery from "../../assets/icons/gallery-3.png";
import { FaCalendar } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import FirstPartner from '../../assets/icons/partner-1.png'
import SecondPartner from '../../assets/icons/partner-2.png'
import ThirdPartner from '../../assets/icons/partner-3.png'
import Links from "../../components/links/Links";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import HomeNewsCard from "../../components/HomeNewsCard/HomeNewsCard";
import axios from "axios";
import VideoCardGal from "../../components/VideoCard/VideoCardGal";
const Home = () => {
  const [slidesData, setSlidesData] = useState([]);
  const [videosData, setVideosData] = useState([]);
  const [currentBackground, setCurrentBackground] = useState(null);
  const swiperRef = useRef(null);
  const fetchSliderData = async () => {
    try {
      const response = await axios.get('http://ichlinks.uz/api/site/sliders');
      const data = response.data;
      if (data.success && data.result.rows.length > 0) {
        const formattedData = data.result.rows.map(row => ({
          img: HomeIMg,
          title: row.title_uz || row.title_ru || row.title_en,
          description: row.text_uz || row.text_ru || row.text_en,
          buttonText: "Batafsil", // Customize as needed
        }));
        setSlidesData(formattedData);
        setCurrentBackground(formattedData[0].img); // Set initial background image
      } else {
        throw new Error('No slider data found');
      }
    } catch (error) {
      console.error('Error fetching slider data:', error);
    }
  };
  const fetchVideosData = async () => {
    try {
      const response = await axios.get('http://ichlinks.uz/api/site/videos');
      const data = response.data;
      if (data.success && data.result.videos.rows.length > 0) {
        setVideosData(data.result.videos.rows);
      } else {
        throw new Error('No slider data found');
      }
    } catch (error) {
      console.error('Error fetching slider data:', error);
    }
  };
  useEffect(() => {
    fetchSliderData(); // Fetch slider data when component mounts
    fetchVideosData();
  }, []);

  // const slidesData = [
  //   {
  //     img: HomeIMg, // replace with the correct path to the image
  //     title: "TV channels and movies wherever there is internet!",
  //     description: "Eng yaxshi madaniy meroslar",
  //     buttonText: "Batafsil",
  //   }, {
  //     img: HomeIMg, // replace with the correct path to the image
  //     title: "TV channels and movies wherever there is internet!",
  //     description: "Eng yaxshi madaniy meroslar",
  //     buttonText: "Batafsil",
  //   },
  //   {
  //     img: HomeIMg, // replace with the correct path to the image
  //     title: "TV channels and movies wherever there is internet!",
  //     description: "Eng yaxshi madaniy meroslar",
  //     buttonText: "Batafsil",
  //   }, {
  //     img: HomeIMg, // replace with the correct path to the image
  //     title: "TV channels and movies wherever there is internet!",
  //     description: "Eng yaxshi madaniy meroslar",
  //     buttonText: "Batafsil",
  //   },
  //   // Add more slide data here
  // ];
  const handleSlideChange = (swiper) => {
    const { activeIndex } = swiper; // Get the active slide index
    setCurrentBackground(slidesData[activeIndex]?.img);
  };
  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div className="page home-page">
      <section className="section_one" style={{ backgroundImage: `url(${currentBackground})` }}>
        <div className="gradient-overlay"></div>
        <div className="container">
          <Swiper
            spaceBetween={50}
            slidesPerView={'auto'}
            centeredSlides={false}
            slidesOffsetBefore={0}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            navigation={false}
            modules={[Autoplay, Navigation]}
            onSlideChange={handleSlideChange}
            ref={swiperRef}
          >
            {
              slidesData.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className="overlay_sider">
                    <div className="top_object">
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                          <div className="left">
                            <p>Eng yaxshi madaniy meroslar </p>
                            <h2>{slide.title} Lorem, ipsum dolor sit amet consectetur adipisicing.</h2>
                            <div className="buttons">
                              <button className="more">{slide.buttonText}</button>
                            </div>
                          </div>
                          {/* .. */}
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 ">
                          <div className="right">
                            <Links />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))
            }
          </Swiper>
          {/* <div className="slider-buttons">
            <button className="custom-button" onClick={handlePrev}><GrPrevious /></button>
            <button className="custom-button" onClick={handleNext}><GrNext /></button>
          </div> */}
        </div>
      </section>

      <section className="section-two">
        <div className="container">
          <div className="btns">
            <button>NMM MILLIY RO'YXATI </button>
            <button className="active">
              YUNESKONING REPREZENTATIV OB'EKTLARI
            </button>
            <button>YUNESKO TOMONIDAN KO'RIB CHIQILAYOTGAN OB'EKTLAR</button>
          </div>

          <div className="about_card_wrapper">
            <Swiper
              spaceBetween={50}
              slidesPerView={'auto'}
              centeredSlides={false}
              slidesOffsetBefore={0}
              autoplay={{ delay: 3000 }}
              pagination={{ clickable: true }}
              navigation={false}
              modules={[Autoplay]}
              onSlideChange={handleSlideChange}
              ref={swiperRef}
            >
              <SwiperSlide>
                <div className="about_card">
                  <img src="https://picsum.photos/300/300" alt="image" />
                  <div className="right">
                    <div className="top">
                      <h3 className="title">Boysun tumanining madaniy muhiti</h3>
                      <p>
                        Nomzodnoma: Nomzodnoma hujjati Oʼzbekiston tomonidan taqdim
                        qilingan Qaror: Hukumatlararo qoʼmitaning 3.COM sonli qarori
                        Kiritilgan yil: 2008 y. Nomzodnoma hujjati (YuNESKO): Havola
                      </p>
                    </div>
                    <button className="bottom_btn">Batafsil</button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="about_card">
                  <img src="https://picsum.photos/300/300" alt="image" />
                  <div className="right">
                    <div className="top">
                      <h3 className="title">Boysun tumanining madaniy muhiti</h3>
                      <p>
                        Nomzodnoma: Nomzodnoma hujjati Oʼzbekiston tomonidan taqdim
                        qilingan Qaror: Hukumatlararo qoʼmitaning 3.COM sonli qarori
                        Kiritilgan yil: 2008 y. Nomzodnoma hujjati (YuNESKO): Havola
                      </p>
                    </div>
                    <button className="bottom_btn">Batafsil</button>
                  </div>
                </div>
              </SwiperSlide>
              {/* Qo'shimcha slayderlar qo'shishingiz mumkin */}
            </Swiper>

          </div>
        </div>
      </section>
      <section className="section-three">
        <div className="container">
          <h2 className="heading">NOMODIY MADANIY MEROS FILIALLARI</h2>
          <div className="contents">
            <div className="left">
              <img src={MapImg} />
            </div>
            <div className="right">
              <h4 className="title">Toshkent shahri</h4>
              <div className="statistic">
                <div>
                  <p>Nomoddiy Madaniy Meros</p>
                  <h3>1</h3>
                </div>
                <div>
                  <p>Nomoddiy Madaniy Meros</p>
                  <h3>87.2%</h3>
                </div>
                <div>
                  <p>Nomoddiy Madaniy Meros</p>
                  <h3>46</h3>
                </div>
                <div>
                  <p>Nomoddiy Madaniy Meros</p>
                  <h3>1 446</h3>
                </div>
              </div>
              <button className="bottom_btn">Batafsil</button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-four">
        <div className="container">
          <div className="top">
            <h2>HABARLAR</h2>
            <button>BARCHA HABARLAR</button>
          </div>
          <p className="last_news">ENG YANGI HABARLAR</p>
          <div className="news">
            <div className="row">
              <HomeNewsCard />
              <HomeNewsCard />
              <HomeNewsCard />
              <HomeNewsCard />
              <HomeNewsCard />
              <HomeNewsCard />
            </div>


          </div>
        </div>

      </section>

      <section className="section-five">
        <div className="container">
          <div className="top">
            <div className="left">
              <h2>So'nggi maqolalar va kitoblar</h2>
              <p>Eng zor fotosuratlar</p>
            </div>
            <div className="right">
              <button>Barcha maqolalar va kitoblar</button>
            </div>
          </div>

        </div>
        <div className="container">
          <div className="gallery_wrapper">
            <div className="gallery_card">
              <div className="left">
                <img src="https://picsum.photos/id/41/240/148" />
              </div>
              <div className="right">
                <div className="texts">
                  <h3 className="heading">
                    RISOLA: Oʼzbekiston nomoddiy madaniy merosi roʼyxati
                  </h3>
                  <h3 className="desc">
                    Ushbu risola Oʼzbekiston mutaxassislari tomonidan "Nomoddiy
                    madaniy merosni muhofaza qilish toʼgʼrisida"gi YUNESKO
                    konventsiyasiga muvofiq,
                  </h3>
                </div>
                <div className="more_btn">
                  <CgArrowTopRight />
                </div>
              </div>
            </div>
            <div className="gallery_card">
              <div className="left">
                <img src="https://picsum.photos/id/41/240/148" />
              </div>
              <div className="right">
                <div className="texts">
                  <h3 className="heading">
                    RISOLA: Oʼzbekiston nomoddiy madaniy merosi roʼyxati
                  </h3>
                  <h3 className="desc">
                    Ushbu risola Oʼzbekiston mutaxassislari tomonidan "Nomoddiy
                    madaniy merosni muhofaza qilish toʼgʼrisida"gi YuNESKO
                    konventsiyasiga muvofiq,
                  </h3>
                </div>
                <div className="more_btn">
                  <CgArrowTopRight />
                </div>
              </div>
            </div>
            <div className="gallery_card">
              <div className="left">
                <img src="https://picsum.photos/id/41/240/148" />
              </div>
              <div className="right">
                <div className="texts">
                  <h3 className="heading">
                    RISOLA: Oʼzbekiston nomoddiy madaniy merosi roʼyxati
                  </h3>
                  <h3 className="desc">
                    Ushbu risola Oʼzbekiston mutaxassislari tomonidan "Nomoddiy
                    madaniy merosni muhofaza qilish toʼgʼrisida"gi YuNESKO
                    konventsiyasiga muvofiq,
                  </h3>
                </div>
                <div className="more_btn">
                  <CgArrowTopRight />
                </div>
              </div>
            </div>
            <div className="gallery_card">
              <div className="left">
                <img src="https://picsum.photos/id/41/240/148" />
              </div>
              <div className="right">
                <div className="texts">
                  <h3 className="heading">
                    RISOLA: Oʼzbekiston nomoddiy madaniy merosi roʼyxati
                  </h3>
                  <h3 className="desc">
                    Ushbu risola Oʼzbekiston mutaxassislari tomonidan "Nomoddiy
                    madaniy merosni muhofaza qilish toʼgʼrisida"gi YuNESKO
                    konventsiyasiga muvofiq,
                  </h3>
                </div>
                <div className="more_btn">
                  <CgArrowTopRight />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-six">
        <div className="container">
          <div className="row">

            <div className="col-lg-6 col-md-6 col-sm-12 mx-auto">
              <div className="texts">
                <h3>AUDOMATERIALLAR</h3>
                <p>ENG ZOR FOTOSURATLAR</p>
              </div>
              <button>BARCHA AUDOMATERIALLAR</button>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 mx-auto ">
              <div className="right">

                <div className="category">
                  <AiOutlineYoutube />
                  <p>QARSAK</p>
                </div>
                <div className="category">
                  <AiOutlineYoutube />
                  <p>BAXSHICHILIK SAN'ATI</p>
                </div>
                <div className="category">
                  <AiOutlineYoutube />
                  <p>XALFACHILIK</p>
                </div>
                <div className="category">
                  <AiOutlineYoutube />
                  <p>QARSAK</p>
                </div>
                <div className="category">
                  <AiOutlineYoutube />
                  <p>QARSAK</p>
                </div>
                <div className="category">
                  <AiOutlineYoutube />
                  <p>BAXSHICHILIK SAN'ATI</p>
                </div>
                <div className="category">
                  <AiOutlineYoutube />
                  <p>XALFACHILIK</p>
                </div>
                <div className="category">
                  <AiOutlineYoutube />
                  <p>QARSAK</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-seven">
        <div className="container">


          <div className="top">
            <div className="left">
              <h3>FOTOSURATLAR</h3>
              <p>ENG ZOR FOTOSURATLAR</p>
            </div>
            <div className="right">
              <button>BARCHA FOTOSURATLAR</button>
            </div>
          </div>

          <div className="images_wrp">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12 mx-auto">
                  <img src={FirstGallery} className="w-100" />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 mx-auto">
                  <img src={ThirdGallery} className="w-100" />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 mx-auto">
                  <img src={ThirdGallery} className="w-100" />
                </div>
              </div>
            </div>
          </div>

          <div className="subscribe_section">
            <div className="top">
              <div className="left">
                <h5>
                  RESPUBLIKA MILLIY AKSIYA VA QIZIQCHILIK SAN'AT MARKAZI
                  YANGILIKLARIGA OBUNA BO'LING
                </h5>
                <form>
                  <input placeholder="NASIROVJAMA@GMAIL.COM" />
                  <button>OBUNA BO'LISH</button>
                </form>
              </div>
              <div className="right">
                <h5>SHUNINGDEK, BIZNI TARMOQLARDA KUZATIB BORING</h5>
                <div className="links">
                  <FaInstagram />
                  <FaFacebook />
                  <FaTwitter />
                  <FaTelegram />
                  <FaYoutube />

                </div>
              </div>
            </div>
            <p className="desc_bottom">
              milliy askiya va qiziqchilik san’ati markazi yangiliklariga obuna
              bo'ling va elektron pochtangizga bir oz tarix qo'shing. Spam va
              yolg'on ma'lumotlar yo'q. Faqat milliy askiya va qiziqchilik san’ati
              markazi yangiliklari!
            </p>
          </div>
        </div>
      </section>

      <section className="section-eight">
        <div className="container">

          <div className="top">
            <div className="left">
              <h3>VIDEO GALEREYA</h3>
              <p className="last_vds">ENG OXIRGI VIDEOLAR</p>
            </div>
            <div className="right">
              <button>BARCHA VIDEOLAR</button>
            </div>
          </div>
          <div className="vds_wrp">

            {videosData.slice(0,4).map((video, index) => (
              <VideoCardGal key={index} video={video} />
            ))}

          </div>
        </div>

      </section>



      <section className="section-nine">
        <div className="container">
          <div className="partners">
            <img src={FirstPartner} />
            <img src={SecondPartner} />
            <img src={ThirdPartner} />
            <img src={FirstPartner} />
            <img src={SecondPartner} />
            <img src={ThirdPartner} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
