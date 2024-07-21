document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form'); 
    const table = document.getElementById('table'); 

    form.addEventListener('submit', function(event) {
        event.preventDefault();

       
        const formData = new FormData(form);
        const formProps = Object.fromEntries(formData);

    
        const newRow = table.insertRow();

        
        Object.values(formProps).forEach(value => {
            const newCell = newRow.insertCell();
            newCell.textContent = value;
        });

    });
});

