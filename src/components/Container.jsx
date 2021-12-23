import React, { useState } from "react";
import Sidebar from "../Sidebar";
import Posts from "./Posts";

const PostInfo = {
  organisationName: "Union Public Service Commission (UPSC)",
  noOfPosts: "Various",
  postName: "Assistant",
  payScale: "as per the rules",
  expLevel: "Expert, Freshers also",
  postTime: "Full Time",
  postStatus: "Permanent",
  postLocation: "All over India",
  applicationFees:
    "Applicants have to pay the application fees as per the rules",
  education: "relevant qualification",
  shortEducation: "Degree",
  experience: "N/A",
  skills: "Required",
  startDate: "01st January 2022",
  lastDate: "31st December 2022",
  shortStartDate: "01.01.2022",
  shortLastDate: "31.12.2022",
  minAgeLimit: "18",
  maxAgeLimit: "60",
  ageRefDate: "01.01.2022",
  selectionProcess: "Interview",
  applicationType: "Application",
  officialAddress: "https://rojgar.live/",
  officialNotification: "https://rojgar.live/",
  applicationForm: "https://rojgar.live/",
};

const Container = () => {
  const [selectedTab, setselectedTab] = useState("ROJGAR_LIVE");
  const [post, setPost] = useState(PostInfo);

  return (
    <section className="content">
      <Posts selectedTab={"JOB_INPUT"} post={post} setPost={setPost} />
      <Sidebar selectedTab={selectedTab} setselectedTab={setselectedTab} />
      <Posts selectedTab={selectedTab} post={post} setPost={setPost} />
    </section>
  );
};

export default Container;
