const questions = [
    {
        question: "What is the concept that deals with complex and interconnected problems?",
        options: shuffle([
            "ComplexWickedProblems",
            "Contect-BasedMetrics",
            "EntityModel",
            "FiniteResources"
        ]),
        answer: "ComplexWickedProblems"
    },
    {
        question: "Which approach focuses on understanding the context and its metrics?",
        options: shuffle([
            "Contect-BasedMetrics",
            "ComplexWickedProblems",
            "EntityModel",
            "FiniteResources"
        ]),
        answer: "Contect-BasedMetrics"
    },
    {
        question: "What model represents a system's components and their relationships?",
        options: shuffle([
            "EntityModel",
            "ComplexWickedProblems",
            "Contect-BasedMetrics",
            "FiniteResources"
        ]),
        answer: "EntityModel"
    },
    {
        question: "What concept deals with the limitations of resources within a system?",
        options: shuffle([
            "FiniteResources",
            "ComplexWickedProblems",
            "Contect-BasedMetrics",
            "EntityModel"
        ]),
        answer: "FiniteResources"
    },
    {
        question: "Which concept focuses on understanding the complete picture and interconnectedness?",
        options: shuffle([
            "IntegralThinking",
            "ComplexWickedProblems",
            "Contect-BasedMetrics",
            "EntityModel"
        ]),
        answer: "IntegralThinking"
    },
    {
        question: "What term refers to the importance of certain aspects in a specific context?",
        options: shuffle([
            "Materiality",
            "ComplexWickedProblems",
            "Contect-BasedMetrics",
            "EntityModel"
        ]),
        answer: "Materiality"
    },
    {
        question: "What approach considers multiple forms of capital in decision-making?",
        options: shuffle([
            "Multi-Capital",
            "ComplexWickedProblems",
            "Contect-BasedMetrics",
            "EntityModel"
        ]),
        answer: "Multi-Capital"
    },
    {
        question: "Which economic model aims to restore, renew, or revitalize resources?",
        options: shuffle([
            "RegenerativeEconomy",
            "ComplexWickedProblems",
            "Contect-BasedMetrics",
            "EntityModel"
        ]),
        answer: "RegenerativeEconomy"
    },
    {
        question: "What approach involves setting greenhouse gas emission reduction targets based on scientific knowledge?",
        options: shuffle([
            "ScienceBasedTargets",
            "ComplexWickedProblems",
            "Contect-BasedMetrics",
            "EntityModel"
        ]),
        answer: "ScienceBasedTargets"
    },
    {
        question: "Which concept emphasizes the need for sustainable practices that meet current needs without compromising future generations?",
        options: shuffle([
            "StrongSustainability",
            "ComplexWickedProblems",
            "Contect-BasedMetrics",
            "EntityModel"
        ]),
        answer: "StrongSustainability"
    }
];

function shuffle(array) {
    let currentIndex = array.length;
    let temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
