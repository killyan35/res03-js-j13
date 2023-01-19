import { Nav } from "./Nav.js";
let Header = {  
     
      data () {  
        return {  
            articles : [  
                {  
                    content : "Accueil"
                },  
                {  
                    content : "A propos"  
                },  
                {  
                    content : "Contact"  
                }  
            ]  
        }  
    },  
    components : {  
      
      Nav
      
    }, 
    template: 
    `  
        <header>      
            <Nav/>
            
        </header>
    `
};  
  
export { Header };