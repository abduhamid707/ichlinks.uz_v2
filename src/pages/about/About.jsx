import React from "react";
import Links from "../../components/links/Links";
import "./style.css";
import FirstImg from '../../assets/icons/kulol.png';
import SecondImg from '../../assets/icons/gallery-3.png'
import ThirdImg from '../../assets/icons/gallery-1.png'
import BottomImg from '../../assets/icons/gallery-2.png'
import { FaHome } from 'react-icons/fa'
import { FaChevronRight } from 'react-icons/fa'


const About = () => {
  return (
    <div className="page about-page">
      <section className="section_one">
        <div className="overlay">
          <div className="container">
            <div className="left">
              <h2>LOYIHA HAQIDA</h2>
            </div>
            <div className="right">
              <Links />
            </div>
          </div>
        </div>
      </section>
      <section className="section_two">
        <div className="container">
          <div className="txt">
            <h2>O'ZBEKISTON NOMODDIY MADANIY MEROSI</h2>
            <p>
              Ushbu vebsaytni yangilanganligi haqida mamnuniyat bilan sizga
              xabar qilmoqchimiz. Jumladan, vebsaytning dizayni va mazmuni
              yangilandi. Bundan tashqari mobil telefonlar va planshetlar uchun
              yangi koʼrinishi yaratildi. <br /> <br />
              Аmalga oshirilgan ishlar natijasida quyidagi oʼzgartirishlar
              kiritildi: <br /> <br />
              Dizayn. Zamonaviy talablarga javob berish uchun hamda oʼqishda
              qulaylik yaratish uchun vebsaytning rang sxemasiga oʼzgartirish
              kiritildi. Xususan bir rangning uch xil turi tanlandi. Baʼzi bir
              boʼlimlar olib tashlandi yoki almashtirildi. Bundan tashqari
              vebsahifaning yuqori, oʼrta va quyi qismlariga oʼzgartirish
              kiritildi. Bosh sahifa uch qismga boʼlindi. Fon, fon bezagi va
              banner oʼzgartirildi. <br /> <br />
              Nomoddiy madaniy merosning yangilangan roʼyxati. Vebsaytning
              Oʼzbekiston nomoddiy madaniy merosiga taaluqli qismi yangilandi.
              Roʼyxatning oʼzi yangilandi, har bir obʼektga havola berildi, NMM
              sohalarining nomlari qoʼshildi. Bundan tashqari YUNESKO tomonidan
              koʼrib chiqilayotgan yangi NMM obʼektlari haqida maʼlumot
              qoʼshildi. <br /> <br />
              Oforgrafik xatolarni tekshirish. Orfografik xatolarni tekshirish
              tizimi ishga tushirildi. Endilikda har bir foydalanuvchi agar
              matnda xatolikni koʼrsa, bu haqda vebsayt maʼmuriyatiga xabar
              qilishi mumkin. Buning uchun u xatolik boʼlgan joyni belgilab,
              Ctrl+Enter tugmalarini bosishi lozim. Keyin, xatoning mazmunini
              koʼrsatib, bu haqda vebsayt maʼmuriyatga xabar yuborishi kerak.{" "}
              <br /> <br />
              Mobil telefonlar va planshetlar uchun vebsaytning koʼrinishlari.
              Vebsaytdan foydalanishda qulaylik yaratish uchun mobil telefonlar
              va planshetlar uchun vebsaytning yangi koʼrinishlari ishga
              tushirildi. Shuni alohida taʼkidlash kerakki, bu qurilmalarda
              oʼqish uchun vebsaytning faqatgina eng kerakli boʼlimlari
              qoldirildi.
            </p>
          </div>
          <div className="images">
            <img src={FirstImg}/>
            <img src={SecondImg}/>
            <img src={ThirdImg}/>
          </div>
          <div className="bottom_img">
             <img src={BottomImg}/>
          </div>
          <div className="back_navigate">
            <button className="home"><FaHome/> Bosh sahifa</button>
            <button className="next"> <FaChevronRight/> </button>
            <button className="about">Loyiha haqida</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
