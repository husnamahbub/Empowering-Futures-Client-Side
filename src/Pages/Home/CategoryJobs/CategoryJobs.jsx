import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const CategoryJobs = () => {
    const [category, setCategory] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/category")
        .then(res => res.json())
        .then(data => setCategory(data))
    }, [])
    return (
        <div>
             <Tabs>
    <TabList>
      <div className='lg:flex md:flex'>
      {
        category.map(category => <Tab key={category._id} className="py-2 px-4  bg-fuchsia-700 text-white">{category.category}</Tab>)
      }
    
      </div>
    </TabList>

    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default CategoryJobs;