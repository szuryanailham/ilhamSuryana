"use client";
import { IoMenu } from "react-icons/io5";
import { FaBirthdayCake } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { BsPersonFill } from "react-icons/bs";
import CardPortofolio from "./Card";
import ProfileCard from "./profileCard";
import { MdOutlinePerson } from "react-icons/md";
import { HiChartBar } from "react-icons/hi2";
import { FaGraduationCap } from "react-icons/fa";
import { RiSwordFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
const linkImage = [
  {
    src: "./Instagram.svg",
    alt: "Instagram",
    link: "https://www.instagram.com/szuryanilham/",
  },
  {
    src: "./Figma.svg",
    alt: "Figma",
    link: "https://www.behance.net/szuryanailham",
  },
  {
    src: "./Github.svg",
    alt: "Github",
    link: "https://github.com/szuryanailham",
  },
  {
    src: "./Linkin.svg",
    alt: "Linkin",
    link: "https://www.linkedin.com/in/ilham-suryana-03318b265/",
  },
];

const sosmedLogo = (url, alt, urlsosmed) => {
  return (
    <div className="relative w-fit h-fit p-2.5 rounded-lg">
      <Link href={`${urlsosmed}`}>
        <div className="absolute inset-0 bg-gray-300 opacity-10 rounded-lg pointer-events-none"></div>
        <img className="relative w-6 opacity-100" src={url} alt={alt} />
      </Link>
    </div>
  );
};
export default function Home() {
  const [isActive, setActive] = useState(false);

  const navbarActive = () => {
    setActive((prevState) => !prevState);
  };

  const containerVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 },
  };
  return (
    <div>
      <side className={`w-[18%] h-[30%] bg-navColor ${isActive ? "-left-0" : "-left-20"} fixed top-[40%] z-10 rounded-lg p-5 text-[#ADD8E6] md:hidden`}>
        <MdOutlinePerson className="text-2xl mx-auto mb-7"></MdOutlinePerson>
        <HiChartBar className=" text-2xl mx-auto mb-7"></HiChartBar>
        <FaGraduationCap className="text-2xl mx-auto mb-7"></FaGraduationCap>
        <RiSwordFill className=" text-2xl mx-auto mb-7"></RiSwordFill>
      </side>

      <div className="relative text-white">
        {/* sidebar */}
        {/* end sidebar */}
        <img src="./efect.svg" alt="light effect" />
        <div className="absolute top-5 left-0 right-0">
          {/* Navbar */}
          <nav className="w-[95%] mx-auto h-fit bg-navColor  rounded-lg">
            <div className=" w-full p-5 flex justify-between item-center">
              <h1 className="text-md md:text-xl font-bold">Szuryana</h1>
              {/* LOGO MENU */}
              <div
                onClick={() => {
                  () => {
                    navbarActive;
                  };
                }}
                className="transition duration-200 ease-in-out transform hover:scale-110 hover:text-slate-300 md:hidden"
              >
                <IoMenu className="text-3xl" />
              </div>
              {/* END LOGO MENU */}

              {/* menu list  */}
              <ul className="md:flex gap-5 text-sm p-2 font-bold hidden ">
                <li>Profile</li>
                <li>Skill</li>
                <li>Graduate</li>
                <li>Project</li>
              </ul>
              {/* end menu list */}
            </div>
          </nav>
          {/* end Navbar */}

          {/* HEADER PROFILE */}
          <section className=" w-[90%] mx-auto md:flex md:flex-row-reverse lg:justify-center md:mt-5 ">
            {/* image profile */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                ease: "linear",
                duration: 1,
                y: { duration: 0.5 },
              }}
              className="w-full lg:w-1/2 mx-auto mt-5"
            >
              <img className="mx-auto w-[75%] lg:w-[60%] mb-5" src="./profile.svg" alt="my profile" />
              <div className="text-center m-3 font-normal">
                <h1 className="text-2xl font-poppins">HEI, I AM SZURYANA</h1>
                <p className="font-thin italic">@ilhamSzuryana</p>
              </div>
            </motion.div>

            <motion.div
              className="lg:w-1/2 "
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                ease: "linear",
                duration: 1,
                y: { duration: 1 },
              }}
            >
              {/* Biografy */}
              <ul className="mt-6 md:mt-10 mx-5 font-inter font-light">
                <li className="item">
                  <div className="flex gap-3 md:text-sm">
                    <FaBirthdayCake />
                    <span>09.01.2002</span>
                  </div>
                  <div className="flex gap-3 mt-2 md:text-sm">
                    <MdWork className="text-xl" />
                    <span>Front-End Developer</span>
                  </div>
                  <div className="flex items-center gap-3 md:text-sm">
                    <BsPersonFill className="text-2xl mt-2" />
                    <span className="mt-2">Smart worker</span>
                  </div>
                </li>
                {/* Tambahkan <motion.li> lainnya sesuai kebutuhan */}
              </ul>
              {/* end of Biografy */}

              {/* deskripsi diri */}
              <div className="p-5 leading-6">
                <p className="max-w-prose text-[14px] opacity-75 md:text-sm">Hello! My name is Ilham Suryana, but you can call me Ilham. Currently, I am a 6th-semester student who is very enthusiastic about programming.</p>
                <p className="mt-3 max-w-prose text-[14px] opacity-75">
                  I have a deep interest in web development, both backend and frontend. Over the past two years, I have been actively learning and contributing to various web development projects.
                </p>
              </div>
              {/* end deskripsi diri */}

              {/* social media */}
              <motion.ul variants={containerVariants} initial="hidden" animate="visible" className="flex justify-evenly m-2 lg:w-[70%]">
                {linkImage.map((item, index) => (
                  <motion.li variants={itemVariants} key={index}>
                    {sosmedLogo(item.src, item.alt, item.link)}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </section>
          {/* END HEADER PROFILE */}

          {/* end image profile */}
          <motion.section
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              ease: "linear",
              duration: 1,
              y: { duration: 1 },
            }}
            className="w-[90%] mx-auto"
          >
            {/* Myskills */}
            <h1 className="text-2xl font-poppins text-center mt-10 p-2 md:text-3xl mb-3">My Skills</h1>
            {/* GRID SKILL */}
            <section class="md:w-[90%] lg:w-[75%] md:mx-auto grid grid-cols-1 md:grid-cols-4 gap-3 p-4">
              {/*  ================= React ==============*/}
              <div class="bg-[#143061] w-full p-4 h-[90px] text-white rounded-xl col-span-1">
                {/* image */}
                <div>
                  <img src="./react.svg" alt="React" />
                  <p className="mt-3 text-xs">React</p>
                </div>
                {/* text */}
              </div>
              {/*  ==================== TAILWINDS ============ */}
              <div class="bg-tailwind-gradient p-4 h-[90px] text-white rounded-xl">
                {/* image */}
                <div>
                  <img src="./tailwinds.svg" alt="React" />
                  <p className="mt-3 text-xs">Tailwinds</p>
                </div>
                {/* text */}
              </div>
              {/*  ==================== NEXT ============ */}
              <div class="bg-next-color col-span-2 md  p-5 rounded-xl text-white h-[100px]">
                <img src="./next.svg" alt="React" />
                <p className="mt-3 text-xs">Next.js </p>
              </div>

              <div className="grid grid-flow-col gap-4 col-span-2">
                {/*  ==================== Figma ============ */}
                <div className="row-span-5 bg-figma h-[230px] text-white flex flex-col items-start rounded-xl p-5">
                  <img src="./Figma2.svg" alt="React" />
                  <p className="mt-[120px] text-right">Figma</p>
                </div>
                {/*  ==================== Boostrap ============ */}
                <div className="col-span-2 bg-bootstrap text-black flex flex-col items-center justify-center rounded-xl p-4 h-[100px]">
                  <img src="./Bootsrap.svg" alt="React" />
                  <p className="text-black">Boostrap</p>
                </div>
                {/*  ==================== Inertia ============ */}
                <div className="row-span-2 md:col-span-2 col-span-2 h-[100px] bg-inertia text-white rounded-xl p-4 items-end">
                  <img className="w-10" src="./Inertia.svg" alt="React" />
                  <p className=" text-right mt-2">Inertia</p>
                </div>
                {/*  ==================== Laravel  ============ */}
              </div>
              <div class="bg-laravel p-5 col-span-2 rounded-xl text-white h-[100px]">
                <img src="./Laravel.svg" alt="React" />
                <p className="mt-3 text-xs">Laravel</p>
              </div>
            </section>
          </motion.section>
          {/* END GRID SKILL */}

          {/* MY EDUCATION  */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              ease: "linear",
              duration: 2,
              y: { duration: 1 },
            }}
            className="w-[90%] mx-auto"
          >
            <h1 className="text-2xl font-poppins text-center mt-3 p-2">My Education</h1>
            <p className="text-center font-thin px-7 max-w-prose text-[14px] opacity-75 mb-2 md:mx-auto">"The following is the educational background I have pursued and am currently pursuing to deepen my knowledge as a web developer."</p>
            {/* Container */}
            <div className="w-full h-[450px] bg-[#121B30] md:h-[500px] rounded-lg relative mt-5 px-2 pt-4">
              <div className="w-[80%] mx-auto">
                <img className="absolute w-[75px] md:w-[170px] top-0 left-10" src="/item.svg" alt="item" />
                <div className="mt-12 md:w-[80%] mx-auto">
                  <div>
                    <div class="flex flex-row p-3">
                      <div class="mt-[200px] md:mt-[250px]">
                        <h1 className="text-right font-bold mb-1 md:text-xl">Tazakka Boarding School</h1>
                        <p className="font-light text-right  text-[10px] md:text-[13px] w-[100px] md:w-[180px]"> I attended middle school and high school at a boarding school for six years.</p>
                      </div>
                      <div class="basis-1/2 md:basis-[25%] lg:basis-[15%]">
                        <img className="mx-auto mt-[80px]" src="/Line.svg" alt="Line" />
                      </div>
                      <div className="">
                        <h1 className="text-left mb-1 font-bold md:text-xl">Universitas Ahmad Dahlan</h1>
                        <p className="font-light text-[10px] md:text-[13px]  text-left w-[100px] md:w-[180px] lg:w-[200px]">I started studying computer science with a focus on web development in 2021</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end container */}
          </motion.section>
          {/* END MY EDUCATION */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              ease: "linear",
              duration: 2,
              y: { duration: 1 },
            }}
            className="w-[90%] mx-auto mt-10"
          >
            <h1 className="text-2xl font-poppins text-center mt-3 p-2">My Experience</h1>
            <p className="text-center font-thin px-7 max-w-prose text-[14px] opacity-75 mb-2 md:mx-auto">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem quis provident.</p>
            {/* CARD PORTOFOLIO */}
            <div className="flex flex-col md:flex-row flex-wrap md:gap-5 mx-auto mt-10 justify-center">
              <CardPortofolio
                image={"/project1.png"}
                linkUrl={"https://ruangedit.com/"}
                title={"Ruang Edit Official website"}
                description={"Website Ruang Edit adalah platform yang dirancang untuk memperkenalkan komunitas dan kelas Ruang Edit kepada masyarakat umum. Kami bergerak di bidang kreatif seperti desain, fotografi, dan videografi."}
              />

              <CardPortofolio
                image={"/project2.png"}
                linkUrl={"https://cahayawaskithajogja.com/"}
                title={"Rental mobil Cahaya Waskitha Jogja website"}
                description={" website Rental Mobil Cahaya Waskitha Jogja menyediakan berbagai pilihan mobil dengan harga terjangkau dan pelayanan terbaik siap mudahkan perjalan di jogja anda."}
              />

              <CardPortofolio
                image={"/project3.png"}
                linkUrl={"https://gallerya-szuryanailham.netlify.app/"}
                title={"Gallerya photo website"}
                description={" website penyedia photo yang dibangun dengan menggunakan react dan akses resmi API unsplah, salah satu perusahaan yang bergerak dibidang photografy."}
              />

              {/* <CardPortofolio
                image={"/project4.png"}
                link={"https://gallerya-szuryanailham.netlify.app/"}
                title={"Bioskop API website"}
                description={"website yang menyediakan rekomendasi film yang trand pada saat ini , selain menampilkan daftar film terupdate , website ini bisa digunakan untuk mencari dan melihat deskripsi film."}
              /> */}
            </div>
            {/* END CARD PORTOFOLIO */}
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              ease: "linear",
              duration: 2,
              y: { duration: 1 },
            }}
            className="w-[90%] mx-auto mt-20"
          >
            <ProfileCard />
          </motion.section>
          <img className="absolute w-full inset-x-0 bottom-0" src="/light.svg" alt="lighting image" />
        </div>
      </div>
    </div>
  );
}
