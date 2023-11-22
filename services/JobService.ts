import axiosInstance from '../config';
import { Job } from '../models/Job';
import { JobRole } from '../models/JobRole';

export default class JobService {
    async getJobs(): Promise<Job[]> {
        try {
            const response = await axiosInstance.get('/api/jobs');
            return response.data;
        } catch (e) {
            throw new Error('Could not get jobs');
        }
    }

    async getJobById(id: number): Promise<JobRole> {
        try {
            const response = await axiosInstance.get(`/api/jobs/${id}`);
            return response.data;
        } catch (e) {
            throw new Error('Could not get job');
        }
    }
}