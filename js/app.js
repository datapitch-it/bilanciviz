/* =============================================
   VIZ FOR BIZ - Application Logic
   ============================================= */

(function() {
    'use strict';

    // =============================================
    // Company Selector
    // =============================================
    function showCompany(company) {
        document.querySelectorAll('.company-detail').forEach(el => el.style.display = 'none');
        document.querySelectorAll('.company-badge').forEach(el => el.classList.remove('active'));
        document.getElementById('company-' + company).style.display = 'block';
        event.target.classList.add('active');
    }

    // =============================================
    // Quiz Functionality
    // =============================================
    let quizScore = 0;
    let currentQuestion = 1;
    const totalQuestions = 5;

    function initQuiz() {
        document.querySelectorAll('.quiz-option').forEach(option => {
            option.addEventListener('click', handleQuizAnswer);
        });
    }

    function handleQuizAnswer() {
        const questionCard = this.closest('.quiz-question');
        if (questionCard.classList.contains('answered')) return;

        const correctAnswer = questionCard.dataset.correct;
        const selectedAnswer = this.dataset.answer;

        questionCard.classList.add('answered');

        // Mark all options
        questionCard.querySelectorAll('.quiz-option').forEach(opt => {
            opt.classList.add('selected');
            if (opt.dataset.answer === correctAnswer) {
                opt.classList.add('correct');
            } else if (opt === this && selectedAnswer !== correctAnswer) {
                opt.classList.add('incorrect');
            }
        });

        // Show feedback
        if (selectedAnswer === correctAnswer) {
            quizScore++;
            questionCard.querySelector('.quiz-feedback.correct').classList.add('show');
        } else {
            questionCard.querySelector('.quiz-feedback.incorrect').classList.add('show');
        }

        // Show next question or results after delay
        setTimeout(() => {
            if (currentQuestion < totalQuestions) {
                currentQuestion++;
                const nextQuestion = document.querySelector(`.quiz-question[data-question="${currentQuestion}"]`);
                if (nextQuestion) {
                    nextQuestion.style.display = 'block';
                    nextQuestion.scrollIntoView({ behavior: 'smooth' });
                }
            } else {
                showQuizResults();
            }
        }, 1500);
    }

    function showQuizResults() {
        document.getElementById('quiz-container').style.display = 'none';
        document.getElementById('quiz-results').style.display = 'block';
        document.getElementById('quiz-score').textContent = quizScore;

        let message = '';
        if (quizScore === 5) {
            message = 'Perfetto! Sei un esperto di data visualization per tabelle finanziarie.';
        } else if (quizScore >= 3) {
            message = 'Buon risultato! Hai una buona comprensione dei principi base.';
        } else {
            message = 'Rileggi la guida e riprova. La pratica rende perfetti!';
        }
        document.getElementById('quiz-message').textContent = message;
    }

    function resetQuiz() {
        quizScore = 0;
        currentQuestion = 1;

        document.querySelectorAll('.quiz-question').forEach((q, i) => {
            q.classList.remove('answered');
            q.style.display = i === 0 ? 'block' : 'none';
            q.querySelectorAll('.quiz-option').forEach(opt => {
                opt.classList.remove('selected', 'correct', 'incorrect');
            });
            q.querySelectorAll('.quiz-feedback').forEach(fb => {
                fb.classList.remove('show');
            });
        });

        document.getElementById('quiz-container').style.display = 'block';
        document.getElementById('quiz-results').style.display = 'none';
    }

    // =============================================
    // Checklist Scoring
    // =============================================
    function initChecklist() {
        document.querySelectorAll('.checklist-item input').forEach(checkbox => {
            checkbox.addEventListener('change', updateChecklistScore);
        });
    }

    function updateChecklistScore() {
        const checked = document.querySelectorAll('.checklist-item input:checked').length;
        const total = 19;
        const percentage = Math.round((checked / total) * 100);

        document.getElementById('checklist-score').textContent = checked;
        document.getElementById('checklist-progress').style.width = percentage + '%';
    }

    // =============================================
    // Charts Initialization
    // =============================================
    function initCharts() {
        // Check if Chart.js is available
        if (typeof Chart === 'undefined') {
            console.warn('Chart.js not loaded');
            return;
        }

        // Chart: Problems by Criterion
        const ctxProblemi = document.getElementById('chartProblemi');
        if (ctxProblemi) {
            new Chart(ctxProblemi.getContext('2d'), {
                type: 'bar',
                data: {
                    labels: AppData.charts.problemiPerCriterio.labels,
                    datasets: [{
                        label: 'Aziende con problemi',
                        data: AppData.charts.problemiPerCriterio.data,
                        backgroundColor: AppData.charts.problemiPerCriterio.colors,
                        borderWidth: 0
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: true,
                            max: 10
                        }
                    },
                    plugins: {
                        legend: { display: false }
                    }
                }
            });
        }

        // Chart: Companies Comparison
        const ctxAziende = document.getElementById('chartAziende');
        if (ctxAziende) {
            new Chart(ctxAziende.getContext('2d'), {
                type: 'bar',
                data: {
                    labels: AppData.charts.aziendeConfronti.labels,
                    datasets: [{
                        label: 'Criteri OK',
                        data: AppData.charts.aziendeConfronti.criteriOK,
                        backgroundColor: 'rgba(25, 135, 84, 0.7)'
                    }, {
                        label: 'Criteri KO',
                        data: AppData.charts.aziendeConfronti.criteriKO,
                        backgroundColor: 'rgba(220, 53, 69, 0.7)'
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: true,
                            max: 5
                        }
                    }
                }
            });
        }
    }

    // =============================================
    // Utility Functions
    // =============================================

    // Generate company financial table HTML
    function generateFinancialTable(companyKey) {
        const company = AppData.companies[companyKey];
        if (!company) return '';

        let html = `<table class="demo-table table-ce" style="font-size:0.8rem;">
            <thead>
                <tr>
                    <th class="voce">Voce</th>
                    <th class="val">2024</th>
                    <th class="val">2023</th>`;

        if (company.financials.some(f => f.delta)) {
            html += `<th class="val">Var %</th>`;
        }

        html += `</tr></thead><tbody>`;

        company.financials.forEach(row => {
            const rowClass = row.class ? ` class="${row.class}"` : '';
            html += `<tr${rowClass}>
                <td class="voce">${row.voce}</td>
                <td class="val">${row.y2024}</td>
                <td class="val">${row.y2023}</td>`;

            if (company.financials.some(f => f.delta)) {
                const deltaClass = row.deltaClass ? ` class="val ${row.deltaClass}"` : ' class="val"';
                html += `<td${deltaClass}>${row.delta || ''}</td>`;
            }

            html += `</tr>`;
        });

        html += `</tbody></table>`;
        return html;
    }

    // Generate criteria indicators HTML
    function generateCriteriaIndicators(companyKey) {
        const company = AppData.companies[companyKey];
        if (!company) return '';

        const labels = {
            completezza: 'A Completezza',
            griglia: 'B Griglia',
            gerarchia: 'C Gerarchia',
            valori: 'D Valori',
            testi: 'E Testi'
        };

        let html = '';
        for (const [key, value] of Object.entries(company.criteria)) {
            const cssClass = value === 'pass' ? 'pass' : 'fail';
            html += `<span class="criteria-indicator ${cssClass}">${labels[key]}</span>\n`;
        }
        return html;
    }

    // =============================================
    // Initialization
    // =============================================
    function init() {
        initQuiz();
        initChecklist();
        initCharts();
    }

    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Expose necessary functions globally
    window.showCompany = showCompany;
    window.resetQuiz = resetQuiz;
    window.generateFinancialTable = generateFinancialTable;
    window.generateCriteriaIndicators = generateCriteriaIndicators;

})();
