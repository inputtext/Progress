// Student Data
const students = [
  {
    id: 1,
    name: 'Aarav Sharma',
    department: 'CSE',
    year: 2027,
  },
  {
    id: 2,
    name: 'Priya Patil',
    department: 'IT',
    year: 2027,
  },
  {
    id: 3,
    name: 'Rohan Verma',
    department: 'CSE',
    year: 2028,
  },
  {
    id: 4,
    name: 'Sneha Deshmukh',
    department: 'ECE',
    year: 2027,
  },
  {
    id: 5,
    name: 'Neha Joshi',
    department: 'IT',
    year: 2028,
  },
  {
    id: 6,
    name: 'Aditya Rao',
    department: 'ECE',
    year: 2026,
  },
];

// Select HTML Elements
const searchInput = document.getElementById('searchInput');

const departmentFilter = document.getElementById('departmentFilter');

const studentGrid = document.getElementById('studentGrid');

const resultCount = document.getElementById('resultCount');

// Main Function
function renderStudents() {
  // Get User Input
  const searchText = searchInput.value.trim().toLowerCase();

  const selectedDepartment = departmentFilter.value;

  // Filter Students
  const filteredStudents = students.filter(function (student) {
    const matchesName = student.name.toLowerCase().includes(searchText);

    const matchesDepartment =
      selectedDepartment === 'All' || student.department === selectedDepartment;

    return matchesName && matchesDepartment;
  });

  // Display Result Count
  resultCount.textContent = `${filteredStudents.length} student(s) found`;

  // Handle No Results
  if (filteredStudents.length === 0) {
    studentGrid.innerHTML = `
            <div class="empty-state">
                <h2>No students found</h2>
                <p>Try another name or department.</p>
            </div>
        `;

    return;
  }

  // Create Student Cards Dynamically
  studentGrid.innerHTML = filteredStudents
    .map(function (student) {
      return `
                <article class="student-card">

                    <h2>${student.name}</h2>

                    <span class="department">
                        ${student.department}
                    </span>

                    <p class="year">
                        Graduation Year: ${student.year}
                    </p>

                </article>
            `;
    })
    .join('');
}

// Search While Typing
searchInput.addEventListener('input', renderStudents);

// Filter When Department Changes
departmentFilter.addEventListener('change', renderStudents);

// Display All Students Initially
renderStudents();
