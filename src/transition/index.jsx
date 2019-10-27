import React, { useState, useTransition, Suspense } from "react";

const initialResource = {};

export const TransitionDemo = () => {
  const [resource, setResource] = useState(initialResource);
  const [startTransition, isPending] = useTransition({
    timeoutMs: 3000
  });

  return (
    <div>
      <button
        onClick={() => {
          const nextUserId = getNextId(resource.userId);
          setResource(fetchProfileData(nextUserId));
        }}
        Next
      ></button>
      {isPending ? " Loading..." : null}
    </div>
  )
}