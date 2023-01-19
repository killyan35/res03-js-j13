import { Nav } from "./nav.js";

let Aside = {  
    data () {  
        return {  
            navs : [  
                {   
                    titre :"UTILISATEURS",
                    content : "Accueil"
                },  
                {  
                    titre :"PRODUITS",
                    content : "A propos"  
                },  
                {  
                    titre :"CATÉGORIES",
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
        <aside>      
            <Nav/>
        </aside>
    `
};  
  
export { Aside };