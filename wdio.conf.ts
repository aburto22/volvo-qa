import type { Options, Services } from "@wdio/types";
import { TimelineService } from "wdio-timeline-reporter/timeline-service";
import { config as baseConfig } from "./basewdio.conf";

export const config: Options.Testrunner = {
  ...baseConfig,
  services: [
    ...baseConfig.services,
    [TimelineService] as Services.ServiceEntry,
  ],
  reporters: [
    ...baseConfig.reporters,
    [
      "timeline",
      {
        outputDir: "./test/reports",
        screenshotStrategy: "on:error",
      },
    ],
  ],
};
