import React from "react";

const RojgarLive = (props) => {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>ROJGAR LIVE</h2>
      <div class="postBody">
        <h1>
          <span class="title">
            {props.post.organisationName} Recruitment -{" "}
            {props.post.noOfPosts === 1
              ? props.post.postName + " Post"
              : props.post.noOfPosts <= 99
              ? props.post.postName + " Posts"
              : props.post.noOfPosts > 99
              ? props.post.noOfPosts + " " + props.post.postName + " Posts"
              : null}{" "}
            -{" "}
            {props.post.shortEducation !== "Degree"
              ? props.post.shortEducation + " Pass"
              : null}{" "}
            Apply Now
          </span>
        </h1>
        <div style={{ overflowY: "hidden" }}>
          <p>
            {props.post.organisationName} has positions open for{" "}
            {props.post.noOfPosts} {props.post.postName} Posts in{" "}
            {props.post.postLocation}. All positions require a minimum{" "}
            {props.post.shortEducation} Pass candidate. The closing date for
            applications is {props.post.lastDate}. Interested persons should
            submit an application online with a resume and a cover letter.
          </p>

          <p>
            <strong>Position/Title:</strong>&nbsp;{props.post.noOfPosts}{" "}
            {props.post.postName} Vacancies.
          </p>
          <p>
            <strong>Department:</strong>&nbsp;{props.post.organisationName}.
          </p>
          <p>
            <strong>Pay Scale:</strong>&nbsp;Candidates will get paid{" "}
            {props.post.payScale}.
          </p>

          <p>
            <strong>Expert – Fresher:</strong>&nbsp;{props.post.expLevel} apply.
          </p>

          <p>
            <strong>Part-Time – Full Time:</strong>&nbsp;{props.post.postTime}.
          </p>

          <p>
            <strong>Temporary – Permanent:</strong>&nbsp;{props.post.postStatus}
            .
          </p>

          <p>
            <strong>Location:</strong>&nbsp;{props.post.postLocation}.
          </p>

          <p>
            <strong>Application Fee:</strong>&nbsp;{props.post.applicationFees}.
          </p>

          <h3>Minimum Requirement {props.post.organisationName}:</h3>

          <p>
            <strong>Education:</strong>&nbsp; All Interested Candidates should
            have completed the {props.post.education} or its equivalent
            qualification from a recognized Board / University.
          </p>

          <p>
            <strong>Experience:</strong>&nbsp;{props.post.experience}.
          </p>

          <p>
            <strong>Skills and Knowledge:</strong>&nbsp;{props.post.skills}.
          </p>

          <p>
            <strong>Position Posting Date:</strong>&nbsp;{props.post.startDate}.
          </p>

          <p>
            <strong>Position Closing Date:</strong>&nbsp;{props.post.lastDate}.
          </p>

          <p>
            <strong>Age Limit:</strong>&nbsp;Applicant's age limit must be a
            minimum of {props.post.minAgeLimit} years and a maximum of{" "}
            {props.post.maxAgeLimit} years as on {props.post.ageRefDate}. For
            Age relaxation, Check the official notification publish on their
            official website.
          </p>

          <p>
            <strong>Selection Process:</strong>&nbsp;Selection will be based on{" "}
            {props.post.selectionProcess}.
          </p>

          <p>
            <strong>How To Apply:</strong>
          </p>

          <p>
            Candidates who fulfill the required eligibility may apply online at
            {props.post.organisationName}’s website {props.post.officialAddress}{" "}
            from {props.post.shortStartDate} to {props.post.shortLastDate}.
          </p>

          <p>
            Official Notification:&nbsp;
            <a
              rel="noreferrer noopener"
              href={props.post.officialNotification}
              target="_blank"
              data-mce-href={props.post.officialNotification}
            >
              Click Here to Download
            </a>
          </p>

          <p>
            Application Form:&nbsp;
            <a
              rel="noreferrer noopener"
              href={props.post.applicationForm}
              target="_blank"
              data-mce-href={props.post.applicationForm}
            >
              Click Here to Apply
            </a>
          </p>

          <p>
            Please submit an online application with your resume and a cover
            letter explaining your interest in this position. If you have
            further questions, visit the Official website.
          </p>

          <p>
            NOTICE OF JOB OPENING This company is committed to the principles of
            equal employment opportunity and is committed to making employment
            decisions based on merit. before Apply the job visit employer's
            official website and verify the employment-related detail on your
            own. We are providing equal employment opportunities, as well as
            Guidance in all job and career opportunities and related terms and
            conditions of employment. The company putting efforts to keep a work
            environment free of sexual harassment or discrimination based on
            race, religion, ethnicity, national origin, sexual orientation,
            physical or mental disability, marital status, age, or any other
            status protected in favor of the Jobseeker.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RojgarLive;
