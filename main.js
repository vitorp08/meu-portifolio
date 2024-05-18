const img = document.querySelector('.img')
const titulo = document.querySelector('.titulo')
const subtitulo = document.querySelector('.subtitulo')
const bio = document.querySelector('.bio')
const qtdSeguidores = document.querySelector('.qtd-seguidores')
const qtdSeguindo = document.querySelector('.qtd-seguindo')
const qtdRepositorios = document.querySelector('.qtd-repositorios')



const url = 'https://api.github.com/users/vitorp08'
const getData = async() =>{
    const response = await fetch(url)
    const data = await response.json()


    img.setAttribute('src', data.avatar_url)
    titulo.innerHTML = data.login
    subtitulo.innerHTML = data.name
    bio.innerHTML = data.bio
    qtdSeguidores.innerHTML = data.followers
    qtdRepositorios.innerHTML = data.public_repos
    qtdSeguindo.innerHTML = data.following
}


getData()


