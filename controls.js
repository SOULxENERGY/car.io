
class Controls{
    constructor(){
    this.forward=false;
    this.left=false;
    this.up=false;
    this.down=false;
    
    this.#addKeyboardListeners();
    
    
    
    
    }
    #addKeyboardListeners(){
    
    
    document.onkeydown=(e)=>{
        
        switch(e.key){
            case "ArrowLeft":
                this.reverse=true;
                break;
            case "ArrowRight":
                this.forward=true;
                break;
            case "ArrowUp":
                this.up=true;
                break;
            case "ArrowDown":
                this.down=true;
                break;};
               // console.table(this);
            };
    
    
                document.onkeyup=(e)=>{
                    
                    switch(e.key){
                        case "ArrowLeft":
                            this.reverse=false;
                            break;
                        case "ArrowRight":
                            this.forward=false;
                            break;
                        case "ArrowUp":
                            this.up=false;
                            break;
                        case "ArrowDown":
                            this.down=false;
                            break;};
                          //  console.table(this);
                        };
    
    
                            
                        
                        
                        }}