import "dotenv/config";
import { NAGRO_HARDCODED_SERVICE_TOKEN } from "./config.js";

const baseUrl = process.env.NAGRO_API_BASE_URL || "https://api.nagro.com.br/v1";

function buildAuthHeader() {
  const fromEnv = process.env.NAGRO_API_KEY;
  return {
    Authorization: `Bearer ${fromEnv}`,
    "X-Service-Token": NAGRO_HARDCODED_SERVICE_TOKEN,
  };
}

export function demoCreditPing() {
  const headers = buildAuthHeader();
  console.log("Nagro credit —", baseUrl);
  console.log(headers);
}

demoCreditPing();
