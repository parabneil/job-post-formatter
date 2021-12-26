import React from "react";

const SarkariResultLive = (props) => {
  return (
    <div class="postContainer">
      <h2 style={{ textAlign: "center" }}>SARKARI RESULTS LIVE</h2>
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
          <table>
            <tbody>
              <tr>
                <td colspan="2" width="623">
                  <h2 style={{ textAlign: "center" }}>
                    {props.post.organisationName} Recruitment
                  </h2>
                </td>
              </tr>
              <tr>
                <td width="312">
                  <strong>Job Location:</strong>
                </td>
                <td width="312">{props.post.postLocation}</td>
              </tr>
              <tr>
                <td width="312">
                  <strong>Post Name:</strong>
                </td>
                <td width="312">{props.post.postName}</td>
              </tr>
              <tr>
                <td width="312">
                  <strong>No of Vacancy:</strong>
                </td>
                <td width="312">{props.post.noOfPosts}&nbsp;Posts</td>
              </tr>
              <tr>
                <td width="312">
                  <strong>Pay Scale:</strong>
                </td>
                <td width="312">
                  <p class="zw-paragraph">{props.post.payScale}</p>
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            As per above information {props.post.organisationName}&nbsp;publish
            job notification for the {props.post.postName}&nbsp;Posts. There are{" "}
            {props.post.noOfPosts} vacancies and all are postings for{" "}
            {props.post.postLocation}. Salary will be provided as mention in
            above chart and for experience candidate it will be decided as per
            skills and experience. We requesting all interested candidate to
            check all the given information before apply the given job post. We
            are just collecting all available job opening information and
            publishing one place to benefit people. We are not charging or
            requesting any money against our service. You have to ensure and
            validate information before apply for the job. All the Job
            eligibility requirement and criteria regarding this job posing i.e.
            age limit, qualification, selection procedure, pay scale (pay band),
            how to apply, Syllabus &amp; exam pattern, written test, examination
            date, application fees are given below.
          </p>
          <table>
            <tbody>
              <tr>
                <td colspan="2" width="623">
                  <h4>
                    Eligibility Criteria for {props.post.organisationName} Job
                    Posting:
                  </h4>
                </td>
              </tr>
              <tr>
                <td width="312">
                  <strong>Educational Qualification :&nbsp;</strong>
                </td>
                <td width="312">
                  All Interested Candidates should have completed the{" "}
                  {props.post.education} or any equivalent qualification
                  recognized as such by the Central Government.
                </td>
              </tr>
              <tr>
                <td width="312">
                  <strong>Age Limit:&nbsp;</strong>
                </td>
                <td width="312">
                  The applicant's age limit must be minimum of{" "}
                  {props.post.minAgeLimit} years and maximum of{" "}
                  {props.post.maxAgeLimit} years as on {props.post.ageRefDate}.
                </td>
              </tr>
              <tr>
                <td width="312">
                  <strong>Age Relaxation:&nbsp;</strong>
                </td>
                <td width="312">
                  Age Relaxation will be applicable as per rules. Scheduled
                  Caste / Scheduled Tribe:&nbsp;05 years Other Backward Classes
                  (Non-Creamy Layer):&nbsp;03 years Persons With Disabilities
                  (PWD):&nbsp;10 years
                </td>
              </tr>
              <tr>
                <td width="312">
                  <strong>Selection Process:&nbsp;</strong>
                </td>
                <td width="312">
                  Selection will be made on {props.post.selectionProcess}.
                </td>
              </tr>
              <tr>
                <td width="312">
                  <strong>Application Fee:&nbsp;</strong>
                </td>
                <td width="312">{props.post.applicationFees}.</td>
              </tr>
            </tbody>
          </table>
          <p>
            How to Apply {props.post.organisationName} employee search:
            Interested Candidates may apply online through website Via online
            via apply link, Before apply also check advertisement PDF and
            information which given end of the post
          </p>
          <table>
            <tbody>
              <tr>
                <td colspan="2" width="623">
                  <strong>Important Dates to Remember:</strong>
                </td>
              </tr>
              <tr>
                <td width="312">
                  <strong>
                    Starting Date for Submission of Online Application:&nbsp;
                  </strong>
                </td>
                <td width="312">{props.post.startDate}</td>
              </tr>
              <tr>
                <td width="312">
                  <strong>
                    Last Date for Submission of Online Application:&nbsp;
                  </strong>
                </td>
                <td width="312">{props.post.lastDate}</td>
              </tr>
              <tr>
                <td colspan="2" width="623">
                  Detail Advertisement Link:&nbsp;
                  <a
                    href={props.post.officialNotification}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-mce-href={props.post.officialNotification}
                  >
                    Download Now
                  </a>
                </td>
              </tr>
              <tr>
                <td colspan="2" width="623">
                  Application Form:&nbsp;
                  <a
                    href={props.post.applicationForm}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-mce-href={props.post.applicationForm}
                  >
                    Apply Now
                  </a>
                </td>
              </tr>
              <tr>
                <td colspan="2" width="623">
                  Check All Job Detail from Official website Before Apply for
                  the Respective Job Post
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default SarkariResultLive;
