class Form3{
    constructor(){
        this.greeting12 = createElement('h2');
        this.greeting13 = createElement('h2');
        this.button1 = createButton("DONATE BOOKS");
        this.button2 = createButton("RECIEVE BOOKS");
        this.back_button2 = createButton("Back");
    }
    display(){
        
        this.submit_button2.mousePressed (()=>{

        this.greeting5.hide();
        this.greeting6.hide();
        this.greeting7.hide();
        this.greeting8.hide();
        this.greeting9.hide();
        this.greeting10.hide();
        this.greeting11.hide();

        this.input4.hide();
        this.input5.hide();
        this.input6.hide();
        this.input7.hide();
        this.input8.hide();
        this.input9.hide();

        this.submit_button2.hide();
        this.submit_button.hide();

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