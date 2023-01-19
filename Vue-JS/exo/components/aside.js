import { Nav } from "./nav.js";

let Aside = {  
    data () {  
        return {  
            navs : [  
                {   
                    title :"UTILISATEURS"
                },  
                {  
                    title :"PRODUITS"
                },  
                {  
                    title :"CATÉGORIES"
                }  
            ],  
              contents : [  
                {   
                    content1 : "LISTE DES UTILISATEURS",
                    content2 : "AJOUTER UN UTILISATEUR",
                    content3 : "STATISTIQUES UTILISATEURS"
                },  
                {  
                    content1 : "LISTE DES PRODUITS",
                    content2 : "AJOUTER UN PRODUIT",
                    content3 : "STATISTIQUES PRODUITS"
                },  
                {  
                    content1 : "LISTE DES CATÉGORIES DE PRODUITS",
                    content2 : "AJOUTER UNE CATÉGORIE DE PRODUITS"
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
            <Nav v-for="nav in navs" :title="nav.title"  Nav v-for="content in contents" :content1="content.content" :content2="content.content2" :content3="content.content3"/>
        </aside>
    `
};  
  
export { Aside };