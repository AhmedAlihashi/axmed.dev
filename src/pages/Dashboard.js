import React, { useContext, useEffect } from "react";
import AppContext from "../core/context/appContext";

const Dashboard = () => {
  const {
    dashboardEntries,
    loadDashboardEntries,
    removeDashboardItem,
  } = useContext(AppContext);

  useEffect(() => {
    loadDashboardEntries();
  }, [loadDashboardEntries]);

  return (
    <div className="dashboardCont">
      {dashboardEntries &&
        dashboardEntries.map((i, k) => (
          <div className="dashboardItem" key={k}>
            <div>
              <h2 id="name">{i.name}</h2>
              <p id="contact">{i.contact}</p>
              <p id="message">{i.message}</p>
              <p id="date">{i.date}</p>
            </div>

            <button
              onClick={() => removeDashboardItem(i.id)}
              className="deleteButton"
            >
              Delete
            </button>
          </div>
        ))}
    </div>
  );
};

export default Dashboard;
