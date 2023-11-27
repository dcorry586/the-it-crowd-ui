import { describe, it, before, after } from 'mocha';
import JobService from '../../../services/JobService';
import axiosInstance from '../../../config';
import { Job } from '../../../models/Job';
import { JobCapabilities } from '../../../models/JobCapabilities';
import {JobRole} from '../../../models/JobRole';
let MockAdapter = require('axios-mock-adapter');
let chai = require('chai');
const expect = chai.expect;

let jobService = new JobService();
let mock: typeof MockAdapter;

const job = [
    {
        jobId: 1,
        jobName: 'Software Engineer',
        jobCapabilityId: 1
    }
];

describe('JobService', function () {

    before(function() {
        mock = new MockAdapter(axiosInstance);
    });

    after(function() {
        mock = undefined;
    });

    it('Get all jobs should return an array of jobs from the API with response 200', async () => {
        mock.onGet('/api/jobs').reply(200, job);

        let result: Job[] = await jobService.getJobs();

        expect(result).to.be.an('array');
        expect(result[0]).to.deep.equal(job[0]);
    });

    it('getJobs method should throw an error when API displays a 404 status', async () => {
        mock.onGet('/api/jobs').reply(404, new Error('Could not get jobs'));
        let error: string;
        try {
            await jobService.getJobs();
        } catch (e) {
            error = e;
        }
        expect(String(error)).to.equal('Error: Could not get jobs');
    });

    it('getJobCapabilities should return an array of job capabilities array when API returns a Response 200', async () => {
        mock.onGet('/api/job-capabilities').reply(200, job);

        let result: JobCapabilities[] = await jobService.getJobCapabilities();

        expect(result).to.be.an('array');
        expect(result[0]).to.deep.equal(job[0]);
    });

    it('getJobCapabilities method should throw an error when API displays a 404 status', async () => {
        mock.onGet('/api/job-capabilities').reply(404, new Error('Could not get job capabilities'));
        let error: string;
        try {
            await jobService.getJobCapabilities();
        } catch (e) {
            error = e;
        }
        expect(error).to.deep.equal(new Error('Could not get job capabilities'));
    });

    it('Get job by id should return a job from the API', async () => {
        const id: number = 1;
        mock.onGet(`/api/jobs/${id}`).reply(200, job);

        let result: JobRole = await jobService.getJobById(id);

        expect(result).to.deep.equal(job);
    });

    it('should throw an error when the API returns a 404 status', async () => {
        const id: number = 111;
        mock.onGet(`/api/jobs/${id}`).reply(404,new Error('Could not get jobs'));
        let error: string;
        try {
            await jobService.getJobById(id);
        } catch (e) {
            error = e;
        }
        expect(String(error)).to.equal('Error: Could not get job');
    });
});
