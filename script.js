document.addEventListener("DOMContentLoaded", () => {
  console.log("hello console!");
  addExampleBlogEntry();
  setStandardCookie();
  displayUserProfile();
});

function addExampleBlogEntry() {
  const blogEntries = document.getElementById("blog-entries");
  if (blogEntries) {
    const entry = document.createElement("div");
    entry.className = "blog-entry";
    entry.innerHTML = `
		<h5><i class=""></i> I am exited to continue learning new skills</h5>
			<p>Thank you for visiting!</p>
		`

    blogEntries.append(entry);
  }
}

function setStandardCookie() {
}

function displayUserProfile() {
}