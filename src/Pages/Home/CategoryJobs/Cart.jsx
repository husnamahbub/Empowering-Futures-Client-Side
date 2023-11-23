import { Link } from "react-router-dom";


const Cart = ({card}) => {
    const {_id, picture_url, job_title, job_category, user_name, salary_range, 
        job_description, job_posting_date, application_deadline, applicantsNumber } = card;
    return (
        <div>
            <div className="card w-72 border-2 border-fuchsia-700 my-10 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">{job_title}</h2>
    <p>{user_name}</p>
    <p>{job_posting_date}</p>
    <p>{application_deadline}</p>
    <p>{salary_range}</p>
    <p>{applicantsNumber}</p>
    <div className="card-actions justify-end">
      <Link to={`/detailsJob/${_id}`} className="btn bg-fuchsia-700 text-white">View Details</Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Cart;