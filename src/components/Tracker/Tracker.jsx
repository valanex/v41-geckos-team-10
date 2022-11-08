import React, { useEffect } from "react";
import axios from "axios";
import "./Tracker.css";
import SortJobs from "./SortJobs";
import TrackerFilter from "./TrackerFilter";
import JobList from "./JobList";
import AddJob from "../AddJob/AddJob";
import EditJobPanel from "./EditJobPanel";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { displayJobs } from "../../redux/Slices/jobSlice";
import IsLoggedIn from "../IsLoggedIn";

const Tracker = () => {
  const user = useSelector((state) => state.user.value);
  const jobs = useSelector((state) => state.jobs.value);
  const [openTrackerDrawer, setOpenTrackerDrawer] = useState("hidden");
  const [filter, setFilter] = useState("all");
  const [sortSelection, setSortSelection] = useState("blank");
  const [openEditTrackerDrawer, setOpenEditTrackerDrawer] = useState({
    isClosed: true,
  });
  const [selectedJob, setSelectedJob] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("http://localhost:4000/jobs", { withCredentials: true })
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data); // array of jobs from db for seeing data while developing
          dispatch(displayJobs(res.data));
        } else {
          console.log("Error");
        }
      });
  }, []);

  const filterHandler = (value) => {
    setFilter(value);
  };

  const handleOpenTrackerDrawer = () => {
    openTrackerDrawer === "hidden"
      ? setOpenTrackerDrawer("visible")
      : setOpenTrackerDrawer("hidden");
  };

  const handleOpenEditTrackerDrawer = () => {
    setOpenEditTrackerDrawer({ isClosed: !openEditTrackerDrawer.isClosed });
  };

  const editStyle = {
    visibility: openEditTrackerDrawer.isClosed ? "hidden" : "visible",
  };

  const handleClick = (job) => {
    setSelectedJob(job);
    if (openEditTrackerDrawer.isClosed) {
      handleOpenEditTrackerDrawer();
    }
  };

  if (user.isLoggedIn) {
    return (
      <div className="tracker-page">
        <div className="tracker-div">
          <div className="tracker-content">
            <TrackerFilter
              filterHandler={filterHandler}
              openEditTrackerDrawer={openEditTrackerDrawer}
              setOpenEditTrackerDrawer={setOpenEditTrackerDrawer}
              dispatch={dispatch}
              sortSelection={sortSelection}
            />
            <div className="tracker-control">
              <SortJobs
                jobs={jobs}
                sortSelection={sortSelection}
                setSortSelection={setSortSelection}
                dispatch={dispatch}
              />
              <button
                className="tracker-button"
                onClick={handleOpenTrackerDrawer}
              >
                Create Tracker
              </button>
            </div>
            <JobList jobs={jobs} handleClick={handleClick} />
          </div>
          <div className={`tracker_drawer ${openTrackerDrawer}`}>
            <AddJob handleOpenTrackerDrawer={handleOpenTrackerDrawer} />
          </div>
          <div style={editStyle}>
            <EditJobPanel
              dispatch={dispatch}
              sortSelection={sortSelection}
              handleOpenTrackerDrawer={handleOpenEditTrackerDrawer}
              selectedJob={selectedJob}
              filter={filter}
            />
          </div>
        </div>
      </div>
    );
  } else {
    return <IsLoggedIn />;
  }
};
export default Tracker;