let jobs = [
    {
        id: 1,
        company: "Mobile First Corp",
        role: "React Native Developer",
        location: "Remote",
        jobType: "Full-time",
        salary: "$130,000 - $175,000",
        description: "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.",
        status: "not"
    },
    {
        id: 2,
        company: "WebFlow Agency",
        role: "Web Designer & Developer",
        location: "Los Angeles, CA",
        jobType: "Part-time",
        salary: "$80,000 - $120,000",
        description: "Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern design trends.",
        status: "not"
    },
    {
        id: 3,
        company: "DataViz Solutions",
        role: "Data Visualization Specialist",
        location: "Boston, MA",
        jobType: "Full-time",
        salary: "$125,000 - $165,000",
        description: "Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking.",
        status: "not"
    },
    {
        id: 4,
        company: "CloudFirst Inc",
        role: "Backend Developer",
        location: "Seattle, WA",
        jobType: "Full-time",
        salary: "$140,000 - $190,000",
        description: "Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices.",
        status: "not"
    },
    {
        id: 5,
        company: "Innovation Labs",
        role: "UI/UX Engineer",
        location: "Austin, TX",
        jobType: "Full-time",
        salary: "$110,000 - $150,000",
        description: "Create beautiful and functional user interfaces. Strong design skills and frontend development expertise required.",
        status: "not"
    },
    {
        id: 6,
        company: "MegaCorp Solutions",
        role: "JavaScript Developer",
        location: "New York, NY",
        jobType: "Full-time",
        salary: "$130,000 - $170,000",
        description: "Build enterprise applications with JavaScript and modern frameworks. Competitive compensation and growth opportunities.",
        status: "not"
    },
    {
        id: 7,
        company: "StartupXYZ",
        role: "Full Stack Engineer",
        location: "Remote",
        jobType: "Full-time",
        salary: "$120,000 - $160,000",
        description: "Join our fast-growing startup. Work with Node.js and React to build scalable platform features.",
        status: "not"
    },
    {
        id: 8,
        company: "TechCorp Industries",
        role: "Senior Frontend Developer",
        location: "San Francisco, CA",
        jobType: "Full-time",
        salary: "$130,000 - $175,000",
        description: "Build scalable web applications using React and TypeScript. Collaborate with cross-functional teams.",
        status: "not"
    }
];

const jobList = document.getElementById("jobList");
const filterButtons = document.querySelectorAll(".filters button");

let currentFilter = "all";

function renderJobs() {
    jobList.innerHTML = "";

    let filteredJobs = jobs;
    document.getElementById("totalJob").innerText = `${jobs.length} Jobs Available`;

    if (currentFilter === "interview") {
        filteredJobs = jobs.filter(job => job.status === "interview");
        document.getElementById("totalJob").innerText = `${filteredJobs.length} of ${jobs.length} Jobs`;
    }

    if (currentFilter === "rejected") {
        filteredJobs = jobs.filter(job => job.status === "rejected");
        document.getElementById("totalJob").innerText = `${filteredJobs.length} of ${jobs.length} Jobs`;
    }

        if (filteredJobs.length === 0) {
        jobList.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">📄</div>
                <h3>No jobs available</h3>
                <p>Check back soon for new job opportunities</p>
            </div>
        `;
        updateCounts();
        return;
    }

    filteredJobs.forEach(job => {
        const div = document.createElement("div");
        div.className = "job";

        let statusText = "NOT APPLIED";
        let statusClass = "not-applied";

        if (job.status === "interview") {
            statusText = "INTERVIEW";
            statusClass = "interviewed";
        }

        if (job.status === "rejected") {
            statusText = "REJECTED";
            statusClass = "rejected";
        }

        div.innerHTML = `
  <div style="display:flex; justify-content:space-between; align-items:start;">
    
    <div style="flex:1;">
      <h3 style="margin-bottom: 8px">${job.company}</h3>
      <p style="margin-bottom: 4px"><strong>${job.role}</strong></p>
      <p style="margin-bottom: 4px">${job.location} • ${job.jobType} • ${job.salary}</p>
      <span class="status ${statusClass}">${statusText}</span>
      <p style="margin-top: 4px; margin-bottom: 8px">${job.description}</p>

      <div class="actions">
        <button class="interview-btn" data-id="${job.id}" data-type="interview">Interview</button>
        <button class="reject-btn" data-id="${job.id}" data-type="rejected">Rejected</button>
      </div>
    </div>

    <button 
      style="background:none;border:none;cursor:pointer;font-size:25px;"
      data-id="${job.id}" 
      data-delete="true"
      title="Delete Job">
      🗑
    </button>

  </div>
`;

        jobList.appendChild(div);
    });

    updateCounts();
}

function setStatus(id, status) {
    const job = jobs.find(j => j.id === id);
    if (job) job.status = status;
    renderJobs();
}

function updateCounts() {
    document.getElementById("totalCount").innerText = jobs.length;
    document.getElementById("interviewCount").innerText =
        jobs.filter(j => j.status === "interview").length;
    document.getElementById("rejectedCount").innerText =
        jobs.filter(j => j.status === "rejected").length;
}

filterButtons.forEach(button => {
    button.addEventListener("click", () => {

        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        currentFilter = button.dataset.filter;
        renderJobs();
    });
});

jobList.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    const type = e.target.dataset.type;
    const isDelete = e.target.dataset.delete;

    if (id && type) {
        setStatus(parseInt(id), type);
    }

    if (id && isDelete) {
        deleteJob(parseInt(id));
    }
});

function deleteJob(id) {
    jobs = jobs.filter(job => job.id !== id);
    renderJobs();

}

renderJobs();