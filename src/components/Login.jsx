import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Sparkles,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Temporary frontend authentication.
    // Real authentication will be connected later.
    localStorage.setItem("careerAI_loggedIn", "true");
    localStorage.setItem("careerAI_user", formData.email);

    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-slate-50 flex">

      {/* =====================================================
          LEFT PANEL
      ====================================================== */}
      <section className="hidden lg:flex lg:w-[52%] relative overflow-hidden bg-blue-600 text-white">

        {/* Background decorations */}
        <div className="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-blue-500/50" />

        <div className="absolute -bottom-48 -right-32 w-[600px] h-[600px] rounded-full bg-blue-700/60" />

        <div className="absolute top-24 right-20 w-20 h-20 rounded-3xl bg-white/10 rotate-12" />

        <div className="absolute bottom-32 left-24 w-14 h-14 rounded-2xl bg-white/10 -rotate-12" />

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center px-16 xl:px-24 max-w-3xl">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 mb-16 w-fit">

            <div className="w-11 h-11 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center">
              <Sparkles size={23} />
            </div>

            <span className="text-2xl font-extrabold tracking-tight">
              Career<span className="text-blue-200">AI</span>
            </span>

          </Link>

          <p className="text-blue-200 font-semibold mb-5 uppercase tracking-widest text-sm">
            AI-powered career platform
          </p>

          <h1 className="text-5xl xl:text-6xl font-extrabold leading-[1.08]">
            Build a resume
            <br />
            <span className="text-blue-100">that gets noticed.</span>
          </h1>

          <p className="mt-7 text-lg xl:text-xl leading-relaxed text-blue-100 max-w-xl">
            Create professional, ATS-friendly resumes and take control
            of your career with intelligent AI-powered tools.
          </p>

          {/* Benefits */}
          <div className="mt-10 space-y-4">

            <div className="flex items-center gap-3">
              <CheckCircle2 size={20} className="text-blue-200" />
              <span>AI-powered resume improvement</span>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle2 size={20} className="text-blue-200" />
              <span>ATS-friendly professional templates</span>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle2 size={20} className="text-blue-200" />
              <span>Career guidance in one platform</span>
            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          RIGHT PANEL
      ====================================================== */}
      <section className="w-full lg:w-[48%] flex items-center justify-center px-6 py-12">

        <div className="w-full max-w-md">

          {/* Mobile logo */}
          <div className="flex lg:hidden justify-center items-center gap-2 mb-10">

            <div className="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center">
              <Sparkles size={21} />
            </div>

            <span className="text-2xl font-extrabold text-slate-900">
              Career<span className="text-blue-600">AI</span>
            </span>

          </div>


          {/* Heading */}
          <div className="mb-8">

            <h2 className="text-3xl font-bold text-slate-900">
              Welcome back
            </h2>

            <p className="mt-2 text-slate-500">
              Login to continue building your career.
            </p>

          </div>


          {/* Login form */}
          <form onSubmit={handleLogin} className="space-y-5">

            {/* Email */}
            <div>

              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Email address
              </label>

              <div className="relative">

                <Mail
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  className="
                    w-full
                    pl-11 pr-4
                    py-3.5
                    rounded-xl
                    border border-slate-200
                    bg-white
                    text-slate-900
                    placeholder:text-slate-400
                    outline-none
                    transition
                    focus:border-blue-500
                    focus:ring-4
                    focus:ring-blue-500/10
                  "
                />

              </div>

            </div>


            {/* Password */}
            <div>

              <div className="flex items-center justify-between mb-2">

                <label className="text-sm font-semibold text-slate-700">
                  Password
                </label>

                <button
                  type="button"
                  className="text-sm font-medium text-blue-600 hover:text-blue-700"
                >
                  Forgot password?
                </button>

              </div>

              <div className="relative">

                <Lock
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  required
                  className="
                    w-full
                    pl-11 pr-12
                    py-3.5
                    rounded-xl
                    border border-slate-200
                    bg-white
                    text-slate-900
                    placeholder:text-slate-400
                    outline-none
                    transition
                    focus:border-blue-500
                    focus:ring-4
                    focus:ring-blue-500/10
                  "
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="
                    absolute
                    right-4
                    top-1/2
                    -translate-y-1/2
                    text-slate-400
                    hover:text-slate-600
                  "
                >
                  {showPassword ? (
                    <EyeOff size={19} />
                  ) : (
                    <Eye size={19} />
                  )}
                </button>

              </div>

            </div>


            {/* Login button */}
            <button
              type="submit"
              className="
                w-full
                flex
                items-center
                justify-center
                gap-2
                py-3.5
                rounded-xl
                bg-blue-600
                hover:bg-blue-700
                text-white
                font-semibold
                transition
                shadow-lg
                shadow-blue-600/20
              "
            >
              Login
              <ArrowRight size={18} />
            </button>

          </form>


          {/* Divider */}
          <div className="flex items-center gap-4 my-8">

            <div className="flex-1 h-px bg-slate-200" />

            <span className="text-sm text-slate-400">
              or
            </span>

            <div className="flex-1 h-px bg-slate-200" />

          </div>


          {/* Create account */}
          <div className="text-center">

            <p className="text-sm text-slate-500">
              Don't have an account?{" "}

              <button
                type="button"
                className="font-semibold text-blue-600 hover:text-blue-700"
              >
                Create one
              </button>
            </p>

          </div>


          {/* Back */}
          <div className="text-center mt-6">

            <Link
              to="/"
              className="text-sm text-slate-400 hover:text-slate-600 transition"
            >
              ← Back to CareerAI
            </Link>

          </div>

        </div>

      </section>

    </div>
  );
}