// ------------- PEOPLE DATA (200 NAMES) -------------
const PEOPLE = [
    { id: 1, name: "Alice Johnson" }, { id: 2, name: "Bob Smith" }, { id: 3, name: "Carla Gomez" },
    { id: 4, name: "Derek Li" }, { id: 5, name: "Emily Chen" }, { id: 6, name: "Frank Murphy" },
    { id: 7, name: "Grace Lee" }, { id: 8, name: "Hannah Patel" }, { id: 9, name: "Isaac Wright" },
    { id: 10, name: "Julia Carter" }, { id: 11, name: "Kevin Brown" }, { id: 12, name: "Linda Scott" },
    { id: 13, name: "Maria Garcia" }, { id: 14, name: "Nathan Evans" }, { id: 15, name: "Olivia Miller" },
    { id: 16, name: "Paul Kim" }, { id: 17, name: "Quincy Davis" }, { id: 18, name: "Rita Turner" },
    { id: 19, name: "Samuel Clark" }, { id: 20, name: "Tina Hill" }, { id: 21, name: "Umar Ahmed" },
    { id: 22, name: "Victoria Adams" }, { id: 23, name: "Wendy Green" }, { id: 24, name: "Xavier Thomas" },
    { id: 25, name: "Yara Sanchez" }, { id: 26, name: "Zane Robinson" }, { id: 27, name: "Adam Cooper" },
    { id: 28, name: "Bethany Flores" }, { id: 29, name: "Chris Baker" }, { id: 30, name: "Dana Brooks" },
    { id: 31, name: "Eli Ward" }, { id: 32, name: "Fiona Ross" }, { id: 33, name: "Gavin Reed" },
    { id: 34, name: "Heather Bennett" }, { id: 35, name: "Ian Price" }, { id: 36, name: "Janet Cox" },
    { id: 37, name: "Kara Simmons" }, { id: 38, name: "Leon Morgan" }, { id: 39, name: "Megan Bryant" },
    { id: 40, name: "Neil Kelly" }, { id: 41, name: "Opal Diaz" }, { id: 42, name: "Patrick Russell" },
    { id: 43, name: "Quinn Bell" }, { id: 44, name: "Rose Perry" }, { id: 45, name: "Sean Wood" },
    { id: 46, name: "Tara Watson" }, { id: 47, name: "Uri Klein" }, { id: 48, name: "Valerie Stone" },
    { id: 49, name: "Wayne Ford" }, { id: 50, name: "Ximena Harper" }, { id: 51, name: "Yusuf Ortiz" },
    { id: 52, name: "Zoe Stephens" }, { id: 53, name: "Aaron Lawrence" }, { id: 54, name: "Brittany Pierce" },
    { id: 55, name: "Colin Gordon" }, { id: 56, name: "Denise Shaw" }, { id: 57, name: "Erik Reynolds" },
    { id: 58, name: "Felicia Gray" }, { id: 59, name: "Gerald Fox" }, { id: 60, name: "Hailey Marshall" },
    { id: 61, name: "Isaiah Sullivan" }, { id: 62, name: "Jocelyn Peters" }, { id: 63, name: "Kyle Coleman" },
    { id: 64, name: "Lily Chapman" }, { id: 65, name: "Miles Stone" }, { id: 66, name: "Naomi Hunt" },
    { id: 67, name: "Owen Lane" }, { id: 68, name: "Pamela Willis" }, { id: 69, name: "Ralph Foster" },
    { id: 70, name: "Sabrina Simmons" }, { id: 71, name: "Travis Beck" }, { id: 72, name: "Uma Mathews" },
    { id: 73, name: "Vince Herrera" }, { id: 74, name: "Whitney Mason" }, { id: 75, name: "Xander Riley" },
    { id: 76, name: "Yasmine Lowe" }, { id: 77, name: "Zackary Nash" }, { id: 78, name: "Alicia Fields" },
    { id: 79, name: "Brandon Montgomery" }, { id: 80, name: "Cindy Warren" }, { id: 81, name: "Dean Barker" },
    { id: 82, name: "Elsa Dixon" }, { id: 83, name: "Felix Curtis" }, { id: 84, name: "Giselle Fleming" },
    { id: 85, name: "Harvey Brady" }, { id: 86, name: "Isabel Palmer" }, { id: 87, name: "Jackie Nguyen" },
    { id: 88, name: "Kenny Morales" }, { id: 89, name: "Leah Chambers" }, { id: 90, name: "Martin Watts" },
    { id: 91, name: "Natalie Barrett" }, { id: 92, name: "Oscar Walters" }, { id: 93, name: "Penny Jordan" },
    { id: 94, name: "Raul Moreno" }, { id: 95, name: "Sara Stevenson" }, { id: 96, name: "Toby Rhodes" },
    { id: 97, name: "Ursula Page" }, { id: 98, name: "Victor Lloyd" }, { id: 99, name: "Wanda Dean" },
    { id: 100, name: "Xavier Boyd" }, { id: 101, name: "Yolanda Farrell" }, { id: 102, name: "Zeke Douglas" },
    { id: 103, name: "Aidan Shelton" }, { id: 104, name: "Bianca Franklin" }, { id: 105, name: "Chase Saunders" },
    { id: 106, name: "Diana Hubbard" }, { id: 107, name: "Ethan Schwartz" }, { id: 108, name: "Faith Payne" },
    { id: 109, name: "Graham Pope" }, { id: 110, name: "Helena Fitzgerald" }, { id: 111, name: "Irvin Castillo" },
    { id: 112, name: "Jenna Osborne" }, { id: 113, name: "Kurt Blake" }, { id: 114, name: "Larissa Simon" },
    { id: 115, name: "Mason Little" }, { id: 116, name: "Noelle Baldwin" }, { id: 117, name: "Omar Wilkins" },
    { id: 118, name: "Paige Pratt" }, { id: 119, name: "Reese Ingram" }, { id: 120, name: "Shane Hobbs" },
    { id: 121, name: "Tanya Parks" }, { id: 122, name: "Ulises Bowers" }, { id: 123, name: "Vera Buchanan" },
    { id: 124, name: "Wesley Gibbs" }, { id: 125, name: "Xena Holman" }, { id: 126, name: "Yvette McCarthy" },
    { id: 127, name: "Zara Gilbert" }, { id: 128, name: "Alec Short" }, { id: 129, name: "Brianna Malone" },
    { id: 130, name: "Curtis Patrick" }, { id: 131, name: "Daisy Harmon" }, { id: 132, name: "Evan Drake" },
    { id: 133, name: "Faye Blackwell" }, { id: 134, name: "Gage Ballard" }, { id: 135, name: "Hope Stanton" },
    { id: 136, name: "Ian Shannon" }, { id: 137, name: "Janice McGee" }, { id: 138, name: "Kris Floyd" },
    { id: 139, name: "Liam Steele" }, { id: 140, name: "Maddie Sweeney" }, { id: 141, name: "Nolan Wilcox" },
    { id: 142, name: "Ophelia Ellison" }, { id: 143, name: "Parker Goodwin" }, { id: 144, name: "Quentin Snow" },
    { id: 145, name: "Ruby Booth" }, { id: 146, name: "Silas Nash" }, { id: 147, name: "Tabitha Briggs" },
    { id: 148, name: "Ulysses Tate" }, { id: 149, name: "Violet Shepard" }, { id: 150, name: "Warren Frazier" },
    { id: 151, name: "Xander Pitts" }, { id: 152, name: "Yuri Holmes" }, { id: 153, name: "Zelda Barron" },
    { id: 154, name: "Abigail Bruce" }, { id: 155, name: "Bryce Clements" }, { id: 156, name: "Cassidy Shea" },
    { id: 157, name: "Devin Morrow" }, { id: 158, name: "Elianna Jefferson" }, { id: 159, name: "Finn Ramsey" },
    { id: 160, name: "Gillian Strong" }, { id: 161, name: "Hugo May" }, { id: 162, name: "Imani Houston" },
    { id: 163, name: "Jared Yates" }, { id: 164, name: "Kelsey Buck" }, { id: 165, name: "Logan Vaughn" },
    { id: 166, name: "Morgan Greer" }, { id: 167, name: "Nia Cross" }, { id: 168, name: "Oscar Spence" },
    { id: 169, name: "Piper Hodge" }, { id: 170, name: "Quinn Everett" }, { id: 171, name: "Reagan Shea" },
    { id: 172, name: "Sienna Riley" }, { id: 173, name: "Tristan Kerr" }, { id: 174, name: "Una Bishop" },
    { id: 175, name: "Vivian Horton" }, { id: 176, name: "Wyatt McLean" }, { id: 177, name: "Xiomara Sanford" },
    { id: 178, name: "Yasmin Snow" }, { id: 179, name: "Zander O'Brien" }, { id: 180, name: "Ava Gillespie" },
    { id: 181, name: "Blake Langley" }, { id: 182, name: "Cameron Pope" }, { id: 183, name: "Daphne Peters" },
    { id: 184, name: "Easton Berger" }, { id: 185, name: "Faith Donaldson" }, { id: 186, name: "Graham Farley" },
    { id: 187, name: "Hattie Bernard" }, { id: 188, name: "Ian Kline" }, { id: 189, name: "Joyce Landry" },
    { id: 190, name: "Kaleb O'Donnell" }, { id: 191, name: "Lila Conrad" }, { id: 192, name: "Milo Herring" },
    { id: 193, name: "Nadia Riddle" }, { id: 194, name: "Omar Wise" }, { id: 195, name: "Peyton Cobb" },
    { id: 196, name: "Quincy English" }, { id: 197, name: "Rowan Waller" }, { id: 198, name: "Sloane Newton" },
    { id: 199, name: "Trevor Britt" }, { id: 200, name: "Una Shannon" }
];

// ------------- FETCH INTERCEPTOR FOR SIMULATED API -------------
const originalFetch = window.fetch;
window.fetch = function (url, options) {
    const urlObj = new URL(url, window.location.origin);
    if (urlObj.pathname === '/api/people') {
        const query = urlObj.searchParams.get('query') || '';
        return new Promise(resolve => {
            setTimeout(() => {
                const results = PEOPLE.filter(person =>
                    person.name.toLowerCase().includes(query.trim().toLowerCase())
                );
                resolve(new Response(JSON.stringify(results), {
                    headers: { 'Content-Type': 'application/json' }
                }));
            }, 250);
        });
    }
    return originalFetch.apply(this, arguments);
};

// ------------- MULTI-SELECT TYPEAHEAD LOGIC -------------
let selectedPeople = [];
let filteredSuggestions = [];
let activeSuggestionIndex = -1;

// DOM Elements
const chipsContainer = document.getElementById('chipsContainer');
const input = document.getElementById('typeaheadInput');
const suggestionsList = document.getElementById('suggestionsList');
const container = document.getElementById('typeaheadDemo');

// Utility: Debounce
let debounceTimer = null;
function debounce(fn, ms) {
    return function (...args) {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => fn(...args), ms);
    };
}

// Render chips (selected people)
function renderChips() {
    chipsContainer.innerHTML = '';
    selectedPeople.forEach((person, idx) => {
        const chip = document.createElement('span');
        chip.className = 'chip';
        chip.textContent = person.name;

        const btn = document.createElement('button');
        btn.innerHTML = '&times;';
        btn.setAttribute('aria-label', `Remove ${person.name}`);
        btn.onclick = () => {
            selectedPeople.splice(idx, 1);
            renderChips();
            filterAndRenderSuggestions();
            input.focus();
        };

        chip.appendChild(btn);
        chipsContainer.appendChild(chip);
    });
}

// Render suggestion list
function renderSuggestions() {
    suggestionsList.innerHTML = '';

    const combo = container.getAttribute('role') === 'combobox'
        ? container
        : null;

    if (input.value && filteredSuggestions.length > 0) {
        filteredSuggestions.forEach((person, idx) => {
            const li = document.createElement('li');
            li.id = `opt-${person.id}`;
            li.textContent = person.name;
            li.className = idx === activeSuggestionIndex ? 'active' : '';
            li.onclick = () => selectSuggestion(person);

            // a11y
            li.setAttribute('role', 'option');
            li.setAttribute('aria-selected', idx === activeSuggestionIndex ? 'true' : 'false');

            suggestionsList.appendChild(li);
        });

        suggestionsList.style.display = 'block';
        if (combo) combo.setAttribute('aria-expanded', 'true');

        // keep activedescendant synced for SRs
        if (activeSuggestionIndex >= 0) {
            const activeLi = suggestionsList.children[activeSuggestionIndex];
            if (activeLi) {
                input.setAttribute('aria-activedescendant', activeLi.id);
                activeLi.scrollIntoView({ block: 'nearest' });
            }
        } else {
            input.removeAttribute('aria-activedescendant');
        }
    } else {
        suggestionsList.style.display = 'none';
        if (combo) combo.setAttribute('aria-expanded', 'false');
        input.removeAttribute('aria-activedescendant');
    }
}

// Select suggestion (add to selectedPeople) — keeps the list open for rapid multi-add
function selectSuggestion(person) {
    if (!selectedPeople.some(sel => sel.id === person.id)) {
        selectedPeople.push(person);
        renderChips();
    }
    // Keep current query; just re-filter so selected item disappears from the list
    activeSuggestionIndex = -1;
    filterAndRenderSuggestions();
    input.focus();
}

function getSelectedNames() {
    return selectedPeople.map(person => person.name);
}

// Fetch/filter suggestions and render
function filterAndRenderSuggestions() {
    const query = input.value;
    if (!query.trim()) {
        filteredSuggestions = [];
        renderSuggestions();
        return;
    }
    fetch(`/api/people?query=${encodeURIComponent(query)}`)
        .then(res => res.json())
        .then(results => {
            filteredSuggestions = results.filter(person =>
                !selectedPeople.some(sel => sel.id === person.id)
            );
            // clamp active index
            if (activeSuggestionIndex >= filteredSuggestions.length) {
                activeSuggestionIndex = filteredSuggestions.length - 1;
            }
            renderSuggestions();
        });
}

// Input and keyboard handlers
input.addEventListener('input', debounce(() => {
    filterAndRenderSuggestions();
}, 200));

input.addEventListener('keydown', (e) => {
    const listOpen = suggestionsList.style.display === 'block';
    const hasItems = filteredSuggestions.length > 0;

    if (listOpen && hasItems) {
        if (e.key === 'ArrowDown') {
            activeSuggestionIndex = Math.min(activeSuggestionIndex + 1, filteredSuggestions.length - 1);
            renderSuggestions();
            e.preventDefault();
            return;
        }
        if (e.key === 'ArrowUp') {
            activeSuggestionIndex = Math.max(activeSuggestionIndex - 1, 0);
            renderSuggestions();
            e.preventDefault();
            return;
        }
    }

    // Enter / Tab / Comma to select current (or only) item
    const triggersSelect = (e.key === 'Enter');
    if (triggersSelect && hasItems) {
        if (activeSuggestionIndex >= 0) {
            selectSuggestion(filteredSuggestions[activeSuggestionIndex]);
            e.preventDefault();
            return;
        }
        if (filteredSuggestions.length === 1) {
            selectSuggestion(filteredSuggestions[0]);
            e.preventDefault();
            return;
        }
    }

    // Backspace to remove last chip when input is empty
    if (e.key === 'Backspace' && !input.value && selectedPeople.length) {
        selectedPeople.pop();
        renderChips();
        filterAndRenderSuggestions();
    }
});

// Hide suggestions on outside click
document.addEventListener('click', (e) => {
  
    
    if (!container.contains(e.target)) {
        input.value = '';   
        suggestionsList.style.display = 'none';
        if (container.getAttribute('role') === 'combobox') {
            container.setAttribute('aria-expanded', 'false');
        }
    }
});

// Save button (demo)
document.getElementById('saveBtn').addEventListener('click', () => {
    input.value = '';
    const namesToSave = getSelectedNames();
    alert("Names to save: " + namesToSave.join(", "));
    // POST here if needed
});

// Initial render
renderChips();
  