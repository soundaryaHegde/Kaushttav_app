class Back2{
    constructor(){
        this.back_button = createButton("back");
        this.greeting5 = createElement('h2');
        this.greeting6 = createElement('h4');
        this.greeting7 = createElement('h4');
        this.greeting8 = createElement('h4');
        this.greeting9 = createElement('h4');
        this.greeting10 = createElement('h4');
        this.greeting11 = createElement('h4');

        this.input4 = createInput("Date of Birth");
        this.input5 = createInput("School Name");
        this.input6 = createInput("Class");
        this.input7 = createInput("City");
        this.input8 = createInput("Country");
        this.input9 = createInput("Address");

        this.submit_button2 = createButton("submit");

        this.back_button = createButton("Back");
    }
    
    display(){
        this.back_button2.mousePressed(()=>{
        this.button1.hide();
        this.button2.hide();

        this.greeting12.hide();
        this.greeting13.hide();

        this.back_button2.hide();
        this.back_button.hide();
        this.submit_button.hide();
        this.submit_button2.hide();

        this.back_button.position(200,200);
        this.back_button.mouseClicked(back);
      
        this.greeting5 = createElement('h2'); // CREATES GREETINGS(SECOND PAGE)
        this.greeting5.html("GREAT JOB! ONE MORE STEP AND YOU CAN DONATE OR RECIEVE BOOKS.")
        this.greeting5.position(260,60); 
        this.greeting5.style('color:white');
        
        this.greeting6 = createElement('h4'); // GREETINGS(DATE OF BIRTH)
        this.greeting6.html("Date Of Birth")
        this.greeting6.position(400,190);
        this.greeting6.style('color:white');
      
        this.greeting7 = createElement('h4'); // GREETINGS(AGE)
        this.greeting7.html("School-Name")
        this.greeting7.position(610,190);
        this.greeting7.style('color:white');
      
        this.greeting8 = createElement('h4'); // GREETINGS(SCHOOL-NAME)
        this.greeting8.html("Class")
        this.greeting8.position(400,290);
        this.greeting8.style('color:white');
      
        this.greeting9 = createElement('h4'); // GREETINGS(COUNTRY)
        this.greeting9.html("Country")
        this.greeting9.position(610,290);
        this.greeting9.style('color:white');
      
        this.greeting10 = createElement('h4'); // GREETINGS(CITY)
        this.greeting10.html("City")
        this.greeting10.position(610,390);
        this.greeting10.style('color:white');
      
        this.greeting11 = createElement('h4'); // GREETINGS(ADDRESS)
        this.greeting11.html("Address")
        this.greeting11.position(400,390);
        this.greeting11.style('color:white');
      
        this.input4 = createInput("Date Of Birth"); // INPUT DATE OF BIRTH
        this.input4.position(400,230);
      
        this.input5 = createInput("School-Name"); // INPUT SCHOOL NAME
        this.input5.position(610,230);
      
        this.input6 = createInput("Class");  // INPUT CLASS 
        this.input6.position(400,330);
        
        this.input7 = createInput("City"); // INPUT CITY
        this.input7.position(610,330);
      
        this.input8 = createInput("Country"); // INPUT COUNTRY
        this.input8.position(610,430);
      
        this.input9 = createInput("Address");  // INPUT ADDRESS
        this.input9.position(400,430);
      
        this.submit_button2 =  createButton("Submit");  // CREATES THE SUBMIT BUTTON (SECOND PAGE)
        this.submit_button2.position(850,430);
        this.submit_button2.style('color:blue');
        this.submit_button2.mouseClicked(submitbutton2);
        });
    }
}