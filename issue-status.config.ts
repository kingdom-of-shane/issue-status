import { defineConfig } from "issue-status";
import { github } from "issue-status/providers";

export default defineConfig({
  name: "Do Some Good Status",
  description: "Platform status for Do Some Good",
  provider: github({
    owner: "kingdom-of-shane",
    repo: "issue-status",
  }),
});
