// Article text
const articleText = `
Air pollution is a major environmental issue in India. The country is home to 22 of the world's 30 most polluted cities, according to a report by Greenpeace.
The main causes of air pollution in India are the burning of fossil fuels, industrial emissions, and agricultural burning. The pollution has severe health effects, including respiratory problems, cardiovascular disease, and even premature death.
The Indian government has taken steps to address the issue, including implementing emission standards for vehicles and industries, and promoting the use of clean energy sources like solar and wind power.
However, more needs to be done to tackle the scale of the problem. Individuals can also play a role by reducing their own carbon footprint, using public transport, and supporting organizations that work on environmental issues.
`;

// Function to show the article
function showArticle() {
	const articleElement = document.getElementById("article");
	articleElement.innerText = articleText;
}

// Event listener for the show article button
document.getElementById("show-article").addEventListener("click", showArticle);