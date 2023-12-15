import React from "react";
import MissingGradeForm from "../components/MissingGradeForm";
import Header from "../components/Header";
import { Disclosure } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { useNavigate } from "react-router-dom";
import {
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  QuestionMarkCircleIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: HomeIcon, current: false },
  {
    name: "Grade Report",
    href: "/grade-report",
    icon: ChartPieIcon,
    current: false,
  },

  {
    name: "Missing Grade Form",
    href: "/missing-grade-form",
    icon: CalendarIcon,
    current: true,
  },
  {
    name: "Instructor Contact page",
    href: "/instructor-contact",
    icon: PhoneIcon,
    current: false,
  },

  {
    name: "Help And Support Page",
    href: "/help-and-support",
    icon: QuestionMarkCircleIcon,
    current: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Dashboard() {
  const navigate = useNavigate();
  return (
    <div className="w-screen h-screen flex">
      <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 w-10">
              
        <div className="flex h-16 shrink-0 items-center">
                  
          <img
            className="h-8 w-auto"
            src="https://ugelectiveshelper.netlify.app/assets/img/logo.png"
            alt="Your Company"
          />
                
        </div>
              
        <nav className="flex flex-1 flex-col">
                  
          <ul role="list" className="fle x flex-1 flex-col gap-y-7">
                      
            <li>
                          
              <ul role="list" className="-mx-2 space-y-1">
                              
                {navigation.map((item) => (
                  <li key={item.name}>
                                      
                    {!item.children ? (
                      <a
                        onClick={() => navigate(item.href)}
                        className={classNames(
                          item.current ? "bg-gray-50" : "hover:bg-gray-50",
                          "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold text-gray-700 cursor-pointer"
                        )}
                      >
                                              
                        <item.icon
                          className="h-6 w-6 shrink-0 text-gray-400"
                          aria-hidden="true"
                        />
                                              {item.name}
                                            
                      </a>
                    ) : (
                      <Disclosure as="div">
                                              
                        {({ open }) => (
                          <>
                                                      
                            <Disclosure.Button
                              className={classNames(
                                item.current
                                  ? "bg-gray-50"
                                  : "hover:bg-gray-200",
                                "flex items-center w-full text-left rounded-md p-2 gap-x-3 text-sm leading-6 font-semibold text-gray-700"
                              )}
                            >
                                                          
                              <item.icon
                                className="h-6 w-6 shrink-0 text-gray-400"
                                aria-hidden="true"
                              />
                                                          {item.name}
                                                          
                              <ChevronRightIcon
                                className={classNames(
                                  open
                                    ? "rotate-90 text-gray-500"
                                    : "text-gray-400",
                                  "ml-auto h-5 w-5 shrink-0"
                                )}
                                aria-hidden="true"
                              />
                                                        
                            </Disclosure.Button>
                                                                               
                          </>
                        )}
                                            
                      </Disclosure>
                    )}
                                    
                  </li>
                ))}
                            
              </ul>
                        
            </li>
                               
          </ul>
                
        </nav>
            
      </div>

      <div className="w-[80vw]">
        <Header />
        <MissingGradeForm />
      </div>
    </div>
  );
}
