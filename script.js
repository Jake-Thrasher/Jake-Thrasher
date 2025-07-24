const toggleBtn = document.getElementById('modeToggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    toggleBtn.textContent = 'Light Mode';
  } else {
    toggleBtn.textContent = 'Dark Mode';
  }
});

const blogUrl = "https://Jake-Thrasher.github.io/blog-data/blogData.json";

function loadBlogPosts() {
  fetch(blogUrl)
    .then(response => response.json())
    .then(data => {
      const blogList = document.getElementById('blogList');
      if (!blogList) return; 

      blogList.innerHTML = "";

      data.forEach(post => {
        const card = document.createElement('div');
        card.className = "card mb-4";
        card.innerHTML = `
          <div class="card-body">
            <h5 class="card-title">${post.title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${post.date}</h6>
            <p class="card-text">${post.content}</p>
            <span class="badge bg-info">${post.tags.join(', ')}</span>
          </div>
        `;
        blogList.appendChild(card);
      });
    })
    .catch(error => {
      console.error("Error fetching blog data:", error);
    });
}

document.addEventListener('DOMContentLoaded', loadBlogPosts);
