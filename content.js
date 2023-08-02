window.addEventListener('DOMContentLoaded', () => {
    let chosenCategory = "";

    document.getElementById('chosenCategory').addEventListener('change', () => {
        chosenCategory = document.getElementById('chosenCategory').value;
    });

    document.getElementById("refresh").addEventListener('click', () => {
        const result = document.getElementById("result");

        fetch(`https://api.api-ninjas.com/v1/quotes?category=${chosenCategory}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-Api-Key': 'eY2xTnDHPEinZ/veCgDAeA==5Q2KCOZs3dYIKMm8'
            }
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data);
                let responseData = data[0]
                result.innerHTML = `
                    <h3>Quote: ${responseData.quote}</h3>
                    <h4>Quote by: ${responseData.author}, about ${responseData.category}.</h2>
                `;
            });
    });
});


