document.addEventListener('DOMContentLoaded', () => {
    const enhancePrompt = (text) => {
        return text.split(' ').map(word => {
            const synonyms = {
                "help": "assist",
                "make": "create",
                "show": "demonstrate",
                "explain": "elaborate on",
                "add": "implement",
                "fix": "resolve",
                "use": "utilize",
                "need": "require",
                "want": "desire",
                "how": "what is the process to"
            };
            return synonyms[word.toLowerCase()] || word;
        }).join(' ');
    };

    const handleEnhancement = () => {
        const input = prompt('Enter your prompt to enhance:');
        if (input) {
            const enhanced = enhancePrompt(input);
            navigator.clipboard.writeText(enhanced);
            alert('Enhanced prompt copied to clipboard:\n\n' + enhanced);
        }
    };

    // Add enhance button to hero section
    const heroSection = document.querySelector('.hero');
    const enhanceBtn = document.createElement('button');
    enhanceBtn.id = 'enhance-prompt-btn';
    enhanceBtn.className = 'enhance-btn';
    enhanceBtn.textContent = 'Enhance Prompt';
    enhanceBtn.addEventListener('click', handleEnhancement);
    heroSection.appendChild(enhanceBtn);

    // Add keyboard shortcut (Ctrl+E)
    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.key === 'e') {
            e.preventDefault();
            handleEnhancement();
        }
    });
});