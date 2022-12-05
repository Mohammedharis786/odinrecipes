function divisible(){
    for(let i=1; i <=55; i++){
        if(i % 4 == 0){
            document.write('fourDiv', '<br />');
        }
        else if(i % 7 == 0){
            document.write('sevDiv',' <br />');
        }
        else{
            document.write(i, '<br/>')
        }
    }
}
divisible();