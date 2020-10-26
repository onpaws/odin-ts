import React, { useState, useTransition } from "react";
import { fetchProfileData } from "./fakeApi";

const initialResource = fetchProfileData(0);

function getNextId(id) {
  return id === 3 ? 0 : id + 1;
}

export const TransitionDemo = () => {
  const [resource, setResource] = useState(initialResource);
  const [startTransition, isPending] = useTransition({
    timeoutMs: 3000
  });

  return (
    <div>
      <button
        onClick={() => {
          startTransition(() => {
            const nextUserId = getNextId(resource.userId);
            setResource(fetchProfileData(nextUserId));
          })
        }}
        Next
      ></button>
      {isPending ? " Loading..." : null}
    </div>
  )
}