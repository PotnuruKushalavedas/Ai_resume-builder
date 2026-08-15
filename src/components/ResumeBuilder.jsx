import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  FileText,
  User,
  GraduationCap,
  BriefcaseBusiness,
  FolderKanban,
  Wrench,
  Award,
  Sparkles,
} from "lucide-react";

export default function ResumeBuilder() {
  const navigate = useNavigate();

  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: "Personal Details",
      icon: User,
    },
    {
      title: "Education",
      icon: GraduationCap,
    },
    {
      title: "Experience",
      icon: BriefcaseBusiness,
    },
    {
      title: "Projects",
      icon: FolderKanban,
    },
    {
      title: "Skills",
      icon: Wrench,
    },
    {
      title: "Certifications",
      icon: Award,
    },
  ];

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const previousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const CurrentIcon = steps[currentStep].icon;

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Header */}
      <header className="h-20 bg-white border-b border-slate-200 px-5 md:px-8 flex items-center justify-between">

        <button
          onClick={() => navigate("/dashboard")}
          className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition"
        >
          <ArrowLeft size={19} />
          Back to Dashboard
        </button>

        <div className="flex items-center gap-2">

          <div className="w-9 h-9 bg-blue-600 text-white rounded-xl flex items-center justify-center">
            <Sparkles size={18} />
          </div>

          <span className="font-extrabold text-xl text-slate-900">
            Career<span className="text-blue-600">AI</span>
          </span>

        </div>

        <button
          className="hidden sm:flex items-center gap-2 text-sm font-semibold text-blue-600"
        >
          <Sparkles size={17} />
          AI Assistant
        </button>

      </header>


      {/* Page */}
      <main className="max-w-7xl mx-auto px-5 md:px-8 py-8">

        <div className="mb-8">

          <h1 className="text-3xl font-bold text-slate-900">
            Create your resume
          </h1>

          <p className="mt-2 text-slate-500">
            Complete each section to build your professional resume.
          </p>

        </div>


        {/* Progress */}
        <div className="bg-white rounded-2xl border border-slate-200 p-5 mb-8">

          <div className="flex items-center justify-between overflow-x-auto">

            {steps.map((step, index) => {

              const Icon = step.icon;

              const completed = index < currentStep;
              const active = index === currentStep;

              return (
                <React.Fragment key={step.title}>

                  <button
                    onClick={() => setCurrentStep(index)}
                    className="flex items-center gap-2 shrink-0"
                  >

                    <div
                      className={`
                        w-10
                        h-10
                        rounded-full
                        flex
                        items-center
                        justify-center
                        border
                        transition

                        ${
                          completed
                            ? "bg-blue-600 border-blue-600 text-white"
                            : active
                            ? "bg-blue-50 border-blue-500 text-blue-600"
                            : "bg-white border-slate-200 text-slate-400"
                        }
                      `}
                    >
                      {completed ? (
                        <Check size={18} />
                      ) : (
                        <Icon size={18} />
                      )}
                    </div>

                    <span
                      className={`
                        hidden md:block
                        text-sm
                        font-medium

                        ${
                          active
                            ? "text-blue-600"
                            : completed
                            ? "text-slate-700"
                            : "text-slate-400"
                        }
                      `}
                    >
                      {step.title}
                    </span>

                  </button>

                  {index < steps.length - 1 && (
                    <div className="hidden md:block flex-1 min-w-8 h-px bg-slate-200 mx-3" />
                  )}

                </React.Fragment>
              );
            })}

          </div>

        </div>


        {/* Builder */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

          {/* Form side */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8">

            <div className="flex items-center gap-3 mb-7">

              <div className="w-11 h-11 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                <CurrentIcon size={21} />
              </div>

              <div>

                <h2 className="text-xl font-bold text-slate-900">
                  {steps[currentStep].title}
                </h2>

                <p className="text-sm text-slate-500">
                  Step {currentStep + 1} of {steps.length}
                </p>

              </div>

            </div>


            {/* Temporary form */}
            <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center">

              <FileText
                size={38}
                className="mx-auto text-slate-300 mb-4"
              />

              <h3 className="font-semibold text-slate-700">
                {steps[currentStep].title}
              </h3>

              <p className="text-sm text-slate-500 mt-2">
                We'll build the complete form for this section next.
              </p>

            </div>


            {/* Navigation */}
            <div className="flex justify-between mt-8">

              <button
                onClick={previousStep}
                disabled={currentStep === 0}
                className="
                  flex
                  items-center
                  gap-2
                  px-5
                  py-3
                  rounded-xl
                  border
                  border-slate-200
                  text-slate-600
                  disabled:opacity-40
                  disabled:cursor-not-allowed
                "
              >
                <ArrowLeft size={17} />
                Previous
              </button>

              <button
                onClick={nextStep}
                className="
                  flex
                  items-center
                  gap-2
                  px-5
                  py-3
                  rounded-xl
                  bg-blue-600
                  hover:bg-blue-700
                  text-white
                  font-semibold
                "
              >
                {currentStep === steps.length - 1
                  ? "Finish"
                  : "Continue"}

                <ArrowRight size={17} />
              </button>

            </div>

          </section>


          {/* Preview */}
          <section className="bg-slate-100 border border-slate-200 rounded-2xl p-5 md:p-8">

            <div className="flex items-center justify-between mb-5">

              <div>

                <h2 className="font-bold text-slate-900">
                  Resume Preview
                </h2>

                <p className="text-sm text-slate-500">
                  Your resume will appear here
                </p>

              </div>

              <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white text-slate-500 border border-slate-200">
                Live Preview
              </span>

            </div>


            {/* Paper */}
            <div className="bg-white min-h-[650px] shadow-sm rounded-sm p-8">

              <div className="text-center border-b border-slate-200 pb-5">

                <div className="h-5 w-48 bg-slate-200 rounded mx-auto" />

                <div className="h-3 w-64 bg-slate-100 rounded mx-auto mt-3" />

              </div>

              <div className="mt-8 space-y-7">

                {[1, 2, 3].map((section) => (

                  <div key={section}>

                    <div className="h-3 w-28 bg-blue-100 rounded mb-4" />

                    <div className="space-y-2">

                      <div className="h-2.5 w-full bg-slate-100 rounded" />

                      <div className="h-2.5 w-11/12 bg-slate-100 rounded" />

                      <div className="h-2.5 w-9/12 bg-slate-100 rounded" />

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </section>

        </div>

      </main>

    </div>
  );
}