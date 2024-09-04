import { Button } from "@/components/ui/button";
import { auth, signOut } from "@/lib/auth";
import React from "react";

const User = async () => {
  const session = await auth();
  return (
    <div>
      <p>{JSON.stringify(session)}</p>
      <form
        action={async () => {
          "use server";
          await signOut({ redirectTo: "/" });
        }}
      >
        <Button type="submit">logout</Button>
      </form>
    </div>
  );
};

export default User;
