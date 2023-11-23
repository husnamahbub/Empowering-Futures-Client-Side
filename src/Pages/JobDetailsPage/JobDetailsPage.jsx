import { useLoaderData } from "react-router-dom";

const JobDetailsPage = () => {
    const card = useLoaderData()
 const {_id, picture_url, job_title, job_category, user_name, salary_range, 
        job_description, job_posting_date, application_deadline, applicantsNumber } = card;
    return (
        <div>
            <div className="card w-72 border-2 border-fuchsia-700 my-10 bg-base-100 shadow-xl text-white">
                <img src={picture_url} alt="" />
  <div className="card-body">
    <h2 className="card-title">{job_title}</h2>
    <p>{user_name}</p>
    <p>{job_posting_date}</p>
    <p>{application_deadline}</p>
    <p>{salary_range}</p>
    <p>{job_category}</p>
    <p>{job_description}</p>
    <p>{applicantsNumber}</p>
    <div className="card-actions justify-end">
      <button className="btn bg-fuchsia-700 text-white">apply</button>
    </div>
  </div>
</div>
        </div>
    );
    }
export default JobDetailsPage;