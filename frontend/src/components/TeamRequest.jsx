import React from "react";
import { Button, Card, CardContent, Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";
import { enqueueSnackbar } from "notistack";

export default function TeamRequest({ requests, setRequests, groupId }) {

  const handleAllowRequest = async (userId) => {
    try {
      const response = await axios.post(`/api/groups/${groupId}/add-member`, { userId });

      if (response.data.success) {
        enqueueSnackbar("User added successfully!", { variant: "success" });

        setRequests((prevRequests) => prevRequests.filter(req => req.id !== userId));
      } else {
        enqueueSnackbar("Failed to add user", { variant: "error" });
      }
    } catch (error) {
      enqueueSnackbar(error.response?.data?.message || "Something went wrong", { variant: "error" });
    }
  };

  const handleDeclineRequest = (userId) => {
    setRequests((prevRequests) => prevRequests.filter(req => req.id !== userId));
    enqueueSnackbar("User request declined", { variant: "info" });
  };

  return (
    <div className="mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4 text-gray-400">Team Join Requests</h2>
      {requests?.length === 0 ? (
        <p className="text-gray-500">No pending requests</p>
      ) : (
        requests?.map((user) => (
          <Card key={user.id} className="mb-4 shadow-md w-120">
            <CardContent className="flex items-center justify-between space-x-2">
              <div className="flex items-center space-x-4">
                <Avatar src={user.image} alt={user.username} sx={{ width: '4rem', height: '4rem', borderRadius: '0.5rem' }} />

                <div>
                  <p className="text-lg font-medium">{user.username}</p>
                  <Link to={`/user/profile/${user.id}`} className="text-blue-500 hover:text-blue-600">
                    View Profile
                  </Link>
                </div>
              </div>
              <div className="space-x-2 flex">
                <div>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleAllowRequest(user.id)}
                  >
                    Allow
                  </Button>

                </div>
                <div>
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => handleDeclineRequest(user.id)}
                  >
                    Decline
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  );
};
