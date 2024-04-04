let hentSitat = document.getElementById('hentSitat');

            let sitater =
            [
                'Sitat',
                'Sitat 2',
                'Dette er sitat',
                'Det er mange sitater som kunne ha vært her men er ikke',
                'Sitat 3'
            ];
            
            let output = document.getElementById('output');
            
            hentSitat.addEventListener('click', function(){
                var tilfeldigSitat = sitater[Math.floor(Math.random() * sitater.length)]
                output.innerHTML = tilfeldigSitat;
            })