 // Select all the links in the sidebar
 const links = document.querySelectorAll('.sidebar_link');
      logoLogin = document.querySelector('.login_logo');
let section = document.querySelector('section');
let section2 = document.querySelector('section').innerHTML;
      console.log(section);


  






/*  logoLogin.addEventListener('click', function() {
  if (iframe) {
    section.innerHTML = section2;
    iframe = null;
  } else {
  
    /*section.innerHTML = section2;
  }
}); */

// Add a click event listener to each link
links.forEach(link => {
  link.addEventListener('click', function(event) {
    
    // Prevent the default action of the link
    event.preventDefault();

    // Construct the path to the HTML file
    const path = `Projets html/${this.id}.html`;


    // Create an iframe
    let iframe = document.createElement('iframe');

    // Set the src of the iframe to the path
    iframe.src = path;
 
    
    // Select the section element
    section = document.querySelector('section');

    // Clear the section
    section.innerHTML = '';

    // Append the iframe to the section
    section.appendChild(iframe);

  
  
  logoLogin.addEventListener('click', ()=> {
    if (iframe) {
      iframe = null;
      section.innerHTML = section2;
      
    } 
   });

  });
   
}); 
 
/* document.addEventListener('DOMContentLoaded', function () { */
  const menuBtn = document.querySelector('.menu-icon');
      sidebarContent = document.querySelector('.sidebar-content');
      header = document.querySelector('header');
      footer = document.querySelector('footer')



  // Au clic sur le bouton du menu
  menuBtn.addEventListener('click', function () {
    console.log("j'ai clique");
    if (sidebarContent.style.display === 'none' || sidebarContent.style.display === '') {
      
      sidebarContent.style.display = 'block'
      sidebarContent.style.position ='absolute'
      footer.style.display = 'none'
      

  

    } else if(sidebarContent.style.display === 'block'){
      sidebarContent.style.display = 'none'
      
   }
  });

// la fonction qui fait disparaitre le contenu des liens
  

function disparaitre(){
    sidebarContent.style.display='none'
  }

/* }); */
 
