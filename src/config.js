const prod = {
    MAX_ATTACHMENT_SIZE: 5000000,
    STRIPE_KEY: "pk_test_51IHz9KDO2dStaKVFqSP8QJXFOhXbIk10sWkLBQ6Tx8OlVDDQQ5OdhJiBmHBttBU4xsn5Dvt15FW0pyRLbtFlasSy00K3OdjEUl",
    s3: {
      REGION: "us-east-1",
      BUCKET: "fig-notes-app-uploads",
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://2p2a7c38vl.execute-api.us-east-1.amazonaws.com/prod",
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_hnB2YP6Qx",
      APP_CLIENT_ID: "3c0oevrbtvvmo29smj3dl3nad3",
      IDENTITY_POOL_ID: "us-east-1:6c38fd26-776b-4c53-9cbf-12feeda0f0be",
    },
  };
  
  const dev = {
    STRIPE_KEY: "pk_test_51IHz9KDO2dStaKVFqSP8QJXFOhXbIk10sWkLBQ6Tx8OlVDDQQ5OdhJiBmHBttBU4xsn5Dvt15FW0pyRLbtFlasSy00K3OdjEUl",
    s3: {
      REGION: "us-east-1",
      BUCKET: "dev-notes-infra-s3-uploads4f6eb0fd-1d2vt7ft9mrfc"
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://a22ix7m1j3.execute-api.us-east-1.amazonaws.com/dev"
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_0Fj3LREvo",
      APP_CLIENT_ID: "4v8dlsqgf9edqrsv0ncjn4auqn",
      IDENTITY_POOL_ID: "us-east-1:3fd94387-8125-41a1-80ca-f1e36c19bb97"
    }
  };
  
  const config = {
    // Add common config values here
    MAX_ATTACHMENT_SIZE: 5000000,
    // Default to dev if not set
    ...(process.env.REACT_APP_STAGE === "prod" ? prod : dev),
  };
  
  export default config;