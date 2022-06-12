import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useQuery } from "react-query";

async function fetchStudent(userId) {
  const par = { id: userId };
  const { data } = await axios.post(
    "http://127.0.0.1:8000/api/show-student",
    par
  );
  console.log(data.student);
  return data;
}

export default function EditStudent() {
  let navigate = useNavigate();
  let { userId } = useParams();

  const color = "light";
  const { data, error, isError } = useQuery(
    ["student", userId],
    () => fetchStudent(userId),
    { retry: false }
  );
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState("");
  const [classe, setClasse] = useState("");

  const handleSubmit = (e, userId) => {
    e.preventDefault()
    const formData = {
      "id": userId,
      "name" : name === "" ? data?.student.name : name,
      "lastname" : lastname === "" ? data?.student.lastname : lastname,
      "email" : email === "" ? data?.student.email : email,
      "type" : type === "" ? data?.student.type : type,
      "classe" : classe === "" ? data?.student.classe : classe
    }
    console.log(formData)
    axios.post(`http://127.0.0.1:8000/api/update-student`, { formData })
   .then(res => {
      console.log(res);
    console.log(res.data);
    })
  }
  if (isError) {
    return <div>Error! {error.message}</div>;
  }
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
                  Students
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
                  name
                </label>

                <div class="relative mt-1">
                  <input
                    type="text"
                    id="email"
                    name="name"
                    class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                    defaultValue={data?.student.name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <label for="email" class="text-sm font-medium">
                  lastName
                </label>

                <div class="relative mt-1">
                  <input
                    type="text"
                    id="email"
                    name="lastname"
                    class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                    placeholder="Enter email"
                    defaultValue={data?.student.lastname}
                    onChange={(e) => setLastname(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <label for="email" class="text-sm font-medium">
                  Classe
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
                      onChange={(e) => setClasse(e.target.value)}
                      selected
                    >
                      {data?.student.classe}
                    </option>
                    <option defaultValue="Choice 2">Bucharest</option>
                    <option defaultValue="Choice 3">London</option>
                    <option defaultValue="Choice 4">Washington</option>
                  </select>
                </div>
              </div>
              <div>
                <label for="email" class="text-sm font-medium">
                  Type
                </label>

                <div class="w-1/6">
                  <select
                    class="form-control rounded"
                    name="type"
                    id="choice-button"
                    placeholder="Language"
                    style={{ width: "245px", height: "50px" }}
                  >
                    <option
                      value={type}
                      onChange={(e) => setType(e.target.value)}
                      defaultValue="Choice 1"
                      selected
                    >
                      {data?.student.type}
                    </option>
                    <option defaultValue="Choice 2">Licence</option>
                    <option defaultValue="Choice 3">Master</option>
                    <option defaultValue="Choice 4">Doctorat</option>
                  </select>
                </div>
              </div>
              <div>
                <label for="email" class="text-sm font-medium">
                  Email
                </label>

                <div class="relative mt-1">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                    placeholder="Enter email"
                    defaultValue={data?.student.email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <button onClick={(e) => handleSubmit(e, data?.student.id)} className=" bg-emerald-400 text-white mr-2 m-2   p-2 rounded  h-14 hover:cursor-pointer">
                Edit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
