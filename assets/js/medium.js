const fetchUrl = 'https://nodejs.joysontech.com/medium-articles'; // Use your server URL

fetch(fetchUrl)
    .then(response => response.json()) // Parse the JSON response directly
    .then(data => {
        const mediumArticlesDiv = document.getElementById('medium-articles');

        // Clear existing articles (if any) before adding new ones
        mediumArticlesDiv.innerHTML = ""; 

        data.forEach(article => {
            // Extract the thumbnail image from the content, if available
            const parser = new DOMParser();
            const contentDoc = parser.parseFromString(article.content, 'text/html');
            const thumbnail = contentDoc.querySelector('img') ? contentDoc.querySelector('img').src : '';

            const articleSection = document.createElement('section');
articleSection.innerHTML = `
    <h3>${article.title}</h3>
    ${thumbnail ? `<img src="${thumbnail}" alt="Thumbnail" style="width:300px; height:auto;" />` : ''}
    <br />
    <a href="${article.link}" target="_blank">Read More</a>
`;
            mediumArticlesDiv.appendChild(articleSection);
        });
    })
    .catch(err => console.error('Error fetching Medium articles:', err));
