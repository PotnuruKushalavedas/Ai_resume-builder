import {
  Sparkles,
  CheckCircle2,
  MapPin,
  Mail,
  Phone,
  Briefcase,
  GraduationCap,
  Code2,
  ArrowRight,
  Star,
} from "lucide-react";

export default function Hero() {

  return (
    <section
      id="home"
      className="
        relative
        overflow-hidden
        bg-gradient-to-br
        from-slate-50
        via-white
        to-blue-50/60
      "
    >

      {/* Background decorations */}

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          top-20
          h-[550px]
          w-[550px]
          rounded-full
          bg-blue-100/50
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          left-10
          top-32
          h-16
          w-16
          rounded-2xl
          border
          border-blue-200
          rotate-12
        "
      />


      <div
        className="
          mx-auto
          grid
          max-w-[1440px]
          grid-cols-1
          items-center
          gap-12
          px-5
          py-16
          sm:px-8
          lg:grid-cols-[0.85fr_1.15fr]
          lg:px-12
          lg:py-20
          xl:py-24
        "
      >

        {/* =================================================
            LEFT CONTENT
        ================================================= */}

        <div className="relative z-10">

          {/* Badge */}

          <div
            className="
              mb-6
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-blue-100
              bg-blue-50
              px-3.5
              py-2
              text-xs
              font-semibold
              text-brand-primary
            "
          >

            <Sparkles size={14} />

            AI-Powered Career Assistant

          </div>


          {/* Heading */}

          <h1
            className="
              max-w-[680px]
              text-5xl
              font-extrabold
              leading-[1.04]
              tracking-[-2.5px]
              text-brand-dark
              sm:text-6xl
              lg:text-[62px]
              xl:text-[68px]
            "
          >

            Build a Resume

            <br />

            That Gets You{" "}

            <span className="text-brand-primary">
              Noticed.
            </span>

          </h1>


          {/* Description */}

          <p
            className="
              mt-7
              max-w-[600px]
              text-base
              leading-7
              text-slate-500
              sm:text-lg
            "
          >
            Create ATS-friendly resumes, optimize your professional
            profile, showcase your projects, and tailor your career
            documents for the jobs you want — all powered by AI.
          </p>


          {/* Buttons */}

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">

            <a
              href="#get-started"
              className="
                inline-flex
                items-center
                justify-center
                gap-2.5
                rounded-lg
                bg-brand-primary
                px-6
                py-3.5
                text-sm
                font-bold
                text-white
                shadow-lg
                shadow-blue-200
                transition
                hover:-translate-y-1
                hover:bg-blue-700
              "
            >

              Create My Resume

              <ArrowRight size={16} />

            </a>


            <a
              href="#ats-analyzer"
              className="
                inline-flex
                items-center
                justify-center
                rounded-lg
                border
                border-brand-primary
                bg-white
                px-6
                py-3.5
                text-sm
                font-bold
                text-brand-primary
                transition
                hover:bg-blue-50
              "
            >
              Analyze My Resume
            </a>

          </div>


          {/* Trust */}

          <div className="mt-8 flex items-center gap-4">

            <div className="flex">

              {["K", "A", "S", "R"].map(
                (letter, index) => (

                  <div
                    key={index}
                    className="
                      -ml-2
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-full
                      border-2
                      border-white
                      bg-brand-primary
                      text-[10px]
                      font-bold
                      text-white
                      first:ml-0
                    "
                  >
                    {letter}
                  </div>

                )
              )}

            </div>


            <div>

              <div className="flex items-center gap-0.5 text-amber-400">

                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={12}
                    fill="currentColor"
                  />
                ))}

              </div>

              <p className="mt-0.5 text-[11px] text-slate-400">
                Built for students & professionals
              </p>

            </div>

          </div>

        </div>


        {/* =================================================
            RIGHT RESUME PREVIEW
        ================================================= */}

        <div className="relative flex min-h-[580px] items-center justify-center">

          {/* Large circle */}

          <div
            className="
              absolute
              h-[500px]
              w-[500px]
              rounded-full
              bg-blue-100/70
            "
          />


          {/* Resume */}

          <div
            className="
              relative
              z-10
              w-[520px]
              max-w-[90%]
              overflow-hidden
              rounded-md
              bg-white
              shadow-[0_30px_70px_rgba(15,23,42,0.20)]
              ring-1
              ring-slate-200
              transition
              duration-500
              hover:-translate-y-2
            "
          >

            <div className="grid grid-cols-[135px_1fr]">

              {/* ================= SIDEBAR ================= */}

              <div className="bg-[#123B70] px-5 py-7 text-white">

                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-full
                    bg-white
                    text-sm
                    font-extrabold
                    text-[#123B70]
                  "
                >
                  KW
                </div>

                <h3 className="mt-4 text-sm font-bold">
                  Olivia Wilson
                </h3>

                <p className="mt-1 text-[8px] text-blue-200">
                  Software Engineer
                </p>


                {/* Contact */}

                <div className="mt-6 space-y-2.5">

                  <ResumeContact
                    icon={<MapPin size={9} />}
                    text="New Delhi, India"
                  />

                  <ResumeContact
                    icon={<Phone size={9} />}
                    text="+91 98765 43210"
                  />

                  <ResumeContact
                    icon={<Mail size={9} />}
                    text="olivia@email.com"
                  />

                </div>


                {/* Skills */}

                <div className="mt-7">

                  <h4 className="text-[8px] font-bold uppercase tracking-wider">
                    Skills
                  </h4>

                  <div className="mt-3 space-y-2">

                    {[
                      "React.js",
                      "JavaScript",
                      "Python",
                      "SQL",
                      "Git & GitHub",
                    ].map((skill) => (

                      <div
                        key={skill}
                        className="text-[7px] text-blue-100"
                      >
                        {skill}
                      </div>

                    ))}

                  </div>

                </div>


                {/* Languages */}

                <div className="mt-7">

                  <h4 className="text-[8px] font-bold uppercase tracking-wider">
                    Languages
                  </h4>

                  <div className="mt-3 space-y-2">

                    <div className="text-[7px] text-blue-100">
                      English
                    </div>

                    <div className="text-[7px] text-blue-100">
                      Hindi
                    </div>

                  </div>

                </div>

              </div>


              {/* ================= MAIN RESUME ================= */}

              <div className="px-7 py-7 text-slate-700">

                <div className="border-b border-slate-200 pb-4">

                  <h2 className="text-2xl font-extrabold tracking-tight text-slate-900">
                    Olivia Wilson
                  </h2>

                  <p className="mt-1 text-[9px] font-semibold text-brand-primary">
                    SOFTWARE ENGINEER
                  </p>

                </div>


                <ResumeSection
                  icon={<Briefcase size={10} />}
                  title="Profile"
                >

                  <p className="text-[7px] leading-[1.7] text-slate-500">
                    Software engineer passionate about building
                    scalable applications and creating meaningful
                    digital experiences through modern technology.
                  </p>

                </ResumeSection>


                <ResumeSection
                  icon={<Briefcase size={10} />}
                  title="Experience"
                >

                  <ResumeExperience
                    title="Software Engineer"
                    company="Tech Solutions Pvt. Ltd."
                    date="2023 — Present"
                  />

                  <ResumeExperience
                    title="Frontend Developer"
                    company="Digital Labs"
                    date="2021 — 2023"
                  />

                </ResumeSection>


                <ResumeSection
                  icon={<GraduationCap size={10} />}
                  title="Education"
                >

                  <div>

                    <p className="text-[8px] font-bold text-slate-700">
                      B.Tech — Computer Science
                    </p>

                    <p className="mt-1 text-[7px] text-slate-400">
                      University of Technology
                    </p>

                  </div>

                </ResumeSection>


                <ResumeSection
                  icon={<Code2 size={10} />}
                  title="Projects"
                >

                  <p className="text-[8px] font-bold text-slate-700">
                    AI Career Assistant
                  </p>

                  <p className="mt-1 text-[7px] leading-4 text-slate-400">
                    AI-powered platform for resume analysis,
                    job matching and career recommendations.
                  </p>

                </ResumeSection>

              </div>

            </div>

          </div>


          {/* =================================================
              FLOATING ATS CARD
          ================================================= */}

          <div
            className="
              absolute
              left-0
              top-24
              z-20
              flex
              items-center
              gap-3
              rounded-xl
              border
              border-slate-200
              bg-white
              p-3
              shadow-xl
              shadow-slate-200/60
              animate-float1
            "
          >

            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-emerald-500">
              <CheckCircle2 size={19} />
            </div>

            <div>

              <p className="text-[8px] font-bold tracking-wide text-slate-400">
                ATS SCORE
              </p>

              <p className="text-base font-extrabold text-slate-800">
                87/100
              </p>

            </div>

          </div>


          {/* =================================================
              JOB MATCH CARD
          ================================================= */}

          <div
            className="
              absolute
              right-0
              top-44
              z-20
              flex
              items-center
              gap-3
              rounded-xl
              border
              border-slate-200
              bg-white
              p-3
              shadow-xl
              shadow-slate-200/60
              animate-float2
            "
          >

            <div
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                border-4
                border-brand-primary
                bg-blue-50
                text-[10px]
                font-extrabold
                text-brand-primary
              "
            >
              92%
            </div>

            <div>

              <p className="text-[8px] font-bold tracking-wide text-slate-400">
                JOB MATCH
              </p>

              <p className="text-[10px] font-bold text-slate-800">
                Excellent Match
              </p>

            </div>

          </div>


          {/* =================================================
              AI SUGGESTION
          ================================================= */}

          <div
            className="
              absolute
              bottom-14
              right-3
              z-20
              flex
              w-56
              items-start
              gap-3
              rounded-xl
              border
              border-slate-200
              bg-white
              p-3.5
              shadow-xl
              shadow-slate-200/60
              animate-float3
            "
          >

            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-brand-primary">
              <Sparkles size={15} />
            </div>

            <div>

              <p className="text-[8px] font-bold tracking-wide text-slate-400">
                AI SUGGESTION
              </p>

              <p className="mt-1 text-[9px] leading-4 text-slate-600">
                Add Power BI to improve your job match.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}


/* ============================================================
   SMALL COMPONENTS
============================================================ */

function ResumeContact({ icon, text }) {

  return (
    <div className="flex items-center gap-1.5 text-[7px] text-blue-100">
      {icon}
      <span>{text}</span>
    </div>
  );

}


function ResumeSection({
  icon,
  title,
  children,
}) {

  return (
    <section className="mt-5">

      <div className="mb-2 flex items-center gap-1.5 border-b border-slate-200 pb-1.5 text-brand-primary">

        {icon}

        <h4 className="text-[8px] font-bold uppercase tracking-wider">
          {title}
        </h4>

      </div>

      {children}

    </section>
  );

}


function ResumeExperience({
  title,
  company,
  date,
}) {

  return (
    <div className="mb-3">

      <div className="flex items-start justify-between gap-2">

        <div>

          <p className="text-[8px] font-bold text-slate-700">
            {title}
          </p>

          <p className="mt-0.5 text-[7px] font-semibold text-brand-primary">
            {company}
          </p>

        </div>

        <span className="text-[6px] text-slate-400">
          {date}
        </span>

      </div>

      <div className="mt-2 space-y-1">

        <div className="h-[3px] w-[95%] rounded-full bg-slate-200" />
        <div className="h-[3px] w-[85%] rounded-full bg-slate-200" />
        <div className="h-[3px] w-[70%] rounded-full bg-slate-200" />

      </div>

    </div>
  );

}