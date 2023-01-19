import { Nav } from "./Nav.js";  


let Header = {  
    data() {  
        return { 
            navs : ["Accueil", "A propos", "Contact"]
        }  
    },
    components : {  
      Nav
    },
    template: `  
        <header>
            <Nav :navs="this.navs"/>
        </header>
    `
};  
  
export { Header };