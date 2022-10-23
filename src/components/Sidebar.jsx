import React from "react";
import {
  FaSuitcase,
  FaHome,
  FaMusic,
  FaVolumeUp,
  FaMicrophone,
  FaImages,
  FaStar,
  FaCommentAlt,
} from "react-icons/fa";

const SidebarLink = ({ icon, linkName }) => {
  return (
    <div className='flex font-bold transition-all ease-linear duration-300 pb-2 text-2xl hover:text-qWhite'>
      <span className='mt-1'>{icon}</span>
      <span className='ml-5 cursor-pointer hidden lg:block'>{linkName}</span>
    </div>
  );
};

const Sidebar = () => {
  return (
    <nav className='h-full fixed top-0 left-0 bg-qBlack overflow-x-hidden pt-5 flex flex-col items-center text-qPink transition-all duration-300 w-0 md:w-32 lg:w-60 ease-linear'>
      <h1 className='lg:text-5xl font-bold mt-10 text-3xl transition-all duration-300 ease-linear'>AHR</h1>
      <div className='h-3 lg:w-24 rounded-sm mt-2 mb-5 bg-qPink transition-all duration-300 ease-linear w-1/2'>
        <div className='w-1/2 h-3 rounded-sm bg-qBlack border-2 border-qPink hidden lg:block'></div>
      </div>
      <div>
        <SidebarLink icon={<FaHome />} linkName={"home"} />
        <SidebarLink icon={<FaSuitcase />} linkName={"services"} />
        <SidebarLink icon={<FaVolumeUp />} linkName={"demos"} />
        <SidebarLink icon={<FaMicrophone />} linkName={"studio"} />
        <SidebarLink icon={<FaImages />} linkName={"roles"} />
        <SidebarLink icon={<FaStar />} linkName={"reviews"} />
        <SidebarLink icon={<FaCommentAlt />} linkName={"contact"} />
      </div>
    </nav>
  );
};

export default Sidebar;
