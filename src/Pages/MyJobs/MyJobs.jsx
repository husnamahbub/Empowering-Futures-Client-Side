import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const MyJobs = () => {
    const {user} = useContext(AuthContext)
    const [edata, setEData] = useState([])

    const url = `https://empowering-futures-server-side.vercel.app/myJob?email=${user?.email}`;
    useEffect(() => {

        fetch(url)
        .then(res => res.json())
        .then(data => setEData(data))
   
    }, [url]);
    return (
        <div>
     
         <div><div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>job title & category & image</th>
        <th>salary range && post date</th>
        <th>application deadline && applicants Number</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
                edata.map(c =>  <tr  key={c._id}>
                    <th>
                      <label>
                        <input type="checkbox" className="checkbox" />
                      </label>
                    </th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img src={c.picture_url} alt="Avatar Tailwind CSS Component" />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{c.job_title}</div>
                          <div className="text-sm opacity-50">{c.job_category}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                     {c. salary_range}
                     {c.job_posting_date}
                      <br/>
                      <span className="badge badge-ghost badge-sm"></span>
                    </td>
                    {c.application_deadline}
                    <td>{c.applicantsNumber}</td>
                    <th>
                      <button className="btn btn-ghost btn-xs">details</button>
                    </th>
                  </tr>
)}
     
   
    </tbody>

    
  </table>
</div></div> )
            
        </div>
    );
};

export default MyJobs;