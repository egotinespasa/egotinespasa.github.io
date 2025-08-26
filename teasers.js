fetch('posts.json')
  .then(response => response.json())
  .then(posts => {
    const container = document.getElementById('teasers');
    container.innerHTML = posts.map(p => `
      <article style="margin-bottom: 1.5em;">
        <h3><a href="${p.url}">${p.title}</a></h3>
        <p>${p.excerpt}</p>
      </article>
    `).join('');
  })
  .catch(err => {
    console.error('Error loading teasers:', err);
  });
