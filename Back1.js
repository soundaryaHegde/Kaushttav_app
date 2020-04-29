class Back1{
    constructor(){
        this.greeting1 = createElement('h2');
        this.greeting2 = createElement('h4');
        this.greeting3 = createElement('h4');
        this.greeting4 = createElement('h4');

        this.input1 = createInput("Name");
        this.input2 = createInput("E mail");
        this.input3 = createInput("Mobile No.");

        this.submit_button = createButton("Sign up");
    }
    display(){
        this.back_button.mousePressed(()=>{

        
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

        this.back_button.hide();

        this.submit_button.position(850,430);
        this.submit_button.style('color:blue');
        this.submit_button.mouseClicked(submitbutton);

        this.greeting1.html("WELCOME TO BOOK BANK, PLEASE SIGN UP THE FOLLOWING DETAILS TO RECIEVE OR DONATE BOOKS.")
        this.greeting1.position(140,60); 
        this.greeting1.style('color:white');
        
        this.greeting2.html("Name")
        this.greeting2.position(450,190);
        this.greeting2.style('color:white');

        this.greeting3.html("E-mail")
        this.greeting3.position(450,290);
        this.greeting3.style('color:white');

        this.greeting4.html("Phone_No.")
        this.greeting4.position(450,390);
        this.greeting4.style('color:white');

        this.input1.position(450,230);

        this.input2.position(450,330);

        this.input3.position(450,430);
    });
    }
}