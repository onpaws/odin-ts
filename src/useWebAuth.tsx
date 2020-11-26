import React, { useEffect } from 'react';
// https://developer.apple.com/documentation/localauthentication/logging_a_user_into_your_app_with_face_id_or_touch_id
// https://webkit.org/blog/11312/meet-face-id-and-touch-id-for-the-web/
// https://news.ycombinator.com/item?id=24829565

export const useWebauth = () => {
  useEffect(() => {
    const checkAuth = async () => {
      const isWebAuthAvail = await PublicKeyCredential?.isUserVerifyingPlatformAuthenticatorAvailable();
      if (isWebAuthAvail) {
        // 
        navigator.credentials.create()
      }
    }
    checkAuth();
  }, []);
}

/*
const options = {
  publicKey: {
    rp: { name: 'k8s.effortlessly.sexy' },
    user: {
      name: "john@blah.com",
      id: userIdBuffer,
      displayName: "Johnny Blahblah"
    },
    pubKeyCredParams: [ { type: "public-key", alg: -7 }],
    challenge: challengeBuffer,
    authenticatorSelection: { authenticatorAttachment: "platform" },
    attestation: "direct"
  }
};

const publicKeyCredential = await navigator.credentials.create(options); // must be called by user-activated event



// BACKEND
PublicKeyCredential {
  id: "asdf",
  rawId: ArrayBuffer,
  response: AuthenticatorAttestationResponse {
    clientDataJSON: ArrayBuffer,
    attestationObject: ArrayBuffer
  }
}
*/