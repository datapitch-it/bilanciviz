/* =============================================
   VIZ FOR BIZ - Data Module
   ============================================= */

const AppData = {
    // Company data with financial figures and criteria evaluation
    companies: {
        enel: {
            name: 'ENEL',
            page: 159,
            currency: 'EUR',
            unit: 'milioni',
            criteria: {
                completezza: 'pass',
                griglia: 'pass',
                gerarchia: 'fail',
                valori: 'fail',
                testi: 'pass'
            },
            strengths: [
                'Variazioni in valore assoluto e percentuale',
                'Cifre in milioni di euro',
                'Testi su piu righe'
            ],
            weaknesses: [
                'Dati 2024 su sfondo colorato = minor contrasto',
                'Costi non indicati come negativi',
                'Struttura molto ridotta'
            ],
            financials: [
                { voce: 'Ricavi', y2024: '77 173', y2023: '98 163', delta: '-21%', deltaClass: 'delta-neg' },
                { voce: 'EBITDA', y2024: '22 801', y2023: '21 969', delta: '+4%', deltaClass: 'delta-pos', class: 'subtotale' },
                { voce: 'EBIT', y2024: '14 761', y2023: '14 042', delta: '+5%', deltaClass: 'delta-pos', class: 'subtotale' },
                { voce: 'Utile netto', y2024: '8 454', y2023: '7 679', delta: '+10%', deltaClass: 'delta-pos', class: 'totale' }
            ]
        },
        eni: {
            name: 'ENI',
            page: 429,
            currency: 'EUR',
            unit: 'milioni',
            criteria: {
                completezza: 'fail',
                griglia: 'pass',
                gerarchia: 'pass',
                valori: 'fail',
                testi: 'fail'
            },
            strengths: [
                'Note ben disposte a destra',
                'Subtotali in maiuscolo con colore diverso'
            ],
            weaknesses: [
                'Manca variazione anno su anno',
                'Valori al singolo euro (illeggibili)',
                'Font proprietario molto sottile',
                'Parentesi disallineano i numeri'
            ],
            financials: [
                { voce: 'Ricavi gestione', y2024: '35 026', y2023: '45 203' },
                { voce: 'Costi operativi', y2024: '– 26 948', y2023: '– 36 891' },
                { voce: 'EBIT', y2024: '6 336', y2023: '8 312', class: 'subtotale' },
                { voce: 'Utile netto', y2024: '4 892', y2023: '6 012', class: 'totale' }
            ]
        },
        ferrari: {
            name: 'FERRARI',
            page: 94,
            currency: 'USD',
            unit: 'milioni',
            criteria: {
                completezza: 'fail',
                griglia: 'fail',
                gerarchia: 'pass',
                valori: 'pass',
                testi: 'fail'
            },
            strengths: [
                '3 esercizi confrontati (prassi USA)',
                'Sfondo nero per 2024 = massimo contrasto',
                'Font mono-spaced per valori'
            ],
            weaknesses: [
                'Manca variazione anno su anno',
                'Griglia troppo leggera (solo 2 linee)',
                'Font particolare, non ottimale'
            ],
            financials: [
                { voce: 'Net revenues', y2024: '6 677', y2023: '5 970', delta: '+12%', deltaClass: 'delta-pos' },
                { voce: 'Cost of sales', y2024: '3 330', y2023: '2 996', delta: '+11%' },
                { voce: 'Operating profit', y2024: '1 888', y2023: '1 617', delta: '+17%', deltaClass: 'delta-pos', class: 'subtotale' },
                { voce: 'Net profit', y2024: '1 526', y2023: '1 257', delta: '+21%', deltaClass: 'delta-pos', class: 'totale' }
            ]
        },
        generali: {
            name: 'GENERALI',
            page: 222,
            currency: 'EUR',
            unit: 'milioni',
            criteria: {
                completezza: 'fail',
                griglia: 'fail',
                gerarchia: 'fail',
                valori: 'pass',
                testi: 'pass'
            },
            strengths: [
                'Note ben disposte a sinistra',
                '3 livelli gerarchici con elenchi puntati'
            ],
            weaknesses: [
                'Mancano colonne di confronto',
                'Griglia estremamente sottile',
                'Anno recente con contrasto minore (sfondo grigio)'
            ],
            financials: [
                { voce: 'Premi lordi', y2024: '95 200', y2023: '89 400' },
                { voce: 'Risultato operativo', y2024: '7 200', y2023: '6 900', class: 'subtotale' },
                { voce: 'Utile netto', y2024: '3 800', y2023: '3 500', class: 'totale' }
            ]
        },
        intesa: {
            name: 'INTESA SAN PAOLO',
            page: 424,
            currency: 'EUR',
            unit: 'milioni',
            criteria: {
                completezza: 'pass',
                griglia: 'fail',
                gerarchia: 'pass',
                valori: 'fail',
                testi: 'fail'
            },
            strengths: [
                'Variazione in termini assoluti e percentuali',
                'Gerarchia con voci minori in corsivo',
                'Negativi con segno meno'
            ],
            weaknesses: [
                'Unico caso senza griglia!',
                'Carattere non mono-spaced',
                'Colonna voci troppo larga'
            ],
            financials: [
                { voce: 'Margine di interesse', y2024: '18 090', y2023: '16 936', delta: '+6,8%', deltaClass: 'delta-pos' },
                { voce: 'Commissioni nette', y2024: '8 611', y2023: '7 801', delta: '+10,4%', deltaClass: 'delta-pos' },
                { voce: 'Margine intermediazione', y2024: '30 693', y2023: '27 751', delta: '+10,6%', deltaClass: 'delta-pos', class: 'subtotale' },
                { voce: 'Risultato gestione', y2024: '29 526', y2023: '26 306', delta: '+12,2%', deltaClass: 'delta-pos', class: 'totale' }
            ]
        },
        snam: {
            name: 'SNAM',
            page: 53,
            currency: 'EUR',
            unit: 'milioni',
            criteria: {
                completezza: 'pass',
                griglia: 'fail',
                gerarchia: 'fail',
                valori: 'fail',
                testi: 'pass'
            },
            strengths: [
                'Variazioni in valori assoluti e percentuali',
                'Griglia consistente colore azzurro',
                'Font mono-spaced'
            ],
            weaknesses: [
                'Griglia con righe stesso spessore',
                '3 livelli non chiari',
                'Parentesi vanificano allineamento'
            ],
            financials: [
                { voce: 'Ricavi totali', y2024: '3 280', y2023: '3 150' },
                { voce: 'EBITDA', y2024: '1 760', y2023: '1 680', class: 'subtotale' },
                { voce: 'Utile netto', y2024: '920', y2023: '880', class: 'totale' }
            ]
        },
        stellantis: {
            name: 'STELLANTIS',
            page: 282,
            currency: 'EUR',
            unit: 'miliardi',
            criteria: {
                completezza: 'fail',
                griglia: 'pass',
                gerarchia: 'pass',
                valori: 'fail',
                testi: 'fail'
            },
            strengths: [
                '3 anni confrontati',
                'Righe con sfondo alternato',
                'Righe per i totali'
            ],
            weaknesses: [
                'Manca variazione anno su anno',
                'Note occupano troppo spazio',
                'Caratteri graziati non adatti'
            ],
            financials: [
                { voce: 'Net revenues', y2024: '156,9', y2023: '189,5' },
                { voce: 'Adjusted AOI', y2024: '8,6', y2023: '24,3', class: 'subtotale' },
                { voce: 'Net profit', y2024: '– 1,8', y2023: '18,6', class: 'totale' }
            ]
        },
        stm: {
            name: 'STMicroelectronics',
            page: 267,
            currency: 'USD',
            unit: 'milioni',
            criteria: {
                completezza: 'fail',
                griglia: 'pass',
                gerarchia: 'fail',
                valori: 'pass',
                testi: 'fail'
            },
            strengths: [
                'Sfondo a righe alternate',
                'Font mono-spaced, allineamento corretto',
                'Subtotali evidenziati'
            ],
            weaknesses: [
                'Manca variazione anno su anno',
                'Solo 2 livelli gerarchici',
                'Colonna voci troppo larga'
            ],
            financials: [
                { voce: 'Net revenues', y2024: '13 269', y2023: '17 286', delta: '-23%', deltaClass: 'delta-neg' },
                { voce: 'Gross profit', y2024: '4 923', y2023: '7 931', delta: '-38%', deltaClass: 'delta-neg' },
                { voce: 'Operating income', y2024: '1 688', y2023: '4 610', delta: '-63%', deltaClass: 'delta-neg', class: 'subtotale' },
                { voce: 'Net income', y2024: '1 995', y2023: '3 996', delta: '-50%', deltaClass: 'delta-neg', class: 'totale' }
            ]
        },
        terna: {
            name: 'TERNA',
            page: 404,
            currency: 'EUR',
            unit: 'milioni',
            criteria: {
                completezza: 'fail',
                griglia: 'fail',
                gerarchia: 'fail',
                valori: 'fail',
                testi: 'fail'
            },
            strengths: [
                'Buona disposizione note',
                'Ultimo anno evidenziato con riquadro'
            ],
            weaknesses: [
                'Manca confronto anno su anno',
                'Troppi livelli gerarchici (confusione)',
                'Colonna voci troppo larga',
                'Parentesi disallineano'
            ],
            financials: [
                { voce: 'Ricavi', y2024: '3 520', y2023: '3 280' },
                { voce: 'EBITDA', y2024: '2 380', y2023: '2 210', class: 'subtotale' },
                { voce: 'Utile netto', y2024: '1 058', y2023: '980', class: 'totale' }
            ]
        },
        unicredit: {
            name: 'UNICREDIT',
            page: 357,
            currency: 'EUR',
            unit: 'milioni',
            criteria: {
                completezza: 'fail',
                griglia: 'pass',
                gerarchia: 'pass',
                valori: 'fail',
                testi: 'fail'
            },
            strengths: [
                'Identificativo numerico per note',
                'Griglia uniforme e ben visibile',
                'Box rosso per dati recenti'
            ],
            weaknesses: [
                'Manca variazione anno su anno',
                'Griglia uguale spessore',
                'Parentesi non allineate',
                'Colonna descrizioni molto larga'
            ],
            financials: [
                { voce: 'Margine di interesse', y2024: '14 800', y2023: '13 900' },
                { voce: 'Commissioni nette', y2024: '7 200', y2023: '6 800' },
                { voce: 'Margine intermediazione', y2024: '24 200', y2023: '22 500', class: 'subtotale' },
                { voce: 'Utile netto', y2024: '9 300', y2023: '8 600', class: 'totale' }
            ]
        }
    },

    // Quiz questions
    quizQuestions: [
        {
            id: 1,
            question: 'Quale problema principale ha questa tabella?',
            correct: 'a',
            options: {
                a: 'Manca la griglia (linee di separazione)',
                b: 'I valori sono troppo grandi',
                c: 'Il font e sbagliato',
                d: 'I colori sono troppo accesi'
            },
            feedbackCorrect: 'Corretto! La tabella non ha alcuna linea di separazione, rendendo difficile seguire le righe.',
            feedbackIncorrect: 'Non esatto. Il problema principale e l\'assenza di griglia (linee orizzontali) che aiutino a seguire le righe.'
        },
        {
            id: 2,
            question: 'Perche questi numeri sono difficili da confrontare?',
            correct: 'b',
            options: {
                a: 'Sono scritti in corsivo',
                b: 'Sono troppo precisi (al singolo euro)',
                c: 'Usano il punto come separatore',
                d: 'Non sono allineati a destra'
            },
            feedbackCorrect: 'Esatto! Valori al singolo euro sono illeggibili. Meglio esprimerli in milioni.',
            feedbackIncorrect: 'Il problema principale e la precisione eccessiva: 12 cifre per ogni numero sono impossibili da confrontare mentalmente.'
        },
        {
            id: 3,
            question: 'Cosa c\'e di sbagliato nel contrasto di questa intestazione?',
            correct: 'c',
            options: {
                a: 'I colori sono troppo vivaci',
                b: 'Manca il bordo',
                c: 'L\'anno recente (2024) e MENO visibile di quello passato',
                d: 'Il font e troppo piccolo'
            },
            feedbackCorrect: 'Perfetto! Il 2024 su sfondo arancione con testo bianco ha meno contrasto del 2023 su sfondo bianco.',
            feedbackIncorrect: 'Il problema e che l\'anno piu importante (2024) e su sfondo colorato con testo chiaro, rendendolo meno leggibile dell\'anno passato.'
        },
        {
            id: 4,
            question: 'Come miglioreresti l\'allineamento di questi numeri?',
            correct: 'a',
            options: {
                a: 'Usare il segno "–" invece delle parentesi',
                b: 'Aumentare la dimensione del font',
                c: 'Allineare a sinistra',
                d: 'Usare un font proporzionale'
            },
            feedbackCorrect: 'Giusto! Il segno "–" mantiene l\'allineamento, le parentesi lo rompono.',
            feedbackIncorrect: 'La soluzione e usare il segno meno "–" invece delle parentesi per i numeri negativi, cosi da mantenere l\'allineamento verticale.'
        },
        {
            id: 5,
            question: 'Quanti livelli gerarchici diversi vedi in questa lista?',
            correct: 'd',
            options: {
                a: '2 livelli',
                b: '3 livelli',
                c: '4 livelli',
                d: '5 livelli (troppi!)'
            },
            feedbackCorrect: 'Esatto! Ci sono 5 stili diversi: corsivo grigio, normale, grassetto, grassetto blu, maiuscolo con sfondo. Troppi!',
            feedbackIncorrect: 'Contando attentamente: (1) corsivo grigio, (2) normale, (3) grassetto, (4) grassetto blu, (5) maiuscolo con sfondo = 5 livelli, che sono troppi per una chiara gerarchia.'
        }
    ],

    // Chart configurations
    charts: {
        problemiPerCriterio: {
            labels: ['Completezza', 'Griglia', 'Gerarchia', 'Valori', 'Testi'],
            data: [6, 5, 5, 5, 5],
            colors: [
                'rgba(25, 118, 210, 0.7)',
                'rgba(123, 31, 162, 0.7)',
                'rgba(56, 142, 60, 0.7)',
                'rgba(245, 124, 0, 0.7)',
                'rgba(194, 24, 91, 0.7)'
            ]
        },
        aziendeConfronti: {
            labels: ['ENEL', 'ENI', 'Ferrari', 'Generali', 'Intesa', 'Snam', 'Stellantis', 'STM', 'Terna', 'Unicredit'],
            criteriOK: [3, 2, 2, 2, 2, 2, 2, 2, 0, 2],
            criteriKO: [2, 3, 3, 3, 3, 3, 3, 3, 5, 3]
        }
    },

    // Checklist items
    checklist: {
        completezza: [
            { id: 'c1', label: 'Anno precedente presente' },
            { id: 'c2', label: 'Variazione assoluta (Delta)' },
            { id: 'c3', label: 'Variazione percentuale (%)' },
            { id: 'c4', label: 'Colonna note per riferimenti' }
        ],
        griglia: [
            { id: 'c5', label: 'Linee orizzontali presenti' },
            { id: 'c6', label: 'Subtotali con linea piu spessa' },
            { id: 'c7', label: 'Totale finale evidenziato' }
        ],
        gerarchia: [
            { id: 'c8', label: 'Massimo 3 livelli gerarchici' },
            { id: 'c9', label: 'Dettagli in italico/indentati' },
            { id: 'c10', label: 'Subtotali in grassetto' },
            { id: 'c11', label: 'Anno recente piu visibile' }
        ],
        valori: [
            { id: 'c12', label: 'Font mono-spaced per numeri' },
            { id: 'c13', label: 'Valori in migliaia/milioni (non unita)' },
            { id: 'c14', label: 'Negativi con segno "–" (non parentesi)' },
            { id: 'c15', label: 'Spazio come separatore migliaia' }
        ],
        testi: [
            { id: 'c16', label: 'Font leggibile per testi (sans-serif)' },
            { id: 'c17', label: 'Colonna voci non troppo larga' },
            { id: 'c18', label: 'Testi vicini ai valori' },
            { id: 'c19', label: 'Operazioni esplicitate (A-B, C-D)' }
        ]
    },

    // Criteria with issues mapping
    criteriaIssues: {
        completezza: {
            companies: ['ENI', 'Ferrari', 'Generali', 'STM', 'Terna', 'Unicredit'],
            principle: 'Una tabella completa include l\'anno precedente, le variazioni in valore assoluto e percentuale, e una colonna note per riferimenti.'
        },
        griglia: {
            companies: ['Intesa (assente!)', 'Ferrari', 'Generali', 'Terna', 'Snam'],
            principle: 'Linee orizzontali coerenti aiutano a seguire le righe. I subtotali devono avere linee piu spesse per evidenziare la gerarchia.'
        },
        gerarchia: {
            companies: ['Terna (5+ livelli)', 'ENEL (contrasto)', 'Generali (contrasto)'],
            principle: 'Usare 2-3 livelli chiari: dettaglio (italico/indentato) → voce normale → subtotale (grassetto). L\'anno recente deve essere piu visibile.'
        },
        valori: {
            companies: ['ENI', 'Snam', 'Terna', 'Unicredit', 'Stellantis'],
            principle: 'Font mono-spaced per allineamento verticale, valori in migliaia/milioni, negativi con segno "–" (non parentesi), spazio come separatore migliaia (ISO 80000-1).'
        },
        testi: {
            companies: ['ENI', 'Intesa', 'Terna', 'STM', 'Unicredit'],
            fontIssues: ['ENI (sottile)', 'Ferrari (particolare)', 'Stellantis (graziato)'],
            principle: 'Font leggibile sans-serif per i testi (no mono-spaced, no graziati), colonna voci non troppo larga, testi vicini ai valori.'
        }
    }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AppData;
}
