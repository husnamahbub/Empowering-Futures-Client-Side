import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-toastify";
const AddAJobs = () => {
  const [startDate, setStartDate] = useState(new Date());
    const {user} = useContext(AuthContext)
    const [applicantsNumber, setApplicantsNumber] = useState("0")
    

    const handleAddAJobs  = (event) => {
        event.preventDefault();

        const form = event.target;

        const picture_url = form.picture_url.value;
        const job_title = form.job_title.value;
        const user_name = form.user_name.value;
        const job_category = form.job_category.value;
        const salary_range = form.salary_range.value;
        const job_description = form.job_description.value;
        const application_deadline = form.application_deadline.value;
        const job_posting_date = form.job_posting_date.value;

        const TheDataOfAddedJobs = { picture_url, job_title,  job_category, user_name, salary_range, job_description, job_posting_date , application_deadline, applicantsNumber}

        // send data to the server
        fetch('http://localhost:5000/addJobs', {
          method: 'POST',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(TheDataOfAddedJobs)
      })
          .then(res => res.json())
          .then(data => {
              console.log(data);
              if(data.insertedId){
              toast.success("add the jobs is successfully")
              }
          })
    }



    return (
        <div>
          <div className="hero">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm lg:max-w-5xl shadow-2xl bg-base-100">
      <form className="card-body" onSubmit={handleAddAJobs}>
     <section className="flex">
      {/* left side */}
     <div>
      <div className="form-control lg:px-10">
          <label className="label">
            <span className="label-text">Picture URL</span>
          </label>
          <input type="text" name="picture_url" placeholder="Picture URL" className="input input-bordered lg:w-96 " required />
        </div>
        <div className="form-control lg:px-10">
          <label className="label">
            <span className="label-text">Job Title</span>
          </label>
          <input type="text" name="job_title" placeholder="Job Title" className="input input-bordered lg:w-96 " required />
        </div>
        <div className="form-control lg:px-10">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="user_name" placeholder="" className="input input-bordered lg:w-96 " value={user?.displayName} required />
        </div>
        <div className="form-control lg:px-10">
          <label className="label">
            <span className="label-text">Job Category</span>
          </label>
          <select
                className="input input-bordered"
                name="job_category"
              >
                <option value="On Site Job">On Site Job</option>
                <option value="Remote Job">Remote Job</option>
                <option value="Hybrid">Hybrid</option>
                <option value="Part Time">Part Time</option>
              </select>
          
      
        </div>
      </div>
      {/* right side */}
      <div>
      <div className="form-control lg:px-10">
          <label className="label">
            <span className="label-text">Salary range</span>
          </label>
          <input type="text" name="salary_range" placeholder="Salary range" className="input input-bordered lg:w-96 " required />
        </div>
        <div className="form-control lg:px-10">
          <label className="label">
            <span className="label-text">Job Description</span>
          </label>
          <input type="text" name="job_description" placeholder="Job Description" className="input input-bordered lg:w-96 " required />
        </div>
        <div className="form-control lg:px-10">
          <label className="label">
            <span className="label-text">Job Posting Date</span>
          </label>
          <input type="date" name="job_posting_date" placeholder="Job Posting Date" className="input input-bordered lg:w-96 " required />
        </div>
        <div className="form-control lg:px-10">
          <label className="label">
            <span className="label-text">Application Deadline</span>
          </label>
          <DatePicker
          className="input input-bordered lg:w-96 text-white font-bold"
          name="application_deadline"
      showIcon
      selected={startDate}
      onChange={(date) => setStartDate(date)}
    />
      
        </div>
        <div className="form-control lg:px-10">
          <label className="label">
            <span className="label-text">Job Applicants Number</span>
          </label>
          <h1 className="text-2xl font-bold lg:ml-16">{applicantsNumber}</h1>
      
        </div>
      </div>
     </section>
     <button className="btn w-full bg-fuchsia-700 text-white ">Add The Job</button>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default AddAJobs;