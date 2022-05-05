import AWS from "aws-sdk";
import { useState } from "react";

function FrontPage({ signOut, user }) {
  const connect = new AWS.Connect();
  const [role, setRole] = useState("...");

  // example of how to obtain the security profile of a user
  connect.describeUser({
    InstanceId: process.env.REACT_APP_INSTANCE_ID,
    UserId: user.attributes["custom:connect_id"]
  }, function (err, data) {
    if (err) {
      console.log(err)
    } else {
      const securityProfile = data.User.SecurityProfileIds[0];
      switch (securityProfile) {
        case process.env.REACT_APP_AGENT_ID:
          setRole("agent");
          break;
        case process.env.REACT_APP_SUPERVISOR_ID:
          setRole("supervisor");
          break;
        case process.env.REACT_APP_ADMIN_ID:
          setRole("admin");
          break;
      }
    }
  })

  return (
    <div>
      <h1>Hello {user.username}</h1>
      <h2>Role: {role}</h2>
      <button onClick={signOut}>Sign Out</button>
    </div>
  )
}

export default FrontPage;