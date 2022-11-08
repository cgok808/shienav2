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

const SidebarLink = ({ icon, linkName, hrefTo }) => {
  return (
    <li className='font-bold transition-all ease-in-out duration-300 pb-2 text-2xl hover:text-qWhite '>
      <a href={hrefTo} className='flex items-center content-center'>
        <span className='mr-4 text-3xl'>{icon} </span>
        {linkName}
      </a>
    </li>
  );
};

const Sidebar = () => {
  return (
    <nav className='h-full fixed top-0 left-0 bg-qBlack overflow-x-hidden pt-5 flex flex-col items-center text-qPink w-0 md:w-32 lg:w-60'>
      <h1 className='lg:text-5xl font-bold mt-10 text-3xl transition-all duration-300 ease-in-out'>
        AHR
      </h1>
      <div className='h-3 lg:w-24 rounded-sm mt-2 mb-5 bg-qPink transition-all duration-300 ease-in-out w-1/2'>
        <div className='w-1/2 h-3 rounded-sm bg-qBlack border-2 border-qPink hidden lg:block'></div>
      </div>
      <ul className='flex-col'>
        <SidebarLink
          icon={<FaHome />}
          linkName={"home"}
          hrefTo={"#home"}
        />
        <SidebarLink
          icon={<FaSuitcase />}
          linkName={"services"}
          hrefTo={"#services"}
        />
        <SidebarLink
          icon={<FaVolumeUp />}
          linkName={"demos"}
          hrefTo={"#"}
        />
        <SidebarLink
          icon={<FaMicrophone />}
          linkName={"studio"}
          hrefTo={"#"}
        />
        <SidebarLink
          icon={<FaImages />}
          linkName={"roles"}
          hrefTo={"#"}
        />
        <SidebarLink
          icon={<FaStar />}
          linkName={"reviews"}
          hrefTo={"#reviews"}
        />
        <SidebarLink
          icon={<FaCommentAlt />}
          linkName={"contact"}
          hrefTo={"#contact"}
        />
      </ul>
    </nav>
  );
};

export default Sidebar;
