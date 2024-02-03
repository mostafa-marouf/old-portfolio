const mobileNav =() =>{
    
    const headerBtn = document.querySelector('.header__bars');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav__link')

    // state
    let IsMobileNavOpen = false;
    
    headerBtn.addEventListener('click',()=>{
        IsMobileNavOpen = !IsMobileNavOpen;
        if (IsMobileNavOpen) {
            mobileNav.style.display = 'flex';
            document.body.style.overflowY ='hidden';
            
        } else {
            mobileNav.style.display = 'none';
            document.body.style.overflowY ='auto';
        }
    })
    mobileNavLinks.forEach(ele=>{
        ele.addEventListener('click',()=>{
            IsMobileNavOpen = false;
            mobileNav.style.display = 'none';
            document.body.style.overflowY ='auto';
        })
    })
}
export default mobileNav