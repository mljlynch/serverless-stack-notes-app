const config = {
    s3: {
      REGION: "us-east-1",
      BUCKET: "fig-notes-app-uploads",
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://2p2a7c38vl.execute-api.us-east-1.amazonaws.com/prod/",
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_hnB2YP6Qx",
      APP_CLIENT_ID: "3c0oevrbtvvmo29smj3dl3nad3",
      IDENTITY_POOL_ID: "us-east-1:6c38fd26-776b-4c53-9cbf-12feeda0f0b",
    },
  };
  
  export default config;