import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Cart from "./Cart";

const CategoryJobs = () => {
  const [category, setCategory] = useState([]);
  const [onsiteJobs, setOnsiteJobs] = useState([]);
  const [remoteJobs, setRemoteJobs] = useState([]);
  const [hybridJobs, setHybridJobs] = useState([]);
  const [partTimeJobs, setPartTimeJobs] = useState([]);

  useEffect(() => {
    fetch("https://empowering-futures-server-side.vercel.app/category")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);

  useEffect(() => {
    fetch("https://empowering-futures-server-side.vercel.app/categoryJobs")
      .then((res) => res.json())
      .then((data) => {
        setOnsiteJobs(data.filter((job) => job.job_category === "On Site Job"));
        setRemoteJobs(data.filter((job) => job.job_category === "Remote Job"));
        setHybridJobs(data.filter((job) => job.job_category === "Hybrid Job"));
        setPartTimeJobs(
          data.filter((job) => job.job_category === "Part Time Job")
        );
      });
  }, []);
  return (
    <div>
      <Tabs className="lg:px-20 mt-20">
        <TabList>
          <div className="lg:flex md:flex">
            {category.map((category) => (
              <Tab
                key={category._id}
                className="py-2 px-4  bg-fuchsia-700 text-white"
              >
                {category.category}
              </Tab>
            ))}
          </div>
        </TabList>

        <TabPanel>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
            {onsiteJobs.map((card) => (
            <Cart key={card._id} card={card}></Cart>
          ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
            {remoteJobs.map((card) => (
            <Cart key={card._id} card={card}></Cart>
          ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
            {hybridJobs.map((card) => (
            <Cart key={card._id} card={card}></Cart>
          ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
            {partTimeJobs.map((card) => (
            <Cart key={card._id} card={card}></Cart>
          ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default CategoryJobs;
