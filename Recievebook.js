class Recievebook{
    constructor(){
        this.greeting19 = createElement('h3');
        this.greeting20 = createElement('h3');
        this.greeting21 = createElement('h3');
        this.greeting22 = createElement('h2');
        this.greeting23 = createElement('h3');

        this.input10 = createInput("Name of the book");

        this.recieve_button = createButton("Recieve Book");

        this.back_button4 = createButton("Back");
    }
    display(){

        this.button2.mousePressed(()=>{

        this.greeting12.hide();
        this.greeting13.hide();
        this.button1.hide();
        this.button2.hide();
         

        this.back_button4.position(200,200);
        this.back_button4.mouseClicked(back4);

        
        this.greeting19.html("Name of the book");
        this.greeting19.position(400,430); 
        this.greeting19.style('color:white');

       
        this.input10.position(700,450);

       
        this.greeting20.position(400,530); 
        this.greeting20.style('color:white');

       
        this.greeting21.position(400,230); 
        this.greeting21.style('color:white');

       
        this.greeting22.html("Recieving Book Details");
        this.greeting22.position(600,100); 
        this.greeting22.style('color:white');

        
        this.greeting23.html("Genre of the book");
        this.greeting23.position(400,330); 
        this.greeting23.style('color:white');

        this.dropdown4 = createSelect(); //CREATES DROPDOWN(FOURTH PAGE)
        this.dropdown4.position(700,550);
        this.dropdown4.option('1');
        this.dropdown4.option('2');
        this.dropdown4.option('3');
        this.dropdown4.option('4');
        this.dropdown4.option('5+');

        this.dropdown5 = createSelect(); //CREATES DROPDOWN(FOURTH PAGE)
        this.dropdown5.position(700,250);
        this.dropdown5.option('English');
        this.dropdown5.option('Mandarin Chinese');
        this.dropdown5.option('Spanish');
        this.dropdown5.option('Hindi');
        this.dropdown5.option('Bengali');
        this.dropdown5.option('other');
        
        this.dropdown6 = createSelect(); //CREATES DROPDOWN(FOURTH PAGE)
        this.dropdown6.position(700,350);
        this.dropdown6.option('Text Books');
        this.dropdown6.option('Reference Books');
        this.dropdown6.option('Fantasy');
        this.dropdown6.option('Action & Adventure');
        this.dropdown6.option('Science - Fiction');
        this.dropdown6.option('Horror');
        this.dropdown6.option('Thriller & mystery');
        this.dropdown6.option('Humour');
        this.dropdown6.option('Crime & Detective');
        this.dropdown6.option('Comic');
        this.dropdown6.option('other');

        this.recieve_button.position(1000,550);
        this.recieve_button.style('color:blue');
        this.recieve_button.mouseClicked(lastpage2);


        });
    }
}