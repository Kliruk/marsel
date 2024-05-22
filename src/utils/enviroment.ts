export const getEnvUrl = () => {
  if (process.env.NODE_ENV === "development") {
    return "http://localhost:3000";
  } else if (process.env.NODE_ENV === "production") {
    return process.env.NEXT_PUBLIC_DOMAIN;
  }
};
