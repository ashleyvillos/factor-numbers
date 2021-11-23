const button = document.getElementById('btn-get-factor');

// No idea how this works
// Source code from: https://stackoverflow.com/questions/22130043/trying-to-find-factors-of-a-number-in-js
const factorize = (number) => Array
    .from(Array(number + 1), (_, i) => i)
    .filter(i => number % i === 0)

button.addEventListener('click', () => {
    // get number to be factored out
    const input = document.getElementById('label-input').value;

    if (input.length > 0) {
        const num = parseInt(input)
        const factors = factorize(num)
        let bottomContainer = document.getElementById('bottom-container')

        // remove all previous child nodes
        bottomContainer.querySelectorAll('*').forEach(n => n.remove());

        let factorContainer = document.createElement('div');
        factorContainer.className = "blocks-container"

        let factorLabel = document.createElement('span');
        let factorText = document.createTextNode("Factors: " + factors.join(', '))
        factorLabel.className = "labels"
        factorLabel.appendChild(factorText)

        factorContainer.appendChild(factorLabel)
        bottomContainer.appendChild(factorContainer)

        // insert elements into HTML
        for (const factor of factors) {
            let blockContainer = document.createElement('div');
            blockContainer.className = "blocks-container"

            let label = document.createElement('span');
            let text = document.createTextNode(factor + " x " + (num / factor) + " = " + num)
            label.className = "labels"
            label.appendChild(text)

            let grid = document.createElement('div');
            grid.className = "grid"
           
            for (let i = 0; i < factor; i++) {

                for (let j = 0; j < (num / factor); j++) {
                    let gridItem = document.createElement('div')
                    gridItem.className = "grid-item"
                    grid.appendChild(gridItem)
                    
                    grid.style.gridTemplateColumns = Array(factor).fill('1em').join(' ')
                    grid.style.gridTemplateRows = Array(num / factor).fill('1em').join(' ')
                }
            }

            blockContainer.appendChild(label)
            blockContainer.appendChild(grid)
            bottomContainer.appendChild(blockContainer)
        }
        
        // blockContainer.appendChild(label)
        // blockContainer.appendChild(grid)
        // bottomContainer.appendChild(blockContainer)
    }
})
