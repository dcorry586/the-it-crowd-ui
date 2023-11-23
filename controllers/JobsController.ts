import {Request, Response, Application} from 'express';
import {Job} from '../models/Job';
import JobService from '../services/JobService';

let jobService = new JobService();

module.exports = function(app: Application) {
    app.get('/jobs', async (req:Request,res:Response)=>{
        let jobs: Job[] = [];
        try {
            jobs = await jobService.getJobs();

        } catch (e) {
            console.error(e);
        }
        const { token } = req.session;
        res.render('pages/jobTitles',{jobs, pageTitle: 'Job Roles', token});
    });
};
