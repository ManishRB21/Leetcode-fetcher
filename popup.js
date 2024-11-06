// Event listener for fetching a specific problem by title
document.getElementById('fetchProblemBtn').addEventListener('click', () => {
    const problemInput = document.getElementById('problemInput').value;
    const titleSlug = problemInput.toLowerCase().replace(/\s+/g, '-'); // Convert input to slug format

    fetch('https://leetcode.com/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Referer': 'https://leetcode.com/' // Required Referer header
        },
        body: JSON.stringify({
            query: `
                query getQuestion($titleSlug: String!) {
                    question(titleSlug: $titleSlug) {
                        questionId
                        title
                        titleSlug
                        content
                        difficulty
                        stats
                        codeSnippets {
                            lang
                            code
                        }
                        topicTags {
                            name
                        }
                    }
                }
            `,
            variables: { titleSlug }
        })
    })
    .then(response => response.json())
    .then(data => {
        const question = data.data.question;
        if (question) {
            const stats = JSON.parse(question.stats); // Parse stats JSON string

            // Display the question details in the output div
            document.getElementById('output').innerHTML = `
                <h2>${question.title} (ID: ${question.questionId})</h2>
                <p><strong>Difficulty:</strong> ${question.difficulty}</p>
                <p><strong>Total Accepted Submissions (total_acs):</strong> ${stats.totalAccepted}</p>
                <p><strong>Acceptance Rate:</strong> ${((stats.totalAccepted / stats.totalSubmission) * 100).toFixed(2)}%</p>
                <p><strong>Total Submissions:</strong> ${stats.totalSubmission}</p>
                <div>${question.content}</div>
                <h3>Code Snippets:</h3>
                <pre>${question.codeSnippets.map(snippet => `<code>${snippet.lang}: ${snippet.code}</code><br>`).join('')}</pre>
                <h3>Topic Tags:</h3>
                <p>${question.topicTags.map(tag => tag.name).join(', ')}</p>
            `;
        } else {
            document.getElementById('output').innerHTML = 'No question found.';
        }
    })
    .catch(error => {
        console.error('Error fetching question:', error);
        document.getElementById('output').innerHTML = 'Error fetching question.';
    });
});

// Event listener for fetching all problem names with IDs and filtering by difficulty
// Event listener for fetching all problem names with IDs and filtering by difficulty
document.getElementById('fetchAllNamesBtn').addEventListener('click', () => {
    fetch('https://leetcode.com/api/problems/all/')
    .then(response => response.json())
    .then(data => {
        const selectedDifficulty = document.getElementById('difficultySelect').value; // Get selected difficulty
        if (data && data.stat_status_pairs && data.stat_status_pairs.length > 0) {
            // Map to get a list of problems with title, question ID, difficulty, and total accepted submissions
            const problemList = data.stat_status_pairs.map(p => ({
                title: p.stat.question__title,
                questionId: p.stat.question_id,
                difficulty: p.difficulty.level,
                totalAccepted: p.stat.total_acs || 0 // Use total_acs, default to 0 if undefined
            }));

            // Filter by selected difficulty level
            const filteredProblems = problemList.filter(problem => 
                selectedDifficulty === 'all' || problem.difficulty == selectedDifficulty
            );

            // Sort the filtered problems based on criteria (difficulty first, then total accepted submissions)
            filteredProblems.sort((a, b) => {
                // Sort by difficulty
                if (a.difficulty !== b.difficulty) {
                    return a.difficulty - b.difficulty; // Assuming difficulty is numeric (1-3 or similar)
                }
                // Then sort by total accepted submissions
                return b.totalAccepted - a.totalAccepted; // Descending order
            });

            // Display the sorted and filtered list of problem names and IDs in the output div
            document.getElementById('output').innerHTML = `
                <h2>All LeetCode Problem Names and IDs (Filtered)</h2>
                <div class="problem-container">
                    ${filteredProblems.length > 0 ? 
                        filteredProblems.map(p => `
                            <div class="problem-card">
                                <span><strong>ID:</strong> ${p.questionId}</span>
                                <span><strong>Title:</strong> ${p.title}</span>
                                <span><strong>Difficulty:</strong> ${p.difficulty}</span>
                                <span><strong>Likes:</strong> ${p.totalAccepted}</span>
                            </div>
                        `).join('') : 
                        'No problems found for the selected difficulty.'
                    }
                </div>
            `;
        } else {
            document.getElementById('output').innerHTML = 'No problems found.';
        }
    })
    .catch(error => {
        console.error('Error fetching problem names:', error);
        document.getElementById('output').innerHTML = 'Error fetching problem names.';
    });
});


document.getElementById('fetchLinkBtn').addEventListener('click', () => {
    const problemNumber = document.getElementById('problemNumber').value;

    // Check if the input is not empty and is a valid number
    if (!problemNumber || isNaN(problemNumber) || problemNumber <= 0) {
        document.getElementById('output').innerHTML = 'Please enter a valid problem number.';
        return;
    }

    // Construct the URL based on the input problem number
    const problemLink = `https://walkccc.me/LeetCode/problems/${problemNumber}/`;

    // Display the generated link
    document.getElementById('output').innerHTML = `
        <h3>Solution Link:</h3>
        <a href="${problemLink}" target="_blank">${problemLink}</a>
    `;
});
