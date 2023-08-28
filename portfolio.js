const skillbutton=document.querySelector('#skillsevent');
const skills=document.querySelector('#skills');
const educationbutton=document.querySelector('#educationevent');
const education=document.querySelector('#education');

skillbutton.addEventListener('click',function(){
    
        education.style.display='none';
    skillbutton.style.borderBottom='3px solid red'
    educationbutton.style.borderBottom='3px solid #1f242d';
   
    skills.style.display='block';
   
    
})
educationbutton.addEventListener('click',function(){
    
        education.style.display='block';
        skillbutton.style.borderBottom='3px solid #1f242d';
        educationbutton.style.borderBottom='3px solid red';
        skills.style.display='none';
    
    
})

// menu click
const menu=document.querySelector('#menu-icon');
const sidebar=document.querySelector('.sidebar');
const cross=document.querySelector('.sidebar i');
// menu
menu.addEventListener('click',()=>{
sidebar.style.display='flex';

})
// cross
cross.addEventListener('click',()=>{
        sidebar.style.display='none';
        // sidebar.style.display='block';
        })

