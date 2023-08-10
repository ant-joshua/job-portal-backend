import { Controller, Get, Param, Res } from '@nestjs/common';
import { JobEntity } from './job.entity';
import { Response } from 'express';

@Controller('/jobs')
export class JobController {
  private jobs: JobEntity[];

  constructor() {
    this.jobs = [
      {
        id: '1',
        title: 'Admin Operation',
        companyName: 'PT Surya',
        location: 'Bekasi, Jawa Barat',
        salary: 'Rp. 5.000.000 - Rp. 10.000.000',
        job_types: ['Full Time'],
        date: 'Posted 2 days ago',
        description: null,
      },
      {
        id: '2',
        title: 'Software Engineer',
        companyName: 'PT Lifepack',
        location: 'Kuningan, Jakarta Selatan',
        salary: 'Rp. 5.000.000 - Rp. 10.000.000',
        job_types: ['Full Time'],
        date: 'Posted 2 days ago',
        description: `
  <p>As a Software Engineer, you will be responsible for building scalable and robust solutions using well-defined software development methodologies with a focus on high availability, low latency and scalability. You will be working on a team of highly skilled engineers and developers to build software that will be used by millions of users.</p>
  <p>Responsibilities:</p>
  <ul>
  <li>Design, develop, test, deploy, maintain and improve software</li>
  <li>Manage individual project priorities, deadlines and deliverables</li>
  <li>Collaborate with other engineers and product managers to solve challenging problems</li>
  <li>Conduct design and code reviews</li>
  <li>Identify and communicate best practices for software engineering</li>
  </ul>
  <p>Requirements:</p>
  <ul>
  <li>BS degree in Computer Science, similar technical field of study or equivalent practical experience</li>
  <li>Experience in software development using one or more general purpose programming languages including but not limited to: Java, C/C++, C#, Objective C, Python, JavaScript, or Go</li>
  <li>Experience working with two or more from the following: web application development, Unix/Linux environments, mobile application development, distributed and parallel systems, machine learning, information retrieval, natural language processing, networking, developing large software systems, and/or security software development</li>
  <li>Working proficiency and communication skills in verbal and written English</li>
        `,
      },
    ];
  }

  @Get('/')
  async getJobs(@Res() res: Response) {
    return res.json({ data: this.jobs });
  }

  @Get('/:id')
  async getJob(@Res() res: Response, @Param('id') id: string) {
    const result = this.jobs.find((job) => job.id === id);

    return res.json({ data: result, statusCode: 200, message: 'success' });
  }
}
