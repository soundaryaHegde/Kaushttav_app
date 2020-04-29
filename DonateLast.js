class DonateLast{
    constructor(){
        
        this.greeting24 = createElement('h1');
    }
    display(){

        recieve_button.mousePressed(()=>{

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

        this.greeting24.html("THANK YOU FOR THE DONATION :)");
        this.greeting24.position(450,300);
        this.greeting24.style('color:white');
        });
    }
}