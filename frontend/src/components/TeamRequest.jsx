import React from "react";
import { Button, Card, CardContent, Avatar } from "@mui/material";

export default function TeamRequest({ requests, onAllow, onDecline, onViewProfile }) {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Team Join Requests</h2>
      {requests?.length === 0 ? (
        <p className="text-gray-500">No pending requests</p>
      ) : (
        requests?.map((user) => (
          <Card key={user.id} className="mb-4 shadow-md">
            <CardContent className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Avatar src={user.image} alt={user.username} className="w-12 h-12" />
                <span className="text-lg font-medium">{user.username}</span>
              </div>
              <div className="space-x-2">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => onAllow(user.id)}
                >
                  Allow
                </Button>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => onDecline(user.id)}
                >
                  Decline
                </Button>
                <Button
                  variant="text"
                  color="info"
                  onClick={() => onViewProfile(user.id)}
                >
                  View Profile
                </Button>
              </div>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  );
};
