import React, { useState } from "react";
import TeamRequests from "./TeamRequests";

export default function ReqeustNotification() {
  const [requests, setRequests] = useState([
    { id: 1, username: "John Doe", image: "https://i.pravatar.cc/100?u=1" },
    { id: 2, username: "Jane Smith", image: "https://i.pravatar.cc/100?u=2" },
  ]);

  const handleAllow = (id) => {
    alert(`Allowed user with ID: ${id}`);
    setRequests(requests.filter((req) => req.id !== id));
  };

  const handleDecline = (id) => {
    alert(`Declined user with ID: ${id}`);
    setRequests(requests.filter((req) => req.id !== id));
  };

  const handleViewProfile = (id) => {
    alert(`Viewing profile of user with ID: ${id}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <TeamRequests
        requests={requests}
        onAllow={handleAllow}
        onDecline={handleDecline}
        onViewProfile={handleViewProfile}
      />
    </div>
  );
};