import React from "react";

const Sidebar = ({ selectedTab, setselectedTab }) => {
  return (
    <div className="sidebar">
      <div
        onClick={() => setselectedTab("ROJGAR_LIVE")}
        className={selectedTab === "ROJGAR_LIVE" ? "active" : ""}
      >
        ROJGAR LIVE
      </div>
      <div
        onClick={() => setselectedTab("SARKARI_NAUKRI_UPDATE")}
        className={selectedTab === "SARKARI_NAUKRI_UPDATE" ? "active" : ""}
      >
        SARKARI NAUKRI UPDATE
      </div>
      <div
        onClick={() => setselectedTab("ALL_SARKARI_NAUKRI")}
        className={selectedTab === "ALL_SARKARI_NAUKRI" ? "active" : ""}
      >
        ALL SARKARI NAUKRI
      </div>
      <div
        onClick={() => setselectedTab("SARKARI_RESULTS")}
        className={selectedTab === "SARKARI_RESULTS" ? "active" : ""}
      >
        SARKARI RESULTS
      </div>
    </div>
  );
};

export default Sidebar;
