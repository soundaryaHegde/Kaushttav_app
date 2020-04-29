class Donatebook{
 
    constructor(){
        this.input9 = createInput('Name of the book');
        this.greeting14 = createElement('h3');
        this.greeting15 = createElement('h3');
        this.greeting16 = createElement('h3');
        this.greeting17 = createElement('h3');
        this.donate_button = createButton("Donate");
        this.back_button3 = createButton("Back");
    }

    display(){

        this.button1.mousePressed(()=>{

        this.back_button3.position(200,200);
        this.back_button3.mouseClicked(back3);

        this.greeting12.hide();
        this.greeting13.hide();
        this.button1.hide();
        this.button2.hide();

        this.greeting14.html("Name of the book");
        this.greeting14.position(400,230); 
        this.greeting14.style('color:white');
 
        this.input9.position(650,250);

        this.greeting15.html("Number of copies of the book");
        this.greeting15.position(400,330); 
        this.greeting15.style('color:white');

        this.greeting16.html("Language of the book");
        this.greeting16.position(400,430); 
        this.greeting16.style('color:white');
      
        this.greeting17.html("Book Details");
        this.greeting17.position(600,100); 
        this.greeting17.style('color:white');

        dropdown1 = createSelect(); //CREATES DROPDOWN(FOURTH PAGE)
        dropdown1.position(700,550);
        dropdown1.option('1');
        dropdown1.option('2');
        dropdown1.option('3');
        dropdown1.option('4');
        dropdown1.option('5+');

        dropdown2 = createSelect(); //CREATES DROPDOWN(FOURTH PAGE)
        dropdown2.position(700,250);
        dropdown2.option('English');
        dropdown2.option('Mandarin Chinese');
        dropdown2.option('Spanish');
        dropdown2.option('Hindi');
        dropdown2.option('Bengali');
        dropdown2.option('other');
        
        dropdown3 = createSelect(); //CREATES DROPDOWN(FOURTH PAGE)
        dropdown3.position(700,350);
        dropdown3.option('Text Books');
        dropdown3.option('Reference Books');
        dropdown3.option('Fantasy');
        dropdown3.option('Action & Adventure');
        dropdown3.option('Science - Fiction');
        dropdown3.option('Horror');
        dropdown3.option('Thriller & mystery');
        dropdown3.option('Humour');
        dropdown3.option('Crime & Detective');
        dropdown3.option('Comic');
        dropdown3.option('other');

        this.donate_button.position(1000,550);
        this.donate_button.style('color:blue');
        this.donate_button.mouseClicked(lastpage);

        });
    }
}