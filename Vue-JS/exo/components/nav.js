import { Aside } from "./aside.js";  
let Nav = { 
    
    props : [  
        "title"
        ],
        
    props :   [
        "contents"
        ],
      
         
    
    template: 
    `  
        <nav>      
            <h2> 
            {{ title }}
            </h2>
            
            <ul>
                <li v-for="content in contents">{{ content }}</li>
        
            </ul>
        </nav>
    `
};  
  
export { Nav };