import { Header } from "./Header.js";  

let Nav = {  
         navs : [  
        "content"  
    ],
    components : {  
      Header
    },
    template: 
    `  
        <nav>      
            <ul>
                <li Nav v-for="nav in navs" :content= "li.content">
                </li>
            </ul>
        </nav>
    `
};  
  
export { Nav };