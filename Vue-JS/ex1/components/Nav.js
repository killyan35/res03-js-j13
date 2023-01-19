import { Header } from "./Header.js";  

let Nav = {  
        props: [
            "navs"
        ],
    
    template: 
    `  
        <nav>      
            <ul>
                <li v-for="nav in navs">{{ nav }}</li>
            </ul>
        </nav>
    `
};  
  
export { Nav };