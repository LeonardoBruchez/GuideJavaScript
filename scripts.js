    var showSumary = document.querySelector('button#showSumary')
    var sumary = document.querySelector('section#sumary')
    var showVariables = document.querySelector('button#showVariables')
    var examplesVariables = document.querySelector('div.examplesVariables')
    var showCamelSnake = document.querySelector('button#showCamelSnake')
    var CamelSnake = document.querySelector('div#CamelSnake')
    var showNumberString = document.querySelector('button#showNumberString')
    var numberStringExamples = document.querySelector('div#numberStringExamples')
    var showValueConversions = document.querySelector('button#showValueConversions')
    var valueconversions = document.querySelector('div#valueconversions')
    var showTemplateLiterals = document.querySelector('button#showTemplateLiterals')
    var templateLiteralsExamples = document.querySelector('div#templateLiteralsExamples')
    var showconvertSecNumb = document.querySelector('button#showconvertSecNumb')
    var convertSecNumb = document.querySelector('div#convertSecNumb')
    var showConvertDot = document.querySelector('button#showConvertDot')
    var convertionDotComma = document.querySelector('div#convertionDotComma')
    var showconverterCoin = document.querySelector('button#showconverterCoin')
    var converterCoinWrapper = document.querySelector('div#converterCoinWrapper')
    var showautoAssignment = document.querySelector('button#showautoAssignment')
    var autoAssignmentWrapper = document.querySelector('div#autoAssignment-Wrapper')
    

    
    


    let visible = false
    let visible1 = false
    let visible2 = false
    let visible3 = false
    let visible4 = false
    let visible5 = false
    let visible6 = false
    let visible7 = false
    let visible8 = false
    let visible9 = false

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

    showVariables.addEventListener('click',function(){
        if(visible1 === false){
            examplesVariables.classList.remove('hiden')
            console.log('apareceu')
            visible1 = true
            showVariables.style.background = 'rgba(179, 178, 178, 1)'
            showVariables.style.outline = '2px solid rgba(255, 255, 255, 1)'
        }else{
            examplesVariables.classList.add('hiden')
            visible1 = false
            console.log('sumiu')
            showVariables.style.background = 'white'
        }
    })

    showCamelSnake.addEventListener('click',function(){
        if(visible2 === false){
            CamelSnake.classList.remove('hiden')
            visible2 = true
        }else{
            CamelSnake.classList.add('hiden')
            visible2 = false
        }
    })

    showNumberString.addEventListener('click',function(){
        if(visible3 === false){
            numberStringExamples.classList.remove('hiden')
            visible3 = true
        }else {
            numberStringExamples.classList.add('hiden')
            visible3 = false
        }
    })

    showValueConversions.addEventListener('click',function(){
        if(visible4 === false){
            valueconversions.classList.remove('hiden')
            visible4 = true
        }else{
            valueconversions.classList.add('hiden')
            visible4 = false
        }
    })

    showTemplateLiterals.addEventListener('click',function(){
        if(visible5 === false){
            templateLiteralsExamples.classList.remove('hiden')
            visible5 = true
        }else{
            templateLiteralsExamples.classList.add('hiden')
            visible5 = false
        }
    })

    showconvertSecNumb.addEventListener('click',function(){
        if(visible6 === false){
            convertSecNumb.classList.remove('hiden')
            visible6 = true
            console.log('apareceu')
        }else{
            convertSecNumb.classList.add('hiden')
            visible6 = false
            console.log('sumiu')
        }
    })

    showConvertDot.addEventListener('click',function(){
        if(visible7 === false){
            convertionDotComma.classList.remove('hiden')
            visible7 = true
        }else{
            convertionDotComma.classList.add('hiden')
            visible7 = false
        }
    })

    showconverterCoin.addEventListener('click',function(){
        if(visible8 === false){
            converterCoinWrapper.classList.remove('hiden')
            visible8 = true
        }else{
            converterCoinWrapper.classList.add('hiden')
            visible8 = false
        }
    })

    showautoAssignment.addEventListener('click',function(){
        if(visible9 === false){
            autoAssignmentWrapper.classList.remove('hiden')
            visible9 = true
        }else{
            autoAssignmentWrapper.classList.add('hiden')
            visible9 = false
        }
    })











