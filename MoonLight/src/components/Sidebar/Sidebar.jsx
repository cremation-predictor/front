import {
  MonitorIcon,
  BarChart3Icon,
  CalendarIcon,
  BookOpenIcon,
  SettingsIcon,
  LogOutIcon,
} from "lucide-react";
import React from "react";

export const Sidebar = () => {
  const menuItems = [
    { icon: MonitorIcon, label: "실시간 현황", active: true },
    { icon: BarChart3Icon, label: "수요 분석" },
    { icon: CalendarIcon, label: "가동 스케쥴" },
    { icon: BookOpenIcon, label: "예약 관리" },
    { icon: SettingsIcon, label: "관리자 설정" },
  ];

  return (
    <div className="w-[218px] h-[1024px] bg-white shadow-sm border-r border-gray-200 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200 flex flex-col items-center">
        <img
          src="https://c.animaapp.com/mfezchw6vowRLg/img/image.png"
          alt="대구공공사업관리공단 명복공원"
          className="w-[177px] h-[41px] mb-4"
        />
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-3">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href="#"
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-sm ${
                  item.active
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
            <span className="text-sm font-medium text-gray-600">관</span>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">관리자</p>
            <p className="text-xs text-gray-500">admin@example.com</p>
          </div>
        </div>

        <button className="flex items-center gap-2 w-full px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
          <LogOutIcon className="w-4 h-4" />
          <span>로그아웃</span>
        </button>
      </div>
    </div>
  );
};
