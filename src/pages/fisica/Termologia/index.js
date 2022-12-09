import './termo.css'

export function Termo(){
    return(
        <main className='div-principal'>
            <header className='title'>
                <h1>
                    Termologia: 
                </h1>
            </header>

            <section className='section-1'>
                <form>

                    <div className='box-number'>
                        <div>
                            <label>Q:</label>
                            <input id='txtn1' type={'number'} placeholder="Escreva aqui..." />
                        </div>
                            
                        <div>
                            <input id='txtn2' type={'number'} placeholder="Escreva aqui..."/>
                        </div>

                        <div>
                            <input id='txtn3' type={'number'} placeholder="Escreva aqui..."/>
                        </div> 

                        <div>
                            <input id='txtn4' type={'number'} placeholder="Escreva aqui..."/>
                        </div>    
                    </div>

                    <div className='result'>
                        <label>Resultado:</label>
                        <input type={'text'} placeholder="Resultado..." id='result'/>
                    </div>

                    <div className='calc'>
                        <label>Cálculo:</label>
                        <div id='calc'>
                            <p id='p-calc'>Cálculo...</p>
                        </div>
                    </div>
                
                </form>

                <div className='button'>
                    <button onClick={calorS}>CalorS</button>
                    <button onClick={capacT}>CapacidadeT</button>
                    <button className='Limpar' onClick={Limpar}>Limpar</button>
                </div>
            </section>
        </main>
    )
}

let txtn1 = document.getElementById('txtn1')
let txtn2 = document.getElementById('txtn2')
let txtn3 = document.getElementById('txtn3')
let txtn4 = document.getElementById('txtn4')
let result = document.getElementById('result')
let calc = document.getElementById('p-calc')

function calorS(){
    if((txtn1.value.length === 0) && (txtn2.value.length === 0) && (txtn3.value.length === 0) && (txtn4.value.length === 0)){
        alert('Por favor, digite um número!')
    }else{
    if((txtn1.value.length !== 0) && (txtn2.value.length !== 0) && (txtn3.value.length !== 0) && (txtn4.value.length !== 0)){
        alert('Deixe ao menos uma das caixas vazias!');
    }
        let input1 = Number(txtn1.value)
        let input2 = Number(txtn2.value)
        let input3 = Number(txtn3.value)
        let input4 = Number(txtn4.value)

        if(txtn1.value.length === 0){
            let multiplicação = input2 * input3 * input4
            result.value = `${multiplicação} cal/gºC `
    
            calc.style.color = 'black';
            calc.innerHTML = `Q = ${input2} x ${input3} x ${input4} <br/>`
            calc.innerHTML += `Q = ${multiplicação} cal/gºC `   
        }

        if(txtn2.value.length === 0){
            let divisão = input1 / (input3 * input4)
            result.value = `${divisão} g`

            let inputs = input3 * input4
            calc.style.color = 'black';
            calc.innerHTML = `${input1} = ${input3} x ${input4} <br/>`
            calc.innerHTML += `m = ${input1} / ${inputs} <br/>`  
            calc.innerHTML += `m = ${divisão} g` 
        }

        if(txtn3.value.length === 0){
            let divisão = input1 / (input2 * input4)
            result.value = `${divisão} g.ºC`

            let inputs = input2 * input4
            calc.style.color = 'black';
            calc.innerHTML = `${input1} = ${input2} x ${input4} <br/>`
            calc.innerHTML += `c = ${input1} / ${inputs} <br/>`  
            calc.innerHTML += `c = ${divisão} g.ºC` 
        }

        if(txtn4.value.length === 0){
            let divisão = input1 / (input2 * input3)
            result.value = `${divisão} ºC`

            let inputs = input2 * input3
            calc.style.color = 'black';
            calc.innerHTML = `${input1} = ${input2} x ${input3} <br/>`
            calc.innerHTML += `Δθ = ${input1} / ${inputs} <br/>`  
            calc.innerHTML += `Δθ = ${divisão} ºC` 
        }

        txtn1.value = '';
        txtn2.value = '';
        txtn3.value = '';
        txtn4.value = '';
    }
}

function capacT(){
    let input1 = Number(txtn2.value)
    let input2 = Number(txtn3.value)
    let input3 = Number(txtn4.value)

        if(txtn2.value.length === 0){
            let divisão = input2 / input3
            result.value = `${divisão} Cal/ºC `

            calc.style.color = 'black';
            calc.innerHTML = `C = ${input2} / ${input3} <br/>`
            calc.innerHTML += `C = ${divisão} Cal/ºC`
        }
    
        if(txtn3.value.length === 0){
            let divisão = input1 * input3
            result.value = `${divisão} Cal`

            calc.style.color = 'black';
            calc.innerHTML = ` = ${input1} x ${input3} <br/>`
            calc.innerHTML += `Q = ${divisão} Cal`
        }
    
        if(txtn4.value.length === 0){
            let multiplicação = input2 / input1
            result.value = `${multiplicação} ºC`

            calc.style.color = 'black';
            calc.innerHTML = `Δθ = ${input2} / ${input1} <br/>`
            calc.innerHTML += `Δθ = ${multiplicação} ºC`
        }
    
        txtn2.value = '';
        txtn3.value = '';
        txtn4.value = '';
    }

    function Limpar(){
        txtn1.value = '';
        txtn2.value = '';
        txtn3.value = '';
        txtn4.value = '';
        result.value = '';
        calc.style.color = '#7a7171'
        calc.innerHTML = 'Cálculo...';
    }
    