let MockAdapter = require('axios-mock-adapter');
let chai = require('chai');
const expect = chai.expect;
import { describe, it } from 'mocha';
import JobService from '../../services/JobService';
import axiosInstance from '../../config';
import { Job } from '../../models/Job';
let mock = new MockAdapter(axiosInstance);

let jobService = new JobService();

const job = [
    {
        jobId: 1,
        jobName: 'Software Engineer'
    }
];

describe('JobService', function () {
    it('Get all jobs should return an array of jobs from the API', async () => {
        mock.onGet('/api/jobs').reply(200, job);

        let result:Job[] = await jobService.getJobs();

        expect(result).to.be.an('array');
        expect(result[0]).to.deep.equal(job[0]);
    });

    it('should throw an error when the API returns a non-200 status', async () => {
        mock.onGet('/api/jobs').reply(new Error('Could not get jobs'));
        let error:string;
        try {
            await jobService.getJobs();
        } catch (e) {
            error = e;
        }
        expect(String(error)).to.equal('Error: Could not get jobs');
    });

    it('should delete a job role when the delete button is triggered', async () => {
        mock.onDelete(`/api/jobs/${job[0].jobId}`).reply(204);
        await jobService.deleteJobRole(job[0].jobId);
        expect(mock.history.delete).to.have.lengthOf.at.least(1);
    });

    it('should return an Error message if delete is unsuccessful', async () => {
        mock.onDelete(`/api/jobs/${job[0].jobId}`).reply(new Error('Unable to delete specified job ID'));
        let error: string;
        try {
            await jobService.deleteJobRole(job[0].jobId);
        } catch (e) {
            error = e;
        }
        expect(String(error)).to.equal('Error: Unable to delete specified job ID');
    });
});

