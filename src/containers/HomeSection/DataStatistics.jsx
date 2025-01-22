import React, { useState, useEffect } from 'react';
import { FaUsers } from "react-icons/fa6";
import { FaServicestack } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";

const Statistics = () => {
  // const [projectsDone, setProjectsDone] = useState(0);
  const [employees, setEmployees] = useState(0);
  const [services, setServices] = useState(0);
  const [happyClients, setHappyClients] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setProjectsDone((prevCount) => {
  //       if (prevCount < 68) {
  //         return prevCount + 1;
  //       } else {
  //         clearInterval(interval);
  //         return prevCount;
  //       }
  //     });
  //   }, 50);

  //   return () => clearInterval(interval);
  // }, []);

  useEffect(() => {
    const interval = setInterval(() => {
        setEmployees((prevCount) => {
        if (prevCount < 500) {
          return prevCount + 1;
        } else {
          clearInterval(interval);
          return prevCount;
        }
      });
    }, 120);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
        setServices((prevCount) => {
        if (prevCount < 10) {
          return prevCount + 1;
        } else {
          clearInterval(interval);
          return prevCount;
        }
      });
    }, 120);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
        setHappyClients((prevCount) => {
        if (prevCount < 18) {
          return prevCount + 1;
        } else {
          clearInterval(interval);
          return prevCount;
        }
      });
    }, 120);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mx-4 sm:mx-6 md:mx-48 delay-1000 ">
  <div className="py-6 md:py-8 px-8 max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-center">
    {/* <div className="text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-blue-500">{projectsDone}+</h2>
      <p className="mt-2 text-md font-semibold text-gray-700">
        <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
        PROJECTS DONE
      </p>
    </div> */}

    <div className="text-center">
    <FaUsers size={60} className='text-green-500 justify-self-center'/>
      <h2 className="text-5xl md:text-8xl text-blue-500">~{employees}+</h2>
      <p className="mt-2 text-md font-semibold text-gray-700">
        <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
        EMPLOYEES
      </p>
    </div>

    <div className="text-center">
    <FaServicestack size={60} className='text-green-500 justify-self-center'/>
      <h2 className="text-5xl md:text-8xl text-blue-500">{services}+</h2>
      <p className="mt-2 text-md font-semibold text-gray-700">
        <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
        SERVICES
      </p>
    </div>

    <div className="text-center">
    <FaHandshake size={60} className='text-green-500 justify-self-center'/>
      <h2 className="text-5xl md:text-8xl text-blue-500">{happyClients}+</h2>
      <p className="mt-2 text-md font-semibold text-gray-700">
        <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
        HAPPY CLIENTS
      </p>
    </div>
  </div>
</div>

  );
};

export default Statistics;
