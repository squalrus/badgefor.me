// Main JavaScript file
document.addEventListener('DOMContentLoaded', function () {
  // FAQ expand/collapse functionality
  const faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach((question) => {
    question.addEventListener('click', () => {
      const faqItem = question.closest('.faq-item');
      faqItem.classList.toggle('active');
    });
  });
});
