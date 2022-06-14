import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";


export default function SpecialitiesTable({ color }) {
  let navigate = useNavigate();

  const editing = (id) => {
    navigate("./" + id, { replace: true });
  };
  const go  = () => {
    window.location.replace('http://localhost:3000/admin/createSpeciality');
  }
  const person = [ {
    id : 1,
    name : 'computer science',
    type : 'L'
  },
  {
    id : 2,
    name : 'Programming',
    type : 'L'
  },
  {
    id : 3,
    name : 'Networking',
    type : 'L'
  },
  {
    id : 4,
    name : 'Machine Learning',
    type : 'M'
  },
  {
    id : 5,
    name : 'Artificial Intelligence',
    type : 'M'
  }]
  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
        }
      >
        <div className="w-full flex justify-between ">
          <h1 style={{margin:'15px'}}>Specialities</h1>
          <div className="mr-12" style={{margin:'15px'}}>
            {" "}
            <button className=" bg-emerald-400 text-white  w-full  p-2 rounded  h-14 hover:cursor-pointer" onClick={() => go()}>
              create
            </button>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  ID
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Name
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Type
                </th>

                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  action
                </th>
              </tr>
            </thead>
            <tbody>
              {person.map((person) => (
                <tr>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                    <span
                      className={
                        " font-bold " +
                        +(color === "light"
                          ? "text-blueGray-600"
                          : "text-white")
                      }
                    >
                      {person.id}
                    </span>
                  </td>

                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {person.name}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <i className="fas fa-circle text-orange-500 mr-2"></i>{" "}
                    {person.type}
                  </td>

                  <td className="flex border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                    <button
                      className=" bg-emerald-400 text-white mr-2   p-2 rounded w-1/2 h-14 hover:cursor-pointer"
                      onClick={() => editing(person.id)}
                    >
                      edit
                    </button>
                    <button className="  bg-red-500 text-white border-0 p-2 rounded w-1/2 h-14 hover:cursor-pointer">
                      delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

SpecialitiesTable.defaultProps = {
  color: "light",
};

SpecialitiesTable.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
