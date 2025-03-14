import React, { useState } from "react";
import TeamRequests from '../components/TeamRequest'

export default function ReqeustNotification() {
  
  const [requests, setRequests] = useState([
    { id: 1, username: "John Doe", image: "https://i.pravatar.cc/100?u=1" },
    { id: 2, username: "Jane Smith", image: "https://i.pravatar.cc/100?u=2" },
  ]);

  return (
    <div className="min-h-screen flex justify-center bg-gray-100">
      <TeamRequests
        requests={requests}
        setRequests={setRequests}
        groupId={'xyz123'}
      />
    </div>
  );
};