import React from "react";

const CreatePost = (props) => {
  const handleOrganisationName = (event) => {
    props.setPost((post) => ({
      ...post,
      organisationName: event.target.value,
    }));
  };

  const handleNoOfPosts = (event) => {
    props.setPost((post) => ({
      ...post,
      noOfPosts: event.target.value,
    }));
  };

  const handlePostName = (event) => {
    props.setPost((post) => ({
      ...post,
      postName: event.target.value,
    }));
  };

  const handlePayScale = (event) => {
    props.setPost((post) => ({
      ...post,
      payScale: event.target.value,
    }));
  };

  const handleExpLevel = (event) => {
    props.setPost((post) => ({
      ...post,
      expLevel: event.target.value,
    }));
  };

  const handlePostTime = (event) => {
    props.setPost((post) => ({
      ...post,
      postTime: event.target.value,
    }));
  };

  const handlePostStatus = (event) => {
    props.setPost((post) => ({
      ...post,
      postStatus: event.target.value,
    }));
  };

  const handlePostLocation = (event) => {
    props.setPost((post) => ({
      ...post,
      postLocation: event.target.value,
    }));
  };

  const handleApplicationFees = (event) => {
    props.setPost((post) => ({
      ...post,
      applicationFees: event.target.value,
    }));
  };

  const handleEducation = (event) => {
    props.setPost((post) => ({
      ...post,
      education: event.target.value,
    }));
  };

  const handleShortEducation = (event) => {
    props.setPost((post) => ({
      ...post,
      shortEducation: event.target.value,
    }));
  };

  const handleExperience = (event) => {
    props.setPost((post) => ({
      ...post,
      experience: event.target.value,
    }));
  };

  const handleSkills = (event) => {
    props.setPost((post) => ({
      ...post,
      skills: event.target.value,
    }));
  };

  const handleStartDate = (event) => {
    props.setPost((post) => ({
      ...post,
      startDate: event.target.value,
    }));
  };

  const handleLastDate = (event) => {
    props.setPost((post) => ({
      ...post,
      lastDate: event.target.value,
    }));
  };

  const handleShortStartDate = (event) => {
    props.setPost((post) => ({
      ...post,
      shortStartDate: event.target.value,
    }));
  };

  const handleShortLastDate = (event) => {
    props.setPost((post) => ({
      ...post,
      shortLastDate: event.target.value,
    }));
  };

  const handleMinAgeLimit = (event) => {
    props.setPost((post) => ({
      ...post,
      minAgeLimit: event.target.value,
    }));
  };

  const handleMaxAgeLimit = (event) => {
    props.setPost((post) => ({
      ...post,
      maxAgeLimit: event.target.value,
    }));
  };

  const handleAgeRefDate = (event) => {
    props.setPost((post) => ({
      ...post,
      ageRefDate: event.target.value,
    }));
  };

  const handleSelectionProcess = (event) => {
    props.setPost((post) => ({
      ...post,
      selectionProcess: event.target.value,
    }));
  };

  const handleApplicationType = (event) => {
    props.setPost((post) => ({
      ...post,
      applicationType: event.target.value,
    }));
  };

  const handleOfficialAddress = (event) => {
    props.setPost((post) => ({
      ...post,
      officialAddress: event.target.value,
    }));
  };

  const handleOfficialNotification = (event) => {
    props.setPost((post) => ({
      ...post,
      officialNotification: event.target.value,
    }));
  };

  const handleApplicationForm = (event) => {
    props.setPost((post) => ({
      ...post,
      applicationForm: event.target.value,
    }));
  };

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>CREATE POST</h2>
      <div className="jobInfoInputTaker">
        <input
          type="text"
          placeholder="Organisation Name"
          onChange={handleOrganisationName}
        />
        <input
          type="number"
          placeholder="No. of Posts"
          onChange={handleNoOfPosts}
        />
        <input type="text" placeholder="Post Name" onChange={handlePostName} />
        <textarea type="text" placeholder="Salary" onChange={handlePayScale} />
        <input
          type="text"
          placeholder="Expert / Fresher"
          onChange={handleExpLevel}
        />
        <input
          type="text"
          placeholder="Full Time / Part Time"
          onChange={handlePostTime}
        />
        <input
          type="text"
          placeholder="Permanent / Temporary"
          onChange={handlePostStatus}
        />
        <input
          type="text"
          placeholder="Location"
          onChange={handlePostLocation}
        />
        <textarea
          type="text"
          placeholder="Application fees"
          onChange={handleApplicationFees}
        />
        <textarea
          type="text"
          placeholder="Education"
          onChange={handleEducation}
        />
        <input
          type="text"
          placeholder="Short Education"
          onChange={handleShortEducation}
        />
        <input
          type="text"
          placeholder="Experience"
          onChange={handleExperience}
        />
        <input
          type="text"
          placeholder="Skills & Knowledge"
          onChange={handleSkills}
        />
        <input
          type="text"
          placeholder="Selection Process"
          onChange={handleSelectionProcess}
        />
        <input
          type="text"
          placeholder="Start Date"
          onChange={handleStartDate}
        />
        <input type="text" placeholder="Last Date" onChange={handleLastDate} />
        <input
          type="text"
          placeholder="Start Short Date"
          onChange={handleShortStartDate}
        />
        <input
          type="text"
          placeholder="Last Short Date"
          onChange={handleShortLastDate}
        />
        <input
          type="text"
          placeholder="minimum age Limit"
          onChange={handleMinAgeLimit}
        />
        <input
          type="text"
          placeholder="maximum age limit"
          onChange={handleMaxAgeLimit}
        />
        <input
          type="text"
          placeholder="age limit last date"
          onChange={handleAgeRefDate}
        />
        <input
          type="text"
          placeholder="Application type"
          onChange={handleApplicationType}
        />
        <input
          type="text"
          placeholder="website address"
          onChange={handleOfficialAddress}
        />
        <input
          type="text"
          placeholder="Official Notification"
          onChange={handleOfficialNotification}
        />
        <input
          type="text"
          placeholder="Application form"
          onChange={handleApplicationForm}
        />
      </div>
    </div>
  );
};

export default CreatePost;
