import {useForm} from 'react-hook-form'
import './App.css'
import Footer from './components/footer'
import Icon from './assets/img/icon.png'
import Header from './components/header'

function App() {
  const {register, setValue, setFocus } = useForm()

  function checkCep(e) {
    const cep = e.target.value;
    console.log(cep)
    if(cep.length !== 8)
    return

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((response) => response.json())
    .then((data) =>{
      setValue('cidade', data.localidade)
      setValue('estado', data.uf)
      setValue('rua', data.logradouro)
      setValue('bairro', data.bairro)
      if(data.logradouro){
        setFocus('numero')
      }else{
        setFocus('rua')
      }
  
    })

  }
  return (
    <div className="container">
      <Header />

      <main className='main'>
        <form className='form'>
          <div className='icon'>
            <img src={Icon} alt='Icon' width='20%' />
          </div>

            <div className='field'>
              <span>CEP</span>
              <input 
              maxLength={8}
              type='text'
              placeholder='Digite o CEP' 
              name='cep' 
              className='input'
              {...register('cep')}
              onBlur={checkCep}
              />
            </div>
            <div className='field'>
              <span>Logradouro</span>
              <input type='text'
              placeholder='Digite a rua' 
              name='rua' 
              className='input'
              {...register('rua')}
              />
            </div>
            <div className='field'>
              <span>Número</span>
              <input type='text'
              placeholder='Digite o número da residência' 
              name='numero' 
              className='input'
              {...register('numero')}
              />
            </div>
            <div className='field'>
              <span>Bairro</span>
              <input type='text'
              placeholder='Digite o bairro' 
              name='bairro' 
              className='input'
              {...register('bairro')}
              />
            </div>
            <div className='field'>
              <span>Cidade</span>
              <input type='text'
              placeholder='Digite a cidade' 
              name='cidade' 
              className='input'
              {...register('cidade')}
              />
            </div>
            <div className='field'>
              <span>Estado</span>
              <input type='text'
              placeholder='Digite o estado' 
              name='estado' 
              className='input'
              {...register('estado')}
              />
            </div>
        </form>
      </main>
 
      <Footer />
    </div>
  )
}

export default App

