export const sections = [
    "Aluno",
    "Comentario",
    "Outros trabalhos",
    "Rodape"
]

export const navigate  = (to) => {
    to = to.replace("#", "")
    const element = document.getElementById(to);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
    else{
        console.log('error')
        window.location.href = to
    }
}