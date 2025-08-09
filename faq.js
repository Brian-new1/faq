function toggleFAQ(element) {
  const faqItem = element.parentElement;
  const answer = element.nextElementSibling;
  const isOpen = faqItem.classList.contains('open');
  if (isOpen) {
    faqItem.classList.remove('open');
    answer.style.display = 'none';
  } else {
    faqItem.classList.add('open');
    answer.style.display = 'block';
  }
}

function searchFAQs() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const faqs = document.querySelectorAll(".faq-item");
  const articles = document.querySelectorAll(".article");
  const resultsSection = document.getElementById("searchResults");
  const articlesSection = document.querySelector('.articles');
  const faqSection = document.querySelector('.faq-section');
  let resultsHTML = "";
  let matchFound = false;

  // Search FAQs
  faqs.forEach(faq => {
    const question = faq.querySelector("h3").textContent.toLowerCase();
    const answer = faq.querySelector("p").textContent.toLowerCase();
    if (query && (question.includes(query) || answer.includes(query))) {
      resultsHTML += `<div>${faq.querySelector("h3").outerHTML}${faq.querySelector("p").outerHTML}</div>`;
      matchFound = true;
    }
  });

  // Search Articles
  articles.forEach(article => {
    const title = article.querySelector("h2").textContent.toLowerCase();
    const desc = article.querySelector("p").textContent.toLowerCase();
    if (query && (title.includes(query) || desc.includes(query))) {
      resultsHTML += `<div>${article.querySelector("h2").outerHTML}${article.querySelector("p").outerHTML}</div>`;
      matchFound = true;
    }
  });

  if (query) {
    articlesSection.style.display = "none";
    faqSection.style.display = "none";
    resultsSection.style.display = "block";
    if (matchFound) {
      resultsSection.innerHTML = resultsHTML;
    } else {
      resultsSection.innerHTML = "<p>No results found.</p>";
    }
  } else {
    articlesSection.style.display = "flex";
    faqSection.style.display = "block";
    resultsSection.style.display = "none";
  }
}