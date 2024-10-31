import { hc } from "hono/client";
// import { type ApiRoutes } from "@server/index.ts";
import { type ApiRoutes } from "../../../server/index.ts";

const client = hc<ApiRoutes>("/");

export const api = client.api;
