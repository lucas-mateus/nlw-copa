import imgPreview from '../assets/app-nlw-copa-preview.png'
import imgLogo from '../assets/logo.svg'
import Image from 'next/image'
import imgAvatar from '../assets/users-avatar-example.png'
import iconCheck from '../assets/icon-check.svg'
import { api } from '../lib/axios'
import { FormEvent, useState } from 'react'

interface HomeProps {
  poolCount: number,
  guessCount: number,
  usersCount: number
}

export default function Home(props: HomeProps) {

  const [poolTitle, setPoolTitle] = useState("")

  async function createPool(e: FormEvent){
    e.preventDefault()

    try {
      const response = await api.post('/pools',{
        title: poolTitle,
      })

      const { code } = response.data;

      navigator.clipboard.writeText(code)

      alert("Bolão criado com sucesso! O código foi copiado para a área de transferÊncia, compartilhe seu código :)" )

      setPoolTitle("")
      
    } catch (error) {
      console.log(error)
      alert('Falha na criação do Bolão, por favor, tente novamente!')
    }

  }

  console.log(poolTitle)

  return (
    <div className='max-w-[1124px] gap-28 h-screen mx-auto grid grid-cols-2 items-center'>
      <main>
        <Image 
          src={imgLogo}
          alt="Logo da aplicação do Bolão da Copa"
          quality={100}
        />

        <h1 className='mt-14 text-white text-5xl font-bold leading-tight'>
          Crie seu próprio bolão da copa e compartilhe entre amigos!
        </h1>
        
        <div className='mt-10 flex items-center gap-2 font-bold '>
          <Image 
            src={imgAvatar}
            alt="Avatar de usuários participantes"
          />

          <strong className='text-gray-100 text-xl'>
            <span className='text-greenIgnite-500'>+{props.usersCount}</span> pessoas já estão usando
          </strong>
        </div>
        
  
        <form onSubmit={createPool} className='mt-10 flex gap-2' action="" >
          
          <input
            className='flex-1 px-6 py-4 rounded bg-gray-800 border border-gray-600 text-sm text-gray-100'
            type="text" 
            required 
            placeholder='Qual nome do seu bolão?'
            onChange={e => setPoolTitle(e.target.value)}
            value={poolTitle}
          />
          
          <button
            className='bg-yellow-500 px-6 py-4 rounded text-gray-900 uppercase font-bold text-sm hover:bg-greenIgnite-500 hover:text-white'
            type="submit">
              Criar meu bolão
          </button>
        </form>

        <p className='text-gray-300 text-sm leading-relaxed mt-4'>Após criar o seu bolão, você receberá um código único que poderá usar para convidar outras pessoas!</p>
        
        <div className='mt-10 pt-10 border-t border-gray-600 flex items-center justify-between text-gray-100'>
            <div className='flex items-center gap-6'>
              <Image
                src={iconCheck}
                alt="Ícone de check"
              />
              <div className='flex flex-col'>
                <span className='font-bold text-2xl'>+{props.poolCount}</span>
                <span>Bolões criados</span>
              </div>
            </div>

            <div className='w-px bg-gray-600 h-14'/>

            <div  className='flex items-center gap-6'>
              <Image
                  src={iconCheck}
                  alt="Ícone de check"
              />
              <div className='flex flex-col'>
                <span className='font-bold text-2xl'>+{props.guessCount}</span>
                <span>Palpites enviados</span>
              </div>
            </div>
        </div>
       

      </main>

      <Image 
          src={imgPreview} 
          alt="Dois celulares exibindo a prévia da aplicação do Bolão"
      />
    </div>
  )
}


export const getServerSideProps = async () => {

  const [poolCountResponse,guessCountResponse, usersCountResponse ] = await Promise.all([
    api.get('/pools/count'),
    api.get('/guesses/count'),
    api.get('users/count')
  ])

  return {
    props:{
      poolCount: poolCountResponse.data.count,
      guessCount: guessCountResponse.data.count,
      usersCount: usersCountResponse.data.count
    }
  }
}
