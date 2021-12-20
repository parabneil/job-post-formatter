import React from "react";
import CreatePost from "./CreatePost";
import RojgarLive from "./RojgarLive";
import SarkariNaukriUpdate from "./SarkariNaukriUpdate";
import AllSarkariNaukri from "./AllSarkariNaukri";
import SarkariResultLive from "./SarkariResultLive";

const Posts = ({ selectedTab, post, setPost }) => {
  return (
    <div className="posts">
      {selectedTab === "JOB_INPUT" ? (
        <CreatePost post={post} setPost={setPost} />
      ) : selectedTab === "ROJGAR_LIVE" ? (
        <RojgarLive post={post} />
      ) : selectedTab === "SARKARI_NAUKRI_UPDATE" ? (
        <SarkariNaukriUpdate post={post} />
      ) : selectedTab === "ALL_SARKARI_NAUKRI" ? (
        <AllSarkariNaukri post={post} />
      ) : selectedTab === "SARKARI_RESULTS" ? (
        <SarkariResultLive post={post} />
      ) : null}
    </div>
  );
};

export default Posts;
