import React, { useEffect, useState } from "react";
import Navbar2 from "../../components/Navbar-horizontal";
import CreateUserModal from "../../components/CreateUserModal";
import ListTableComponent from "../../components/list-table";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { colPropType } from "../../core-ui/table/types";
import ReportGrade from "./modals/report-grade";
import MissingGrade from "./fakeData";

function Missing() {
  const [loading, setLoading] = useState(false);
  const [showReportModal, setShowReportModal] = useState(false);

  const missingGrade = new MissingGrade();

  const data = missingGrade.getAllReports();

  const [limit, setLimit] = useState<number>(10);
  const [skip, setSkip] = useState<number>(0);
  const [end, setEnd] = useState<number>(0);
  const [search, setSearch] = useState("");

  const cols: colPropType[] = [
    {
      title: "course code",
      type: "value",
      rows: [{ text: { accessor: ["courseCode"] } }],
    },
    {
      title: "course name",
      type: "value",
      rows: [{ text: { accessor: ["courseName"] } }],
    },
    {
      title: "Name of Lecturer",
      type: "value",
      rows: [{ text: { accessor: ["nameOfLecturer"] } }],
    },
    {
      title: "Credit Hours",
      type: "value",
      align: "center",
      rows: [{ text: { accessor: ["creditHours"] } }],
    },
    {
      title: "Expected Grade",
      type: "value",
      align: "center",
      rows: [{ text: { accessor: ["expectedGrade"] } }],
    },
    {
      title: "Actions",
      type: "actions",
      align: "center",
      rows: [
        {
          action: {
            type: "button",
            title: "Delete",
            svg: "delete",
            onClick: function (data: any) {},
          },
        },
        {
          action: {
            type: "button",
            title: "View",
            svg: "view",
            onClick: function (data: any) {},
          },
        },
      ],
    },
  ];

  const handleReportClose = () => {
    setShowReportModal(false);
  };

  return (
    <>
      <div className="flex">
        <div></div>
        <div className="flex flex-col h-screen w-screen">
          <Navbar2 title="Missing Grade" showSec={false} />
          <div className="bg-gray-100 h-full pb-1 px-5">
            <div className="flex justify-between items-center mt-5 px-5">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
                  <svg width={20} height={20} viewBox="0 0 512 512">
                    <path
                      d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
                      fill="none"
                      stroke="#b4b4b4"
                      strokeMiterlimit={10}
                      strokeWidth="32px"
                    />
                    <path
                      fill="none"
                      stroke="#b4b4b4"
                      strokeLinecap="round"
                      strokeMiterlimit={10}
                      strokeWidth="32px"
                      d="M338.29 338.29L448 448"
                    />
                  </svg>
                </div>
                <div>
                  <input
                    placeholder="Search"
                    className="pl-9 w-72 h-10 border-[1.5px]"
                  />
                </div>
              </div>
              <div>
                <button
                  onClick={() => setShowReportModal(true)}
                  className="bg-primary flex items-center justify-center text-white h-10 px-3"
                >
                  <AiOutlinePlusCircle className="mr-2" />
                  Report Missing Grade
                </button>
              </div>
            </div>
            <main className={"mt-5 px-5 overflow-x-none"}>
              <ListTableComponent
                refetch={""}
                setLimit={setLimit}
                limit={limit}
                loading={loading}
                data={data || []}
                total={data.length}
                skip={skip}
                setSkip={setSkip}
                search={search}
                setSearch={setSearch}
                end={end}
                setEnd={setEnd}
                cols={cols}
                showPagination
              />
            </main>
          </div>
        </div>
      </div>
      <ReportGrade onClose={handleReportClose} visible={showReportModal} />
    </>
  );
}

export default Missing;
