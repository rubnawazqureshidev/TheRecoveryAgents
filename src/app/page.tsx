"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [toggle, setToggle] = useState(false);

  let managements = [
    { name: "Mark W.", title: "Operations Manager" },
    { name: "Justin F.", title: "Recovery Specialist" },
    { name: "Jon B.", title: "Recovery Specialist" },
    { name: "Peter R.", title: "Recovery Specialist" },
    { name: "Kim C.", title: "Recovery Specialist" },
    { name: "Jack F.", title: "Operations Manager" },
    { name: "Hunter T.", title: "Recovery Representative" },
    { name: "Lindsay K.", title: "Recovery Representative" },
    { name: "Jay B.", title: "Recovery Representative" },
    { name: "David N.", title: "Recovery Representative" },
    { name: "Jonathan B.", title: "Recovery Representative" },
    { name: "Alexia F.", title: "Recovery Representative" },
  ];

  let recovery_specialists = [
    { name: "Jacob Babins", title: "President and Founder" },
    { name: "Jim McCabe", title: "Co-Founder" },
    { name: "Taylor May", title: "Chief Operating Officer" },
    { name: "Ashton Rooks", title: "Lead Counsel" },
    { name: "Rachael C.", title: "Counsel" },
    { name: "Justin Leger", title: "Manager of Recovery Services" },
  ];
  let legal_and_case_management = [
    { name: "Sawyer W.", title: "Case Manager" },
    { name: "Junie D.", title: "Lead Paralegal" },
    { name: "Natalie M.", title: "Paralegal" },
    { name: "Linda M.", title: "Paralegal" },
    { name: "Courtney S.", title: "Paralegal" },
    { name: "Raissa E.", title: "Paralegal" },
    { name: "Sandra L.", title: "Bilingual Customer Service" },
    { name: "Eddy B.", title: "Legal Assistant" },
  ];

  let research_specialists = [
    { name: "Madison M.", title: "Research Manager" },
    { name: "John Z.", title: "Staff Researcher" },
    { name: "Kenneth H.", title: "Staff Researcher" },
    { name: "Samuel W.", title: "Staff Researcher" },
  ];

  let administrative = [
    { name: "Claudia M.", title: "Accounting" },
    { name: "Dale D.", title: "Office Manager" },
  ];

  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-white shadow-md p-6  w-full z-10 pin-t">
        <div className="flex items-center flex-no-shrink text-white mr-6">
          <a
            className="text-black no-underline hover:text-slate-700 hover:no-underline"
            href="#"
          >
            <span className="text-2xl pl-2">
              <i className="em em-grinning"></i> TheRecoveryAgents
            </span>
          </a>
        </div>

        {/* <div className="block lg:hidden">
          <button
            id="nav-toggle"
            className="flex items-center px-3 py-2 border rounded text-grey border-grey-dark hover:text-black hover:border-black"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div> */}

        <div
          className={
            toggle
              ? "w-full flex-grow lg:items-center lg:w-auto  lg:block pt-6 lg:pt-0"
              : ""
          }
          id="nav-content"
        >
          <ul className="list-reset lg:flex justify-end flex-1 items-center">
            <li className="mr-3">
              <a
                className="inline-block text-grey-dark no-underline hover:text-grey-lighter hover:text-underline py-2 px-4"
                href="#"
              >
                +1-833-844-0044
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div style={{ height: "450px" }}>
        <div
          className="w-full bg-center bg-cover h-full"
          style={{
            backgroundImage: `url(hero.jpg)`,
          }}
        >
          <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50 py-12">
            <div className="text-center">
              <div className="container px-4 mx-auto ">
                <div className="max-w-4xl mx-auto text-center">
                  <span className="text-gray-200 font-semibold uppercase tracking-widest">
                    Welcome TheRecoveryAgents
                  </span>
                  <h2 className="mt-8 mb-6 text-4xl lg:text-5xl font-bold text-gray-100">
                    Meet Our Team
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-5 py-20">
        <div className="flex flex-wrap gap-20 lg:flex-nowrap">
          <div className="w-full lg:w-3/12 flex justify-center items-center lg:items-start">
            <img src="https://www.therecoveryagents.com/wp-content/uploads/2022/02/abt-mission-400x400.png" />
          </div>
          <div className="w-full">
            <div className="mb-4">
              <h2 className="text-4xl w-fit font-semibold">Our Mission</h2>
              <div className="w-16 border h-1 bg-black mt-4"></div>
            </div>
            <p className="mb-4 mt-8">
              The Recovery Agents was founded by seasoned real estate investors
              who identified that there was a significant gap in the foreclosure
              process in Florida. We had been buying and selling many properties
              over the course of 15 years, even some that passed through the
              foreclosure process. As a result of being subjected to the
              foreclosure process, we found that there were a lot of investors
              who preyed on people in foreclosure. When properties we owned went
              into foreclosure, we got 1,000s of pieces of mail from people
              looking to buy the home from us for pennies on the dollar, but
              nobody who actually could have helped us.
            </p>
            <p className="mb-4">
              It also became apparent to us that even though the new purchaser
              of the home was allowed to evict the previous homeowner out of the
              house, the courts have no obligation to alert the homeowners to
              the possibility of surplus funds being available. The information
              the courts provide is often mailed to the wrong place, it is too
              cumbersome or it contains too much “legal jargon” to understand,
              and it is often discarded. The Recovery Agents simplifies the
              process for homeowners and at the end of the process, the
              homeowners or the heirs are sent the funds they are rightfully
              owed.
            </p>
            <p className="mb-4">
              That’s the reason we started The Recovery Agents. To do two
              things: the first is to assist those facing foreclosure by
              providing them all of the options that are available to them, and
              the second is to ensure that those who have gone through
              foreclosure receive the surplus funds they are rightfully owed.
            </p>
          </div>
        </div>

        <div className="mb-16 mt-20 flex  justify-center">
          <div>
            <h2 className="text-3xl w-fit font-semibold">Meet Our Team</h2>
            <div className="w-16 border h-1 bg-black mt-4 mx-auto"></div>
          </div>
        </div>

        <div className="flex flex-wrap lg:flex-nowrap gap-20">
          <div className="w-full lg:w-4/12">
            <img
              src="/portrait-4568762_640.jpg"
              className=" mb-4 mx-auto rounded-xl object-fill h-80 w-72"
            />

            <p className="text-2xl font-semibold text-center">Jacob Babins</p>
            <p className="text-xl text-center">President and Founder</p>
            <p className="mt-4 text-center text-gray-500">
              Jacob Babins is a seasoned entrepreneur and operational leader
              with considerable experience leading start-ups and family
              businesses in the real estate and healthcare space throughout the
              growth and development lifecycles. He serves as the President of
              The Recovery Agents, LLC and Lien Capital, LLC based in Pompano
              Beach, Florida, where he directs the day-to-day activities of the
              companies. Jacob has oversight of the accounting, finance,
              operations, and business development teams at the Company. Jacob
              received his Bachelor of Science degree in economics and marketing
              from Clemson University.
            </p>
          </div>
          <div className="w-full lg:w-4/12">
            <img
              src="/portrait-3353699_640.jpg"
              className=" mb-4 mx-auto rounded-xl object-fill h-80 w-72"
            />
            <p className="text-2xl font-semibold text-center">Jim McCabe</p>
            <p className="text-xl text-center">Co-Founder</p>
            <p className="mt-4 text-center text-gray-500">
              Jim McCabe is an entrepreneur with over 15 years of experience in
              the financial services space. In addition to being the co-founder
              of The Recovery Agents, LLC, Jim is the founder and managing
              partner of Las Olas Capital. Las Olas Capital is a private
              investment firm that focuses on partnering with early or
              late-stage companies in the litigation and consumer finance, real
              estate, and technology space. Prior to founding Las Olas Capital,
              he held executive roles at several specialty finance companies and
              founded Liberty Settlement Funding, LLC which is one of the
              largest retail purchasers of investment grade receivables in the
              United States. He has a B.A. in Economics from the University of
              Florida.
            </p>
          </div>
          <div className="w-full lg:w-4/12">
            <img
              src="/male-2634974_640.jpg"
              className=" mb-4 mx-auto rounded-xl object-fill h-80 w-72"
            />
            <p className="text-2xl font-semibold text-center">Ashton Rooks</p>
            <p className="text-xl text-center">Lead Counsel</p>
            <p className="mt-4 text-center text-gray-500">
              Ashton Rooks is a licensed Florida Attorney and Lead Counsel at
              The Recovery Agents. Ashton has years of experience working in
              foreclosure defense helping homeowners fight a variety of banks
              and lenders to keep their homes. Since joining the TRA family,
              Ashton has successfully secured the surplus proceeds from hundreds
              of foreclosure cases, disbursing millions in funds to homeowners,
              and rightfully entitled family members alike. Ashton Rooks earned
              a Juris Doctor from Stetson University College of Law and went on
              to earn his LL.M in Transnational Law from Temple University in
              Japan, where he graduated with distinction and earned recognition
              for excellent legal writing.
            </p>
          </div>
        </div>

        <div className="mb-16 mt-20 flex  justify-center">
          <div>
            <h2 className="text-3xl w-fit font-semibold">Management</h2>
            <div className="w-16 border h-1 bg-black mt-4 mx-auto"></div>
          </div>
        </div>

        <div className="flex flex-wrap gap-20 items-center justify-center">
          {managements.map((item: any) => (
            <div
              key={item.name}
              className="flex flex-col justify-center items-center w-full lg:w-3/12"
            >
              <p className="text-2xl font-semibold">{item.name}</p>
              <p>{item.title}</p>
            </div>
          ))}
        </div>

        <div className="mb-16 mt-20 flex  justify-center">
          <div>
            <h2 className="text-3xl w-fit font-semibold">
              Recovery Specialists
            </h2>
            <div className="w-16 border h-1 bg-black mt-4 mx-auto"></div>
          </div>
        </div>

        <div className="flex flex-wrap gap-20 items-center justify-center">
          {recovery_specialists.map((item: any) => (
            <div
              key={item.name}
              className="flex flex-col justify-center items-center w-full lg:w-3/12"
            >
              <p className="text-2xl font-semibold">{item.name}</p>
              <p>{item.title}</p>
            </div>
          ))}
        </div>

        <div className="mb-16 mt-20 flex  justify-center">
          <div>
            <h2 className="text-3xl w-fit font-semibold">
              Legal and Case Management
            </h2>
            <div className="w-16 border h-1 bg-black mt-4 mx-auto"></div>
          </div>
        </div>

        <div className="flex flex-wrap gap-20 items-center justify-center">
          {legal_and_case_management.map((item: any) => (
            <div
              key={item.name}
              className="flex flex-col justify-center items-center w-full lg:w-3/12"
            >
              <p className="text-2xl font-semibold">{item.name}</p>
              <p>{item.title}</p>
            </div>
          ))}
        </div>

        <div className="mb-16 mt-20 flex  justify-center">
          <div>
            <h2 className="text-3xl w-fit font-semibold">
              Research Specialists
            </h2>
            <div className="w-16 border h-1 bg-black mt-4 mx-auto"></div>
          </div>
        </div>

        <div className="flex flex-wrap gap-20 items-center justify-center">
          {research_specialists.map((item: any) => (
            <div
              key={item.name}
              className="flex flex-col justify-center items-center w-full lg:w-3/12"
            >
              <p className="text-2xl font-semibold">{item.name}</p>
              <p>{item.title}</p>
            </div>
          ))}
        </div>

        <div className="mb-16 mt-20 flex  justify-center">
          <div>
            <h2 className="text-3xl w-fit font-semibold">Administrative</h2>
            <div className="w-16 border h-1 bg-black mt-4 mx-auto"></div>
          </div>
        </div>

        <div className="flex flex-wrap gap-20 items-center justify-center">
          {administrative.map((item: any) => (
            <div
              key={item.name}
              className="flex flex-col justify-center items-center w-full lg:w-3/12"
            >
              <p className="text-2xl font-semibold">{item.name}</p>
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="w-full bg-center bg-cover bg-gray-950">
          <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50 py-12">
            <div className="text-center">
              <div className="container px-4 mx-auto">
                <div className="max-w-4xl mx-auto text-center">
                  {/* <span className="text-gray-200 font-semibold uppercase tracking-widest">
                    Contact Us
                  </span> */}
                  <h2 className="mt-8 mb-6 text-4xl lg:text-5xl font-bold text-gray-100">
                    Contact Us
                  </h2>
                  <p className="max-w-3xl mx-auto mb-10 text-lg text-gray-300">
                    At no cost to you, we will investigate whether you are
                    entitled to surplus funds.
                  </p>
                  <a
                    className="inline-block w-full md:w-auto mb-4 md:mr-6 py-5 px-8 text-sm font-bold uppercase border-2 border-transparent bg-gray-200 rounded hover:bg-gray-100 text-gray-800 transition duration-200"
                    href="#"
                  >
                    +1-833-844-0044
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-white shadow dark:bg-gray-800">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-center">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              TheRecoveryAgents
            </a>
            . All Rights Reserved.
          </span>
          {/* <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul> */}
        </div>
      </footer>
    </>
  );
}
