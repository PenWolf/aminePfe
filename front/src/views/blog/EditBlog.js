import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useQuery } from "react-query";


export default function EditBlog() {
  let navigate = useNavigate();
  let { userId } = useParams();

  const color = 'light'
  return (
    <div className="flex flex-wrap mt-4">
      <div className="w-full mb-12 px-4">
        <div
          className={
            "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
            (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
          }
        >
          <div className="rounded-t mb-0 px-4 py-3 border-0">
            <div className="flex flex-wrap items-center">
              <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                <h3
                  className={
                    "font-semibold text-lg " +
                    (color === "light" ? "text-blueGray-700" : "text-white")
                  }
                >
                  Blog 
                </h3>
              </div>
            </div>
          </div>
          <div className="block w-full pl-24 ">
            <form
              action=""
              class="p-8 mt-6 mb-0 space-y-4 rounded-lg shadow-2xl flex flex-col items-center"
            >
              <div>
                <label for="email" class="text-sm font-medium">
                  Title
                </label>

                <div class="relative mt-1">
                  <input
                    type="text"
                    id="email"
                    name="name"
                    class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                    defaultValue={'Lorem ipsum'}
                  />
                </div>
              </div>
              <div>
                <label for="email" class="text-sm font-medium">
                  Excerpt
                </label>

                <div class="relative mt-1">
                  <input
                    type="text"
                    id="email"
                    name="name"
                    class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                    defaultValue={'Lorem ipsum dolor sit amet'}
                  />
                </div>
              </div>
              <div>
                <label for="email" class="text-sm font-medium">
                  Body
                </label>

                <div class="relative mt-1">
                  <textarea
                    type="text"
                    id="email"
                    name="name"
                    class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                    defaultValue={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
                  />
                </div>
              </div>
              <div>
                <label for="email" class="text-sm font-medium">
                 Type
                </label>

                <div class="w-1/6">
                  <select
                    class="form-control rounded"
                    id="choice-button"
                    placeholder="Language"
                    name="classe"
                    style={{ width: "245px", height: "50px" }}
                  >
                    <option
                      selected
                    >
                      Licence
                    </option>
                    <option defaultValue="Choice 2">Bucharest</option>
                    <option defaultValue="Choice 3">London</option>
                    <option defaultValue="Choice 4">Washington</option>
                  </select>
                </div>
              </div>


              <button className=" bg-emerald-400 text-white mr-2 m-2   p-2 rounded  h-14 hover:cursor-pointer">
                Edit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
