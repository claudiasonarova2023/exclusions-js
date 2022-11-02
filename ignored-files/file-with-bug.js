const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    
    if((height === '') || (height < 0) || (isNaN(height))){
Remove this "===" check; it will always be false. Did you mean to use "=="?Why is this an issue?
2 days ago
L10

Claudia Sonarova
Claudia Sonarova
5min effort
No tags+
        //NaN !== NaN
        results.innerHTML = "Please provide a valid height";
        
    }