class Back4{
    constructor(){

        this.back_button2 = createButton("Back");
        this.greeting12 = createElement('h2');
        this.greeting13 = createElement('h2');
        this.button1 = createButton("DONATE BOOKS");
        this.button2 = createButton("RECIEVE BOOKS");
    }
    display(){
        this.back_button4.mousePressed(()=>{

        this.back_button2.hide();
        this.back_button.hide();
        this.back_button4.hide();
        this.input10.hide();
        this.greeting19.hide();
        this.greeting20.hide();
        this.greeting21.hide();
        this.greeting22.hide();
        this.greeting23.hide();
        this.dropdown4.remove();
        this.dropdown5.remove();
        this.dropdown6.remove();
        this.recieve_button.hide();

        this.back_button2.position(200,200);
        this.back_button2.mouseClicked(back2);
      
      
        this.greeting12.html("WHAT DO YOU WANT TO ?")
        this.greeting12.position(590,80); 
        this.greeting12.style('color:white');
      
      
        this.button1.position(630,230);
        this.button1.size(200,50);
        this.button1.mouseClicked(donatebooks);
      
        
        this.greeting13.html("OR");
        this.greeting13.position(710,330); 
        this.greeting13.style('color:white');
      
        
        this.button2.position(630,430);
        this.button2.size(200,50);
        this.button2.mouseClicked(recievebooks);
        });
    }
}