import React, { useContext } from "react";
import AppContext from "../core/context/appContext";

const Dashboard = () => {
  const { dashboardEntries, removeDashboardItem } = useContext(AppContext);

  return (
    <div className="dashboardCont">
      {dashboardEntries &&
        dashboardEntries.map((i, k) => (
          <div className="dashboardItem" key={k}>
            <div>
              <h2>{i.name}</h2>
              <p>{i.contact}</p>
              <p>{i.message}</p>
              <p>{i.date}</p>
            </div>

            <button
              onClick={(e) => removeDashboardItem(i.id)}
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
