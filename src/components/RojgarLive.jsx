import React from "react";

const RojgarLive = ({ post }) => {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>ROJGAR LIVE</h2>
      <div class="postBody">
        <h1>
          <span class="title">
            {post.organisationName
              ? post.organisationName
              : "Organization Name"}{" "}
            Recruitment -{" "}
            {post.noOfPosts === 1
              ? post.postName + " Post"
              : post.noOfPosts <= 99
              ? post.postName + " Posts"
              : post.noOfPosts > 99
              ? post.noOfPosts + " " + post.postName + " Posts"
              : "Various Posts"}{" "}
            - {post.shortEducation ? post.shortEducation + " Pass" : null} Apply
            Now
          </span>
        </h1>
        <div style={{ overflowY: "hidden" }}>
          <p>
            {post.organisationName} has positions open for {post.noOfPosts}{" "}
            {post.postName} Posts in {post.postLocation}. All positions require
            a minimum {post.shortEducation} Pass candidate. The closing date for
            applications is {post.lastDate}. Interested persons should submit an
            application online with a resume and a cover letter.
          </p>

          <p>
            <strong>Position/Title:</strong>&nbsp;{post.noOfPosts}{" "}
            {post.postName} Vacancies.
          </p>
          <p>
            <strong>Department:</strong>&nbsp;{post.organisationName}.
          </p>
          <p>
            <strong>Pay Scale:</strong>&nbsp;Candidates will get paid{" "}
            {post.payScale && post.payScale.length === 1
              ? post.payScale[0]
              : post.payScale
              ? "as follows:"
              : "as per the rules."}
            {post.payScale.length > 1 ? (
              <ul>
                {Object.values(post.payScale).map((item) => {
                  return <li>{item}</li>;
                })}
              </ul>
            ) : null}
          </p>

          <p>
            <strong>Expert – Fresher:</strong>&nbsp;Expert, Freshers also apply.
          </p>

          <p>
            <strong>Part-Time – Full Time:</strong>&nbsp;Full Time.
          </p>

          <p>
            <strong>Temporary – Permanent:</strong>&nbsp;Permanent.
          </p>

          <p>
            <strong>Location:</strong>&nbsp;{post.postLocation}.
          </p>

          <p>
            <strong>Application Fee:</strong>&nbsp;{post.applicationFees}.
          </p>

          <h3>Minimum Requirement {post.organisationName}:</h3>

          <p>
            <strong>Education:</strong>&nbsp; All Interested Candidates should
            have completed the {post.education} or its equivalent qualification
            from a recognized Board / University.
          </p>

          <p>
            <strong>Experience:</strong>&nbsp;{post.experience}.
          </p>

          <p>
            <strong>Skills and Knowledge:</strong>&nbsp;{post.skills}.
          </p>

          <p>
            <strong>Position Posting Date:</strong>&nbsp;{post.startDate}.
          </p>

          <p>
            <strong>Position Closing Date:</strong>&nbsp;{post.lastDate}.
          </p>

          <p>
            <strong>Age Limit:</strong>&nbsp;Applicant's age limit must be
            {post.minAgeLimit
              ? " a minimum of " + post.minAgeLimit + " years"
              : ""}
            {post.minAgeLimit && post.maxAgeLimit
              ? " and "
              : !post.minAgeLimit && !post.maxAgeLimit
              ? " as per the rules"
              : ""}
            {post.maxAgeLimit
              ? " a maximum of " + post.maxAgeLimit + " years"
              : ""}
            {post.ageRefDate ? " as on " + post.ageRefDate : ""}. For Age
            relaxation, Check the official notification publish on their
            official website.
          </p>

          <p>
            <strong>Selection Process:</strong>&nbsp;Selection will be based on{" "}
            {post.selectionProcess}.
          </p>

          <p>
            <strong>How To Apply:</strong>
          </p>

          <p>
            Candidates who fulfill the required eligibility may apply online at{" "}
            {post.organisationName}’s website {post.officialAddress} from{" "}
            {post.shortStartDate} to {post.shortLastDate}.
          </p>

          <p>
            Official Notification:&nbsp;
            <a
              rel="noreferrer noopener"
              href={post.officialNotification}
              target="_blank"
              data-mce-href={post.officialNotification}
            >
              Click Here to Download
            </a>
          </p>

          <p>
            Application Form:&nbsp;
            <a
              rel="noreferrer noopener"
              href={post.applicationForm}
              target="_blank"
              data-mce-href={post.applicationForm}
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
