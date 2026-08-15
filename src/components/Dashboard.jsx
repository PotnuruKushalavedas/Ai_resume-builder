import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  LayoutDashboard,
  FileText,
  BriefcaseBusiness,
  UsersRound,
  MessageSquare,
  Search,
  Target,
  Sparkles,
  Plus,
  ChevronRight,
  LogOut,
  Menu,
  X,
  Settings,
  Bell,
  BarChart3,
  BookOpen,
} from "lucide-react";

export default function Dashboard() {
  const navigate = useNavigate();

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const userEmail =
    localStorage.getItem("careerAI_user") || "user@example.com";

  const userName =
    userEmail.split("@")[0] || "User";

  const menuItems = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
      active: true,
    },
    {
      name: "Documents",
      icon: FileText,
      children: ["My Resumes", "My Cover Letters"],
    },
    
   
    {
      name: "ATS Analyzer",
      icon: BarChart3,
    },
  ];

  const handleLogout = () => {
    localStorage.removeItem("careerAI_loggedIn");
    localStorage.removeItem("careerAI_user");

    navigate("/");
  };

  const handleCreateResume = () => {
    navigate("/resume-builder");
  };

  return (
    <div className="min-h-screen bg-slate-50 flex">

      {/* ==================================================
          MOBILE OVERLAY
      =================================================== */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}


      {/* ==================================================
          SIDEBAR
      =================================================== */}
      <aside
        className={`
          fixed
          lg:sticky
          top-0
          left-0
          z-50
          h-screen
          w-[270px]
          bg-white
          border-r
          border-slate-200
          flex
          flex-col
          transition-transform
          duration-300

          ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >

        {/* Logo */}
        <div className="h-20 px-6 flex items-center justify-between border-b border-slate-100">

          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2"
          >

            <div className="w-9 h-9 bg-blue-600 text-white rounded-xl flex items-center justify-center">
              <Sparkles size={19} />
            </div>

            <span className="text-xl font-extrabold text-slate-900">
              Career<span className="text-blue-600">AI</span>
            </span>

          </button>

          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden text-slate-400"
          >
            <X size={21} />
          </button>

        </div>


        {/* User */}
        <div className="px-5 py-5 border-b border-slate-100">

          <div className="flex items-center gap-3">

            <div className="w-11 h-11 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
              {userName.charAt(0).toUpperCase()}
            </div>

            <div className="min-w-0">

              <p className="font-semibold text-slate-800 truncate capitalize">
                {userName}
              </p>

              <p className="text-xs text-slate-400 truncate">
                {userEmail}
              </p>

            </div>

          </div>

        </div>


        {/* Navigation */}
        <nav className="flex-1 px-4 py-5 overflow-y-auto">

          <p className="px-3 mb-3 text-[11px] font-bold uppercase tracking-wider text-slate-400">
            Workspace
          </p>

          <div className="space-y-1">

            {menuItems.map((item) => {

              const Icon = item.icon;

              return (
                <div key={item.name}>

                  <button
                    className={`
                      w-full
                      flex
                      items-center
                      gap-3
                      px-3
                      py-3
                      rounded-xl
                      text-sm
                      font-medium
                      transition

                      ${
                        item.active
                          ? "bg-blue-50 text-blue-600"
                          : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                      }
                    `}
                  >

                    <Icon size={19} />

                    <span>{item.name}</span>

                    {item.children && (
                      <ChevronRight
                        size={16}
                        className="ml-auto"
                      />
                    )}

                  </button>

                  {/* Documents submenu */}
                  {item.children && item.name === "Documents" && (
                    <div className="ml-11 mt-1 space-y-1">

                      {item.children.map((child) => (
                        <button
                          key={child}
                          className="block w-full text-left px-3 py-2 text-sm text-slate-500 hover:text-blue-600 transition"
                        >
                          {child}
                        </button>
                      ))}

                    </div>
                  )}

                </div>
              );
            })}

          </div>

        </nav>


        {/* Bottom sidebar */}
        <div className="p-4 border-t border-slate-100 space-y-1">

          <button className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-sm text-slate-600 hover:bg-slate-50">
            <Settings size={18} />
            Settings
          </button>

          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-sm text-red-500 hover:bg-red-50"
          >
            <LogOut size={18} />
            Logout
          </button>

        </div>

      </aside>


      {/* ==================================================
          MAIN AREA
      =================================================== */}
      <main className="flex-1 min-w-0">

        {/* Top bar */}
        <header className="h-20 bg-white border-b border-slate-200 px-5 md:px-8 flex items-center justify-between">

          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden p-2 rounded-lg hover:bg-slate-100"
          >
            <Menu size={22} />
          </button>

          <div className="hidden lg:block" />

          <div className="flex items-center gap-3">

            <button className="p-2.5 rounded-xl hover:bg-slate-100 text-slate-500">
              <Bell size={20} />
            </button>

            <button className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 font-bold">
              {userName.charAt(0).toUpperCase()}
            </button>

          </div>

        </header>


        {/* Content */}
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-8">

          {/* Greeting */}
          <section className="mb-8">

            <p className="text-blue-600 font-semibold text-sm mb-2">
              Welcome back 👋
            </p>

            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 capitalize">
              Hi {userName}!
            </h1>

            <p className="text-slate-500 mt-2">
              What would you like to work on today?
            </p>

          </section>


          {/* Career journey */}
          <section className="flex items-center gap-2 md:gap-4 overflow-x-auto pb-3 mb-8">

            {[
              "Resume Building",
              "Resume Tailoring",
              "Cover Letter",
            ].map((item, index) => (

              <React.Fragment key={item}>

                <button
                  className={`
                    whitespace-nowrap
                    px-5
                    py-3
                    rounded-full
                    border
                    text-sm
                    font-medium
                    transition

                    ${
                      index === 0
                        ? "border-blue-400 bg-blue-50 text-blue-700"
                        : "border-slate-200 bg-white text-slate-700 hover:border-blue-300"
                    }
                  `}
                >
                  {item}
                </button>

                {index < 3 && (
                  <div className="hidden md:block w-8 h-px bg-slate-200" />
                )}

              </React.Fragment>

            ))}

          </section>


          {/* Main cards */}
          <section className="grid grid-cols-1 xl:grid-cols-3 gap-6">

            {/* Resume progress */}
            <div className="xl:col-span-1 bg-white rounded-2xl border border-slate-200 p-6">

              <div className="flex items-center justify-between mb-6">

                <h2 className="font-bold text-slate-900">
                  Your Progress
                </h2>

                <span className="text-sm font-semibold text-blue-600">
                  0%
                </span>

              </div>

              <div className="space-y-5">

                {[
                  ["Resume Building", "0%"],
                  ["Resume Tailoring", "0%"],
                  ["Cover Letter", "0%"],
          
                ].map(([name, value]) => (

                  <div key={name}>

                    <div className="flex justify-between mb-2">

                      <span className="text-sm text-slate-600">
                        {name}
                      </span>

                      <span className="text-sm font-semibold text-slate-400">
                        {value}
                      </span>

                    </div>

                    <div className="h-2 rounded-full bg-slate-100">

                      <div className="h-full w-0 rounded-full bg-blue-500" />

                    </div>

                  </div>

                ))}

              </div>

            </div>


            {/* Create resume */}
            <div className="xl:col-span-2 rounded-2xl p-7 md:p-8 bg-gradient-to-br from-blue-50 via-white to-indigo-50 border border-blue-100 relative overflow-hidden">

              <div className="absolute -right-20 -top-20 w-56 h-56 bg-blue-100 rounded-full opacity-60" />

              <div className="relative">

                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold mb-5">

                  <Sparkles size={14} />

                  Resume Building

                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 max-w-xl">
                  Build a professional resume in minutes.
                </h2>

                <p className="mt-3 text-slate-600 max-w-xl leading-relaxed">
                  Choose a professional template, add your experience,
                  and let CareerAI help you create an ATS-friendly resume.
                </p>

                <button
                  onClick={handleCreateResume}
                  className="mt-7 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg shadow-blue-600/20 transition"
                >
                  <Plus size={19} />
                  Create Resume
                </button>

              </div>

            </div>

          </section>


          {/* Quick actions */}
          <section className="mt-8">

            <div className="flex items-center justify-between mb-5">

              <h2 className="text-xl font-bold text-slate-900">
                Career Tools
              </h2>

              <span className="text-sm text-slate-400">
                Explore CareerAI
              </span>

            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

              {[
                {
                  title: "ATS Analyzer",
                  description: "Check your resume score",
                  icon: BarChart3,
                },
                {
                  title: "Cover Letter",
                  description: "Create a professional letter",
                  icon: FileText,
                },
                ].map((tool) => {

                const Icon = tool.icon;

                return (
                  <button
                    key={tool.title}
                    className="text-left bg-white border border-slate-200 rounded-2xl p-5 hover:border-blue-300 hover:shadow-md transition group"
                  >

                    <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition">

                      <Icon size={20} />

                    </div>

                    <h3 className="font-semibold text-slate-900">
                      {tool.title}
                    </h3>

                    <p className="text-sm text-slate-500 mt-1">
                      {tool.description}
                    </p>

                  </button>
                );
              })}

            </div>

          </section>

        </div>

      </main>

    </div>
  );
}