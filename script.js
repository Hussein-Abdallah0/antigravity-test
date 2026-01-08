const users = [
    { id: "1001", name: "Sarah Connor", role: "Frontend Developer", status: "Active", lastActive: "Just now" },
    { id: "1002", name: "John Reece", role: "UX Designer", status: "Active", lastActive: "2 hours ago" },
    { id: "1003", name: "T-800", role: "Infrastructure", status: "Offline", lastActive: "Unknown" },
    { id: "1004", name: "Miles Dyson", role: "Systems Architect", status: "Active", lastActive: "1 day ago" },
    { id: "1005", name: "Ellen Ripley", role: "Security Engineer", status: "Busy", lastActive: "45 mins ago" },
    { id: "1006", name: "Neo Anderson", role: "Backend Developer", status: "Active", lastActive: "5 mins ago" },
    { id: "1007", name: "Trinity", role: "DevOps Engineer", status: "Active", lastActive: "10 mins ago" },
    { id: "1008", name: "Morpheus", role: "Team Lead", status: "Busy", lastActive: "1 hour ago" },
    { id: "1009", name: "Agent Smith", role: "QA Engineer", status: "Offline", lastActive: "2 days ago" },
    { id: "1010", name: "Cypher", role: "Database Admin", status: "Offline", lastActive: "3 days ago" },
    { id: "1011", name: "Deckard", role: "Investigator", status: "Busy", lastActive: "4 hours ago" },
    { id: "1012", name: "Roy Batty", role: "AI Specialist", status: "Active", lastActive: "30 mins ago" },
    { id: "1013", name: "Rachael", role: "Product Manager", status: "Active", lastActive: "15 mins ago" },
    { id: "1014", name: "Gaff", role: "Origami Expert", status: "Offline", lastActive: "1 week ago" },
    { id: "1015", name: "Sebastian", role: "Toy Maker", status: "Active", lastActive: "2 hours ago" },
    { id: "1016", name: "Pris", role: "Gymnast", status: "Offline", lastActive: "Unknown" },
    { id: "1017", name: "Zhora", role: "Exotic Dancer", status: "Offline", lastActive: "Unknown" },
    { id: "1018", name: "Leon", role: "Waste Management", status: "Offline", lastActive: "Unknown" },
    { id: "1019", name: "Tyrell", role: "CEO", status: "Busy", lastActive: "Just now" },
    { id: "1020", name: "Hannibal Chew", role: "Eye Engineer", status: "Active", lastActive: "3 hours ago" }
];

const tableBody = document.getElementById('tableBody');
const searchInput = document.getElementById('searchInput');

function getStatusClass(status) {
    switch(status.toLowerCase()) {
        case 'active': return 'status-active';
        case 'offline': return 'status-offline';
        case 'busy': return 'status-busy';
        default: return '';
    }
}

function renderTable(data) {
    tableBody.innerHTML = '';
    
    if (data.length === 0) {
        const row = document.createElement('tr');
        row.innerHTML = `<td colspan="5" class="empty-state">No users found matching your search.</td>`;
        tableBody.appendChild(row);
        return;
    }

    data.forEach(user => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>#${user.id}</td>
            <td>${user.name}</td>
            <td>${user.role}</td>
            <td><span class="status ${getStatusClass(user.status)}">${user.status}</span></td>
            <td>${user.lastActive}</td>
        `;
        
        tableBody.appendChild(row);
    });
}

function filterTable(searchTerm) {
    const term = searchTerm.toLowerCase();
    
    const filteredUsers = users.filter(user => 
        user.name.toLowerCase().includes(term) ||
        user.role.toLowerCase().includes(term) ||
        user.id.toLowerCase().includes(term) ||
        user.status.toLowerCase().includes(term)
    );
    
    renderTable(filteredUsers);
}

// Event Listeners
searchInput.addEventListener('input', (e) => {
    filterTable(e.target.value);
});

// Initial Render
renderTable(users);
