import React from "react";

const SarkariNaukriUpdate = (props) => {
  return (
    <div class="postContainer">
      <h2 style={{ textAlign: "center" }}>SARKARI NAUKRI UPDATE</h2>
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
            {props.post.organisationName} Recruitment [current_date format='Y']
            find employees for the post of {props.post.noOfPosts}{" "}
            {props.post.postName} Vacancies in {props.post.postLocation}.
            Employment job sites publish the notification and done the Job
            posting on job search board. This is a great chance for interested
            candidates who are looking for Sarkari Naukri / Government Jobs.
            They all can apply online mode before or on Last Date{" "}
            {props.post.lastDate}.
          </p>
          <p>
            All Govt job applicants can apply through online applications or
            offline mode through employee search sites for the{" "}
            {props.post.postName} posts from the official job posting website.
            Get complete information regarding this employee search Sarkari
            Naukri i.e. age limit, qualification, selection procedure, pay scale
            (pay band), how to apply, Syllabus &amp; exam pattern, written test,
            examination date, application fees are given below.
          </p>
          <h2>{props.post.organisationName} employee search Detail.</h2>
          <p>
            <strong>Job Location</strong>: {props.post.postLocation}.
          </p>
          <p>
            <strong>Job Posting Details:</strong>
          </p>
          <ul>
            <li>
              <p>
                <strong>Post Name:</strong> {props.post.postName}.
              </p>
            </li>
            <li>
              <p>
                <strong>No of Vacancy:</strong> {props.post.noOfPosts} Posts.
              </p>
            </li>
            <li>
              <p>
                <strong>Pay Scale: </strong>
                {props.post.payScale}.
              </p>
            </li>
          </ul>
          <p>
            <strong>Categories Wise&nbsp;employee search:&nbsp;&nbsp;</strong>
          </p>
          <p>For {props.post.postName}</p>
          <ul>
            <li>
              For Category wise distribution check the official notification
              given below.
            </li>
          </ul>
          <p>
            <strong>
              Eligibility Criteria for {props.post.organisationName} Job
              Posting:
            </strong>
          </p>
          <ul>
            <li>
              <p>
                <strong>Educational Qualification :&nbsp;</strong>
              </p>
            </li>
            <li>
              <p>
                <strong>For {props.post.postName}:</strong>{" "}
                {props.post.education} from a recognized University. or any
                equivalent qualification recognized as such by the Central
                Government.
              </p>
            </li>
            <li>
              <p>
                <strong>Nationality:</strong> Indian.
              </p>
            </li>
            <li>
              <p>
                <strong>Age Limit:</strong> {props.post.minAgeLimit} to{" "}
                {props.post.maxAgeLimit} years (As on {props.post.ageRefDate}).
              </p>
            </li>
          </ul>
          <p>
            <strong>Age Relaxation: </strong>Age Relaxation will be applicable
            as per rules.
          </p>
          <ul>
            <li>
              <p>
                <strong>Scheduled Caste / Scheduled Tribe:</strong> 05 years
              </p>
            </li>
            <li>
              <p>
                <strong>Other Backward Classes (Non-Creamy Layer):</strong> 03
                years
              </p>
            </li>
            <li>
              <p>
                <strong>Persons With Disabilities (PWD):</strong> 10 years
              </p>
            </li>
          </ul>
          <p>
            <strong>Selection Process:</strong> Selection will be made on{" "}
            {props.post.selectionProcess}.
          </p>
          <p>
            <strong>Application Fee:</strong>&nbsp;{props.post.applicationFees}.
          </p>
          <p>
            <strong>
              How to Apply {props.post.organisationName}&nbsp;employee search:
            </strong>{" "}
            Interested Candidates may apply online through{" "}
            {props.post.organisationName} website between{" "}
            {props.post.shortStartDate} to {props.post.shortLastDate}.
          </p>
          <p>
            <strong>Important Dates to Remember:</strong>
          </p>
          <ul>
            <li>
              <p>
                <strong>
                  Starting Date for Submission of Online Application:
                </strong>
                {props.post.shortStartDate}.
              </p>
            </li>
            <li>
              <p>
                <strong>
                  Last Date for Submission of Online Application:{" "}
                </strong>
                {props.post.shortLastDate}.
              </p>
            </li>
          </ul>
          <p>
            <strong>Employment Job Sites link:</strong>
          </p>
          <ul>
            <li>
              <p>
                <strong>Detail Advertisement Link:&nbsp;</strong>
                <a
                  href={props.post.officialNotification}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-mce-href={props.post.officialNotification}
                >
                  Download Now
                </a>
              </p>
            </li>
            <li>
              <p>
                <strong>Application Form:&nbsp;</strong>
                <a
                  href={props.post.applicationForm}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-mce-href={props.post.applicationForm}
                >
                  Apply Now
                </a>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SarkariNaukriUpdate;
