import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "./sanity-api";
import { token } from "./token";

export const client = createClient({
  projectId: projectId,
  dataset: dataset,
  apiVersion: apiVersion,
  useCdn: true,
  token: token,
  stega: { 
    studioUrl: "/studio" 
  },
});