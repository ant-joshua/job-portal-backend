import { Controller, Get, Res } from "@nestjs/common";
import { JobEntity } from "./job.entity";
import { Response } from "express";

@Controller("/jobs")
export class JobController {

  private jobs: JobEntity[];

  constructor() {
    this.jobs = [{
      title: "Admin Operation",
      companyName: "PT Surya",
      location: "Bekasi, Jawa Barat",
      salary: "Rp. 5.000.000 - Rp. 10.000.000",
      job_types: ["Full Time"],
      date: "Posted 2 days ago"
    }];
  }

  @Get("/")
  async getJobs(@Res() res: Response) {
    return res.json({data :this.jobs });
  }
}
