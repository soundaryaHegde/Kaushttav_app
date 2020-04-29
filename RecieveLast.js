class RecieveLast{
    constructor(){
        this.greeting25 = createElement('h1');
    }
    display(){
        this.donate_button.mousePressed(()=>{
            
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

        this.greeting25.html("IF THE BOOK IS IN STOCK, YOU WILL RECIEVE IT.");
        this.greeting25.position(450,300);
        this.greeting25.style('color:white');
        });
    }
}