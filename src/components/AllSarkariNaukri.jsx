import React from "react";

const AllSarkariNaukri = (props) => {
  return (
    <div class="postContainer">
      <h2 style={{ textAlign: "center" }}>ALL SARKARI NAUKRI</h2>
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
            <strong>
              {props.post.organisationName} Recruitment [current_date
              format='Y']:
            </strong>
            {props.post.organisationName} has released the official notification
            for {props.post.postName} Posts. The selection of candidates will be
            done through the followed on {props.post.selectionProcess}. So,
            candidates who aspire to apply can now apply for a job through the
            official link given below.
          </p>
          <p>
            Education qualification to apply for this job is{" "}
            {props.post.shortEducation} Pass. After getting selected candidates
            can get payments {props.post.payScale}.{" "}
            {props.post.organisationName} has started accepting an application
            from {props.post.startDate} to {props.post.lastDate}. So, candidates
            who need to apply for this jobs kindly apply as soon as possible.
          </p>
          <h2>
            Eligibility Criteria for {props.post.organisationName} Recruitment
          </h2>
          <p>
            The Eligibility criteria for Education Qualification, Age Limit,
            Salary, Grade pay&nbsp;is as follows:
          </p>
          <h3>Education qualification:</h3>
          <p>
            <strong>{props.post.postName} Posts:</strong>
            {props.post.education} or its equivalent qualification from a
            recognized Board / University.
          </p>
          <p>
            <strong>Total Number of Vacancies: </strong>
            {props.post.noOfPosts} Vacancies.
          </p>
          <p>
            <strong>Selection Process:&nbsp;</strong>Selection of the candidates
            will be totally based on the {props.post.selectionProcess}.
          </p>
          <p>
            <strong>Job Location:</strong> The job Location in{" "}
            {props.post.postLocation}.
          </p>
          <p>
            After getting Selected candidates can get huge salary packages as
            follows:
          </p>
          <table width="100%">
            <tbody>
              <tr>
                <td width="257">Senior Course Assistant</td>
                <td width="186">&nbsp; &nbsp; &nbsp; {props.post.payScale}</td>
                <td width="97">
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; -
                </td>
              </tr>
            </tbody>
          </table>
          <h3>Age Limit:</h3>
          <p>Age Limit for the post of {props.post.postName} Vacancies.</p>
          <p>
            <strong>{props.post.postName} Posts</strong> – The Candidates age
            limit is minimum of {props.post.minAgeLimit} years and maximum of{" "}
            {props.post.maxAgeLimit} years as on {props.post.ageRefDate}.
          </p>
          <h2>{props.post.organisationName} Recruitment Application Fees</h2>
          <p>
            {props.post.postName} Posts, {props.post.applicationFees}.
          </p>
          <h3>How to Apply for {props.post.organisationName} Recruitment:</h3>
          <p>
            Candidates who fulfil the required Eligibility may send their
            Application form to the given address.
          </p>
          <p>
            <strong>email- </strong>recruitment@gmail.com.
          </p>
          <p>
            <strong>Advt Details:</strong>
            <a
              href={props.post.officialNotification}
              target="_blank"
              rel="noopener noreferrer"
              data-mce-href={props.post.officialNotification}
            >
              Click Here
            </a>
          </p>
          <p>
            <strong>Application Form:</strong>
            <a
              href={props.post.applicationForm}
              target="_blank"
              rel="noopener noreferrer"
              data-mce-href={props.post.applicationForm}
            >
              Click Here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AllSarkariNaukri;
