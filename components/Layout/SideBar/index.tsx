import {
  HomeOutlined,
  NotificationOutlined,
  UserOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import React from "react";
import SideBarLogo from "../SideBarLogo";
import { useRouter } from "next/navigation";
import ButtonCommon from "@/components/ButtonComponent";

const SideBar = () => {
  const router = useRouter();
  const items = [
    {
      label: "Home",
      href: "/",
      icon: <HomeOutlined />,
    },
    {
      label: "Notifications",
      href: "/notification",
      icon: <NotificationOutlined />,
    },
    {
      label: "Profile",
      href: "/users/123",
      icon: <UserOutlined />,
    },
    {
      label: "Logout",
      href: "/logout",
      icon: <LogoutOutlined />,
    },
  ];

  const handleClickItemSideBar = (href: string) => {
    if (href !== "/logout") {
      router.push(href);
    } else {
      console.log(href);
    }
  };

  return (
    <div className="col-span-1 h-full pr-4 md:pr-1 bg-[#13161a] rounded-2xl">
      <div className="flex flex-col pl-1">
        <div className="space-y-2">
          <SideBarLogo />
          <div className="px-1 rounded-md py-3 h-[80%]">
            {items.map((item, index) => (
              <div
                key={index}
                className={`${
                  item.href !== "/logout" ? "text-[#EEEEEE] " : "text-red-500 "
                } flex py-3 font-semibold rounded-lg transition px-2 cursor-pointer hover:bg-[#0000001e]`}
                onClick={() => handleClickItemSideBar(item.href)}
              >
                <p className="pr-3 text-[20px] flex items-center">
                  {item.icon}
                </p>
                <p className="">{item.label}</p>
              </div>
            ))}
          </div>
          <div className="flex">
            <ButtonCommon
              label="Tweet"
              className="bg-[#00ADB5] text-[#EEEEEE] transition hover:bg-[#078a91] cursor-pointer font-bold mx-auto text-center py-2 rounded-3xl !w-[50%]"
              onClick={() => {}}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
