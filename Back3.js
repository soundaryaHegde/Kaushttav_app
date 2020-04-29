class Back3{
    constructor(){
        this.back_button2 = createButton("Back");
        this.greeting12 = createElement('h2');
        this.greeting13 = createElement('h2');
        this.button1 = createButton("DONATE BOOKS");
        this.button2 = createButton("RECIEVE BOOKS");
    }
    display(){

        this.back_button3.mousePressed(()=>{
        this.back_button3.hide();
        this.back_button2.hide();
        this.back_button.hide();

        this.greeting14.hide();
        this.greeting15.hide();
        this.greeting16.hide();
        this.greeting17.hide();
        this.greeting18.hide();

        this.input9.hide();

        dropdown1.remove();
        dropdown2.remove();
        dropdown3.remove();

        this.donate_button.hide();


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