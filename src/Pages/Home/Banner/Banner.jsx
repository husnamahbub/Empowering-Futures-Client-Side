
const Banner = () => {
    return (
    
        <div>
            <div className="hero min-h-[600px]" style={{backgroundImage: 'url(https://sierra.careerical.com/wp-content/uploads/2023/02/Top-10-Job-Websites-in-Sierra-Leone.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="lg:max-w-2xl max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Introducing a Seamless Platform for Posting and Finding Opportunities</h1>
      <p className="mb-5">Develop a user-friendly job listing website where users can effortlessly post and search for jobs, streamlining the recruitment process for both employers and job seekers. Our aim is to create an intuitive platform that connects opportunities with talent seamlessly.</p>
      <input type="text" placeholder="Search..." className="input input-bordered w-full max-w-xs" />
      <button className="btn bg-fuchsia-600 text-white">Search </button>
    </div>
  </div>
</div>
        </div>
    );
};   

export default Banner;