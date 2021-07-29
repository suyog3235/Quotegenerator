
document.getElementById('button').addEventListener('click',()=>{

            let random = Math.ceil(Math.random()*1643);

            let url = "https://type.fit/api/quotes"
            
            fetch(url)
            .then(res => res.json())
            .then(data =>{
                document.getElementById('quote').textContent = data[random]['text'];
                if(data[random]['author'] == null)
                {
                    document.getElementById('author').textContent = `- Unknown`;
                }
                else
                {
                    document.getElementById('author').textContent = `- ${data[random]['author']}`;
                }
            })
            .catch(err =>{
                console.log(`Error: ${err}`);
            })


        });