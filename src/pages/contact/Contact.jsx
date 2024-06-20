import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import Links from "../../components/links/Links";
import { CiLocationOn } from "react-icons/ci";
import { FaClock, FaSubway, FaPhone, FaRoute, FaBus, FaHome, FaChevronRight } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import "./style.css";
const Contact = () => {
  const [contactInfo, setContactInfo] = useState(null);
  let base_url_ichlinks = 'http://ichlinks.uz';
  useEffect(() => {
    fetch(`${base_url_ichlinks}/api/site/contact`)
      .then(response => response.json())
      .then(data => setContactInfo(data.result))
      .catch(error => console.error("Error fetching contact data:", error));
  }, [base_url_ichlinks]);

  if (!contactInfo) {
    return <div>Loading...</div>;
  }

  const position = {
    lat: parseFloat(contactInfo.latitude),
    lng: parseFloat(contactInfo.longitude)
  };

  return (
    <div className="page contact-page">
      <section className="section_one">
        <div className="overlay">
          <div className="container">
            <div className="left">
              <h2>ALOQA</h2>
            </div>
            <div className="right">
              <Links />
            </div>
          </div>
        </div>
      </section>
      <section className="section_two">
        <div className="container">
          <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
            <GoogleMap
              mapContainerStyle={{ height: "400px", width: "100%" }}
              center={position}
              zoom={13}
            >
              <Marker position={position} />
            </GoogleMap>
          </LoadScript>
          <div className="contacts_">
            <div className="element">
              <h4>ADRES</h4>
              <ul>
                <li>
                  <CiLocationOn /> {contactInfo.address_uz}
                </li>
              </ul>
            </div>
            <div className="element">
              <h4>ISH VAQTI</h4>
              <ul>
                <li>
                  <FaClock /> Ish kuni: {contactInfo.weekday}
                </li>
                <li>&nbsp; &nbsp; &nbsp; Ish vaqti: {contactInfo.work_start_time} - {contactInfo.work_end_time}</li>
                <li>&nbsp; &nbsp; &nbsp; Dam olish kuni: {contactInfo.weekend}</li>
              </ul>
            </div>
            <div className="element">
              <h4>KONTAKTLAR</h4>
              <ul>
                <li>
                  <FaPhone /> Tel: {contactInfo.phone_number}
                </li>
                <li>&nbsp; &nbsp; &nbsp; Faks: {contactInfo.fax}</li>
                <li>
                  <MdOutlineEmail /> E-pochta: {contactInfo.email}
                </li>
              </ul>
            </div>
            <div className="element">
              <h4>MALUMOT NUQTASI</h4>
              <ul>
                <li>
                  <FaRoute /> {contactInfo.reference_point_uz}
                </li>
              </ul>
            </div>
            <div className="element">
              <h4>AVTOBUSLAR</h4>
              <li>
                <FaBus /> {contactInfo.bus}
              </li>
            </div>
            <div className="element">
              <h4>METRO</h4>
              <li>
                <FaSubway /> {contactInfo.metro_uz}
              </li>
            </div>
          </div>
          <div className="back_navigate">
            <button className="home">
              <FaHome /> Bosh sahifa
            </button>
            <button className="next">
              <FaChevronRight />
            </button>
            <button className="about">Aloqa</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
