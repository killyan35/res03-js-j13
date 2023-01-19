import { Aside } from "./aside.js";  
let Nav = { 
    
    props : [  
        "titre",  
        "content"  
    ],  
         
    
    template: 
    `  
        <nav>      
            <h2 Nav v-for="nav in navs"  :titre= "h2.titre"> 
            {{ titre }}
            </h2>
            
            <ul>
                <li Nav v-for="nav in navs"  <a href=""> :content= "li.content" </a> >
                {{ content }}
                </li>
            </ul>
        </nav>
    `
};  
  
export { Nav };