import './termo.css'
import { IoMdArrowBack } from 'react-icons/io'
import { Link } from '../../components/link'
import { toast } from 'react-toastify';

export function Termo(){

    let txtn1 = document.getElementById('txtn1')
    let txtn2 = document.getElementById('txtn2')
    let txtn3 = document.getElementById('txtn3')
    let txtn4 = document.getElementById('txtn4')
    let result = document.getElementById('p-result')
    let calc = document.getElementById('p-calc')

    function calorS(){

        if((txtn1.value.length === 0) && (txtn2.value.length === 0) && (txtn3.value.length === 0) && (txtn4.value.length === 0)){
            toast.warning('Por favor, digite um número!')
        }else{
            
        if((txtn1.value.length !== 0) && (txtn2.value.length !== 0) && (txtn3.value.length !== 0) && (txtn4.value.length !== 0)){
            toast.warning("     !")
        }
            let input1 = Number(txtn1.value)
            let input2 = Number(txtn2.value)
            let input3 = Number(txtn3.value)
            let input4 = Number(txtn4.value)
    
            if(txtn1.value.length === 0){
                let multiplicação = input2 * input3 * input4
                result.style.color = 'black'
                result.innerHTML = `${multiplicação} cal/gºC `
        
                calc.style.color = 'black';
                calc.innerHTML = `Q = ${input2} . ${input3} . ${input4} <br/>`
                calc.innerHTML += `Q = ${multiplicação} cal/gºC `   
            }
    
            if(txtn2.value.length === 0){
                let divisão = input1 / (input3 * input4)
                result.style.color = 'black'
                result.innerHTML = `${divisão} g`
    
                let inputs = input3 * input4
                calc.style.color = 'black';
                calc.innerHTML = `${input1} = ${input3} . ${input4} <br/>`
                calc.innerHTML += `m = ${input1} / ${inputs} <br/>`  
                calc.innerHTML += `m = ${divisão} g` 
            }
    
            if(txtn3.value.length === 0){
                let divisão = input1 / (input2 * input4)
                result.style.color = 'black'
                result.innerHTML = `${divisão} g.ºC`
    
                let inputs = input2 * input4
                calc.style.color = 'black';
                calc.innerHTML = `${input1} = ${input2} . ${input4} <br/>`
                calc.innerHTML += `c = ${input1} / ${inputs} <br/>`  
                calc.innerHTML += `c = ${divisão} g.ºC` 
            }
    
            if(txtn4.value.length === 0){
                let divisão = input1 / (input2 * input3)
                result.style.color = 'black'
                result.innerHTML = `${divisão} ºC`
    
                let inputs = input2 * input3
                calc.style.color = 'black';
                calc.innerHTML = `${input1} = ${input2} . ${input3} <br/>`
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
    
        if((txtn2.value.length === 0) && (txtn3.value.length === 0) && (txtn4.value.length === 0)){
            toast.warning("Por favor, adicione um valor!")
        }else{
          if((txtn2.value.length !== 0) && (txtn3.value.length !== 0) && (txtn4.value.length !== 0)){
            toast.warning("Adicione apenas dois valores!")
          }
            if(txtn2.value.length === 0){
                let divisão = input2 / input3
                result.style.color = 'black'
                result.innerHTML = `${divisão} Cal/ºC `
    
                calc.style.color = 'black';
                calc.innerHTML = `C = ${input2} / ${input3} <br/>`
                calc.innerHTML += `C = ${divisão} Cal/ºC`
            }
        
            if(txtn3.value.length === 0){
                let divisão = input1 * input3
                result.style.color = 'black'
                result.innerHTML = `${divisão} Cal`
    
                calc.style.color = 'black';
                calc.innerHTML = `Q = ${input1} . ${input3} <br/>`
                calc.innerHTML += `Q = ${divisão} Cal`
            }
        
            if(txtn4.value.length === 0){
                let multiplicação = input2 / input1
                result.style.color = 'black'
                result.innerHTML = `${multiplicação} ºC`
    
                calc.style.color = 'black';
                calc.innerHTML = `Δθ = ${input2} / ${input1} <br/>`
                calc.innerHTML += `Δθ = ${multiplicação} ºC`
            }
        
            txtn2.value = '';
            txtn3.value = '';
            txtn4.value = '';
        }
    }


        function fluxoC(){
            let input1 = Number(txtn2.value)
            let input2 = Number(txtn3.value)
            let input3 = Number(txtn4.value)

            if((txtn2.value.length === 0) && (txtn3.value.length === 0) && (txtn4.value.length === 0)){
                toast.warning("Por favor, adicione um valor!")
            }else{
              if((txtn2.value.length !== 0) && (txtn3.value.length !== 0) && (txtn4.value.length !== 0)){
                toast.warning("Adicione apenas dois valores!")
              }
                if(txtn2.value.length === 0){
                    let divisão = input2 / input3
                    result.style.color = 'black'
                    result.innerHTML = `${divisão} cal/s `
        
                    calc.style.color = 'black';
                    calc.innerHTML = `Φ = ${input2} / ${input3} <br/>`
                    calc.innerHTML += `Φ = ${divisão} cal/s`
                }
            
                if(txtn3.value.length === 0){
                    let divisão = input1 * input3
                    result.style.color = 'black'
                    result.innerHTML = `${divisão} cal`
        
                    calc.style.color = 'black';
                    calc.innerHTML = `Q = ${input1} . ${input3} <br/>`
                    calc.innerHTML += `Q = ${divisão} cal`
                }
            
                if(txtn4.value.length === 0){
                    let multiplicação = input2 / input1
                    result.style.color = 'black'
                    result.innerHTML = `${multiplicação} s`
        
                    calc.style.color = 'black';
                    calc.innerHTML = `ΔT = ${input2} / ${input1} <br/>`
                    calc.innerHTML += `ΔT = ${multiplicação} s`
                }
            
                txtn2.value = '';
                txtn3.value = '';
                txtn4.value = '';
         }
     }

     function calorL(){
            let input1 = Number(txtn2.value)
            let input2 = Number(txtn3.value)
            let input3 = Number(txtn4.value)

            if((txtn2.value.length === 0) && (txtn3.value.length === 0) && (txtn4.value.length === 0)){
                toast.warning("Por favor, adicione um valor!")
            }else{
              if((txtn2.value.length !== 0) && (txtn3.value.length !== 0) && (txtn4.value.length !== 0)){
                toast.warning("Adicione apenas dois valores!")
              }
                if(txtn2.value.length === 0){
                    let divisão = input2 * input3
                    result.style.color = 'black'
                    result.innerHTML = `${divisão} cal `
        
                    calc.style.color = 'black';
                    calc.innerHTML = `Q = ${input2} * ${input3} <br/>`
                    calc.innerHTML += `Q = ${divisão} cal`
                }
            
                if(txtn3.value.length === 0){
                    let divisão = input1 / input3
                    result.style.color = 'black'
                    result.innerHTML = `${divisão} cal`
        
                    calc.style.color = 'black';
                    calc.innerHTML = `m = ${input1} / ${input3} <br/>`
                    calc.innerHTML += `m = ${divisão} g/Kg`
                }
            
                if(txtn4.value.length === 0){
                    let multiplicação = input1 / input2
                    result.style.color = 'black'
                    result.innerHTML = `${multiplicação} cal/g`
        
                    calc.style.color = 'black';
                    calc.innerHTML = `L = ${input1} / ${input2} <br/>`
                    calc.innerHTML += `L = ${multiplicação} cal/g`
                }
            
                txtn2.value = '';
                txtn3.value = '';
                txtn4.value = '';
         }
     }
    
        function Limpar(){
            txtn1.value = '';
            txtn2.value = '';
            txtn3.value = '';
            txtn4.value = '';
            result.style.color = '#7a7171'
            result.innerHTML = 'Resultado...';
            calc.style.color = '#7a7171'
            calc.innerHTML = 'Cálculo...';
            toast.success("Você limpou suas caixas!")
        }

    return(
        <div className='termo-principal'>
            <header className='title'>
                <h1>
                    Termologia: 
                </h1>

                <Link url={'/fisica'}>
                    <div className="back">
                        <IoMdArrowBack className="back-icon"/>
                    </div>
                </Link>
            </header>
            
            <main className='section-1'>
                <section className='inputs'>

                    <div className='box-number'>
                        <section>
                            <label>Q:</label>
                            <input 
                            id='txtn1' 
                            type={'number'} 
                            placeholder="Para calor sensível..." />
                        </section>
                            
                        <section>
                            <input
                              id='txtn2' 
                              type={'number'} 
                              placeholder="Escreva aqui..."  />
                        </section>

                        <section>
                            <input 
                             id='txtn3' 
                             type={'number'} 
                             placeholder="Escreva aqui..." />
                        </section> 

                        <section>
                            <input 
                           id='txtn4' 
                           type={'number'} 
                           placeholder="Escreva aqui..." />
                        </section>    
                    </div>

                    <div className='result'>
                        <label>Resultado:</label>
                        <div id='result'>
                            <p id='p-result'>Resultado...</p>
                        </div>
                    </div>

                    <div className='calc'>
                        <label>Cálculo:</label>
                        <div id='calc'>
                            <p id='p-calc'>Cálculo...</p>
                        </div>
                    </div>

                    
                <div className='button'>
                    <button onClick={calorS}>CalorS</button>
                    <button onClick={capacT}>CapacidadeT</button>
                    <button onClick={fluxoC}>FluxoC</button>
                    <button onClick={calorL}>CalorL</button>
                    <button className='Limpar' onClick={Limpar}>Limpar</button>
                </div>
                
                </section>
            </main>
        </div>
    )
}
