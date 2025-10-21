    // const marca = "Nike"
    // const Número = 4
    // console.log(marca)
    
    // let numero2 = 456;
    // let stringConvertida2 = numero2.toString();

    // const stringTester = "147"
    // const ToNumber = Number(stringTester)
    // console.log(typeof ToNumber)

    // var n1 = 1536.4
    // console.log(n1)
    // console.log(n1.toFixed(2))


    // var n2 = 1467.54
    // console.log(n2)
    // console.log(n2.toFixed(2).replace('.', ','))

    // var n1 = 1543.5
    // console.log(n1)
    // console.log(n1.toLocaleString('pt-BR', {style: 'currency',currency:'BRL'}))
    
    // var n2 = 1543.5
    // console.log(n2)
    // console.log(n2.toLocaleString('pt-BR', {style: 'currency', currency: 'USD'}))

    // var n3 = 1543.5
    // console.log(n3)
    // console.log(n3.toLocaleString('pt-BR', {style: 'currency',currency:'EUR'}))

// window.prompt()
// var p1 = document.g('p')[2]

    var showSumary = document.querySelector('button#showSumary')
    var sumary = document.querySelector('section#sumary')

    let visible = false;


    showSumary.addEventListener('click', function(){

        if (visible === false) {
            sumary.classList.remove('hiden')
            
            visible = true

            console.log("Apareceu")

            showSumary.textContent = 'Esconder'
            
        }

        else{
            sumary.classList.add('hiden')

            visible = false

            console.log("Sumiu")

            showSumary.textContent = 'Ver sumário'
        }
    })



