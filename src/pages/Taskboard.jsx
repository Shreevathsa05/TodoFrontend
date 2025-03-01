import React, { useState, useEffect } from 'react';

function Taskboard() {
  const [yesterday, setYesterday] = useState(null);
  const [tasks, setTasks] = useState([]);

  // Compute yesterday's date in YYYY-MM-DD format
  useEffect(() => {
    const date = new Date();
    date.setDate(date.getDate() - 1); // Subtract one day
    const formattedDate = date.toISOString().split("T")[0]; // e.g., "2025-02-26"
    setYesterday(formattedDate);
  }, []);

  // Fetch tasks once yesterday is set
  useEffect(() => {
    if (!yesterday) return;
    const url = "http://localhost:8080/task";

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json(); // Parse the JSON data
      })
      .then((data) => {
        console.log("Fetched Data:", data);
        setTasks(data);
        // Note: Logging 'tasks' immediately here won't show the updated state
      })
      .catch((error) => console.error("Error fetching tasks:", error));
  }, [yesterday]);

  return (
    <>
      {/* Header */}
      <div className="header w-full h-[15vh] rounded-xl mx-2 mt-4 p-4 bg-[#ECEDEE]">
        <h2 className="text-xl font-bold">Tasks after {yesterday}</h2>
      </div>

      {/* Main content */}
      <div className="grid grid-cols-2 lg:grid-cols-8 gap-x-2 text-center gap-y-3 h-[80vh] mx-auto p-4">
        {/* Left stats controller */}
        <div className='rounded-xl sm:col-span-2 bg-[#FFFFFF]'>
          <div className="rounded-xl p-4 m-2 h-[25vh] bg-[#ECEDEE] block">
            <div className="h-[8vh] text-2xl m-2 rounded-full w-[8vh] bg-red-600 flex items-center justify-center">
              <img src="/ExpiredTask.png" className='items-center' alt="Expired Task" />
            </div>
            <div className="text-2xl font-bold text-black">Expired Tasks</div>
          </div>

          <div className="rounded-xl p-4 m-2 h-[25vh] bg-[#ECEDEE] block">
            <div className="h-[8vh] text-2xl m-2 rounded-full w-[8vh] bg-red-300 flex items-center justify-center">
              <img src="/ActiveTask.png" className='items-center' alt="Active Task" />
            </div>
            <div className="text-2xl font-bold text-black">All Active Task</div>
          </div>

          <div className="rounded-xl p-4 m-2 h-[25vh] bg-[#ECEDEE] block">
            <div className="h-[8vh] text-2xl m-2 rounded-full w-[8vh] bg-blue-200 flex items-center justify-center">
              <img src="/CompletedTask.png" className='items-center' alt="Completed Task" />
            </div>
            <div className="text-2xl font-bold text-black">Completed Task</div>
          </div>
        </div>

        {/* Right task controller */}
        <div className='rounded-xl h-full sm:col-span-6 bg-[#FFFF] grid grid-cols-1 gap-y-2 lg:grid-cols-3'>
          <div className="rounded-xl bg-[#ECEDEE] mx-2 p-4">
            <h1 className="text-3xl font-bold text-black mb-4"> • To do</h1>
            <hr className="bg-blue-300 h-2" />
          </div>
          <div className="rounded-xl bg-[#ECEDEE] mx-2 p-4">
            <h1 className="text-3xl font-bold text-black mb-4"> • On Progress</h1>
            <hr className="bg-blue-300 h-2" />
          </div>
          <div className="rounded-xl bg-[#ECEDEE] mx-2 p-4">
            <h1 className="text-3xl font-bold text-black mb-4"> • Done</h1>
            <hr className="bg-blue-300 h-2" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Taskboard;


// import React, { useState, useEffect } from 'react';

// function Taskboard() {
//   const [yesterday, setYesterday] = useState(null);
//   const [tasks, setTasks] = useState([]);

//   // Compute yesterday's date in YYYY-MM-DD format
//   useEffect(() => {
//     const date = new Date();
//     date.setDate(date.getDate() - 1); // Subtract one day
//     const formattedDate = date.toISOString().split("T")[0]; // e.g., "2025-02-26"
//     setYesterday(formattedDate);
//   }, []);

//   // Fetch tasks after yesterday's date once yesterday is set
//   useEffect(() => {
//     if (!yesterday) return;
//     const url = "http://localhost:8080/task";

//     fetch(url)
//       // .then((response) => {
//       //   if (!response.ok) {
//       //     throw new Error(`HTTP error! Status: ${response.status}`);
//       //   }
//       //   return response.json();
//       // })
//       .then((data) => {
//         console.log("Fetched Data:", data);
//         setTasks(data);
//         console.log("Tasks:", tasks);
//       })
//       .catch((error) => console.error("Error fetching tasks:", error));
//   }, [yesterday]);

//   return (
//     <>
//       {/* Header */}
//       <div className="header w-full h-[15vh] rounded-xl mx-2 mt-4 p-4 bg-[#ECEDEE]">
//         <h2 className="text-xl font-bold">Tasks after {yesterday}</h2>
//       </div>

//       {/* main content */}
//       <div className="grid grid-cols-2 lg:grid-cols-8 gap-x-2 text-center gap-y-3 h-[80vh] mx-auto p-4">
//         {/* left stats controller */}
//         <div className='rounded-xl sm:col-span-2 bg-[#FFFFFF]'>
//           <div className="rounded-xl p-4 m-2 h-[25vh] bg-[#ECEDEE] block">
//             <div className="h-[8vh] text-2xl m-2 rounded-full w-[8vh] bg-red-600 flex items-center justify-center">
//               <img src="/ExpiredTask.png" className='items-center' alt="Expired Task" />
//             </div>
//             <div className="text-2xl font-bold text-black">Expired Tasks</div>
//           </div>

//           <div className="rounded-xl p-4 m-2 h-[25vh] bg-[#ECEDEE] block">
//             <div className="h-[8vh] text-2xl m-2 rounded-full w-[8vh] bg-red-300 flex items-center justify-center">
//               <img src="/ActiveTask.png" className='items-center' alt="Active Task" />
//             </div>
//             <div className="text-2xl font-bold text-black">All Active Task</div>
//           </div>

//           <div className="rounded-xl p-4 m-2 h-[25vh] bg-[#ECEDEE] block">
//             <div className="h-[8vh] text-2xl m-2 rounded-full w-[8vh] bg-blue-200 flex items-center justify-center">
//               <img src="/CompletedTask.png" className='items-center' alt="Completed Task" />
//             </div>
//             <div className="text-2xl font-bold text-black">Completed Task</div>
//           </div>
//         </div>

//         {/* right task controller */}
//         <div className='rounded-xl h-full sm:col-span-6 bg-[#FFFF] grid grid-cols-1 gap-y-2 lg:grid-cols-3'>
//           <div className="rounded-xl bg-[#ECEDEE] mx-2 p-4">
//             <h1 className="text-3xl font-bold text-black mb-4"> • Todo</h1>
//             <hr className="bg-blue-300 h-2" />
//           </div>
//           <div className="rounded-xl bg-[#ECEDEE] mx-2 p-4">
//             <h1 className="text-3xl font-bold text-black mb-4"> • Todo</h1>
//             <hr className="bg-blue-300 h-2" />
//           </div>
//           <div className="rounded-xl bg-[#ECEDEE] mx-2 p-4">
//             <h1 className="text-3xl font-bold text-black mb-4"> • Todo</h1>
//             <hr className="bg-blue-300 h-2" />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Taskboard;
