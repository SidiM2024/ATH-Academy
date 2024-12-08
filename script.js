document.getElementById('course').addEventListener('change', function() {
    var course = this.value;
    var languageOptions = document.getElementById('languages-options');
    
    if (course === 'languages') {
        languageOptions.classList.remove('hidden');
    } else {
        languageOptions.classList.add('hidden');
    }
});
