const darkMode = ()=>{
    const themeToggleBtns = document.querySelectorAll('#themeToggle') ;
    const theme = localStorage.getItem('theme');
    theme && document.body.classList.add(theme);

    let hundeler = ()=>{
        document.body.classList.toggle('light-mode');
            if (document.body.classList.contains('light-mode')) {
                localStorage.setItem('theme','light-mode')

            } else {
                localStorage.removeItem('theme');
                document.body.removeAttribute('class')
            }
    } 

    themeToggleBtns.forEach(ele =>{
        ele.addEventListener('click',hundeler)
    })
}

export default darkMode