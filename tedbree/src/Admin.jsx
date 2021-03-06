import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import NotificationsIcon from "@mui/icons-material/Notifications";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SearchIcon from "@mui/icons-material/Search";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import { Link } from "react-router-dom";
import Footer from "./Footer";

function Admin() {
  const [users, setUser] = useState([]);
  const [title, setTitle] = useState("");
  const [salary, setSalary] = useState("");
  const [userId, setUserId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getUsers();
  }, []);
  function getUsers() {
    fetch("https://61cf24aa65c32600170c7ebd.mockapi.io/tedbree").then(
      (result) => {
        result.json().then((resp) => {
          // console.warn(resp)
          setUser(resp);
          setTitle(resp[0].title);
          setSalary(resp[0].salary);
          setUserId(resp[0].id);
          setIsLoading(false);
        });
      }
    );
  }

  function deleteUser(id) {
    fetch(`https://61cf24aa65c32600170c7ebd.mockapi.io/tedbree/${id}`, {
      method: "DELETE",
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp);
        getUsers();
      });
    });
  }
  function selectUser(id) {
    let item = users[id - 1];
    setTitle(item.title);
    setSalary(item.salary);
    setUserId(item.id);
  }
  function updateUser() {
    let item = { title, salary };
    console.warn("item", item);
    fetch(`https://61cf24aa65c32600170c7ebd.mockapi.io/tedbree/${userId}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp);
        getUsers();
      });
    });
  }
  return (
    <div>
      <div className=" flex flex-col w-full bg-sky-900 py-11 relative">
        <nav className="flex justify-around">
          <div className="flex flex-col">
            <Link to="/">
              <h1 className="font-bold font-serif italic origin-bottom -rotate-12 text-2xl text-sky-100">
                FIND JOBS
              </h1>
            </Link>

            <p className="text-sky-100 text-xs font-serif italic origin-bottom -rotate-4 ml-4 mt-1">
              for employers
            </p>
          </div>
          <div className="flex">
            <NotificationsIcon style={{ color: "white", marginTop: 10 }} />
            <img
              className="w-4  h-4 md:w-12 mt-4 md:mt-0 md:h-12 rounded-full ml-4"
              src="../assets/job2.jpg"
              alt="logo"
            />
          </div>
        </nav>
        <div className="w-6/12 ml-10 md:ml-40 lg:ml-80">
          <h1 className="text-white text-2xl md:text-5xl font-bold mt-32">
            Job
          </h1>
        </div>
      </div>

      <div className="md:flex md:justify-around mt-10">
        <div className="flex justify-around bg-white  w-12/12  md:w-8/12 lg:w-4/12 shadow-lg py-2 rounded-md">
          <SearchIcon style={{ color: "turquoise", marginTop: 10 }} />
          <input className="ml-4" />
          <button className="bg-rose-500  py-2 px-2 md:py-1 md:px-4 rounded-md ml-1 text-sm">
            <p className="text-white">Search</p>
          </button>
        </div>

        <button className="bg-rose-500 flex w-36 mt-10 ml-20 md:mt-0 md:w-40 md:py-1 py-2 px-1 md:px-0 rounded-lg text-sm">
          <AddIcon
            style={{
              color: "white",
              marginTop: 10,
              fontSize: 20,
              marginLeft: 20,
            }}
          />
          <Link to="/admin-create">
            <p className="text-white mt-2 ml-4">New User</p>
          </Link>
        </button>
      </div>

      <div className="flex bg-sky-900  w-12/12 md:w-11/12 mt-10 md:ml-20 rounded-md py-2 px-2  justify-between md:justify-evenly">
        <div className="text-white md:text-sm text-xs md:mt-0 mt-2">Job</div>
        <div className="text-white md:text-sm text-xs md:mt-0 mt-2">Email</div>
        <div className="flex">
          <p className="text-white md:text-sm text-xs md:mt-0 mt-2">Filter</p>
          <FilterAltIcon style={{ color: "white", marginLeft: 5 }} />
        </div>
      </div>

      {isLoading ? (
        <h1 className="h-screen  text-2xl ml-10 mt-10 md:text-4xl lg:mt-40 md:mt-20  md:ml-40 lg:ml-80">
          Loading data from the API, please wait...
        </h1>
      ) : (
        <div>
          {users.map((item, i) => (
            <div
              className="flex  bg-white shadow-lg w-12/12 md:w-11/12 md:ml-10 mt-4 py-4 justify-around md:justify-around"
              key={i}
            >
              <div>
                <RadioButtonCheckedIcon
                  style={{ color: "crimson", marginLeft: 5 }}
                />
              </div>
              <div className="text-xs md:text-sm md:mt-0 mt-2">
                {item.title}
              </div>
              <div className="text-xs md:text-sm md:mt-0 mt-2">
                {item.salary}
              </div>
              <button
                onClick={() => selectUser(item.id)}
                className="bg-rose-500 text-white w-20 rounded text-sm hidden md:block"
              >
                Edit
              </button>
              <button
                onClick={() => deleteUser(item.id)}
                className="border-2 border-cyan-400 text-cyan-400 py-1 px-2  text-xs md:text-sm"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="py-20">
        <div className="flex flex-col justify-center w-9/12 md:w-5/12 items-center mt-10 md:ml-56 lg:ml-96 ml-14 bg-white shadow-2xl p-4">
          <input
            className="bg-white  border-2 border-gray-300 rounded-md mt-4 py-2 px-2"
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />{" "}
          <br />
          <br />
          <input
            className="bg-white  border-2 border-gray-300 rounded-md  mt-4 py-2 px-2"
            type="text"
            value={salary}
            onChange={(e) => {
              setSalary(e.target.value);
            }}
          />{" "}
          <br />
          <br />
          <button
            onClick={updateUser}
            className="bg-rose-500 text-white py-2 px-2 mt-10 rounded text-sm "
          >
            Update User
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Admin;
