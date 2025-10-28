    const showSumary = document.querySelector('button#showSumary')
    const sumary = document.querySelector('section#sumary')
    const showVariables = document.querySelector('button#showVariables')
    const examplesVariables = document.querySelector('div.examplesVariables')
    const showCamelSnake = document.querySelector('button#showCamelSnake')
    const CamelSnake = document.querySelector('div#CamelSnake')
    const showNumberString = document.querySelector('button#showNumberString')
    const numberStringExamples = document.querySelector('div#numberStringExamples')
    const showValueConversions = document.querySelector('button#showValueConversions')
    const valueconversions = document.querySelector('div#valueconversions')
    const showTemplateLiterals = document.querySelector('button#showTemplateLiterals')
    const templateLiteralsExamples = document.querySelector('div#templateLiteralsExamples')
    const showconvertSecNumb = document.querySelector('button#showconvertSecNumb')
    const convertSecNumb = document.querySelector('div#convertSecNumb')
    const showConvertDot = document.querySelector('button#showConvertDot')
    const convertionDotComma = document.querySelector('div#convertionDotComma')
    const showconverterCoin = document.querySelector('button#showconverterCoin')
    const converterCoinWrapper = document.querySelector('div#converterCoinWrapper')
    const showautoAssignment = document.querySelector('button#showautoAssignment')
    const autoAssignmentWrapper = document.querySelector('div#autoAssignment-Wrapper')
    const showIncrementWrapper = document.querySelector('button#show_increment_wrapper')
    const incrementWrapper = document.querySelector('div#increment_wrapper')
    const showRelational = document.querySelector('button#show_relational')
    const relationalWrapper = document.querySelector('div#relational_wrapper')
    const showLogics = document.querySelector('button#show_logics')
    const logicWrapper = document.querySelector('div#logic_wrapper')
    const showArithmeticOperator = document.querySelector('button#show_arithmetic_operators')
    const arithmeticOperator = document.querySelector('div#arithmetic_operators')
    const showTernary = document.querySelector('button#show_ternary')
    const ternaryWrapper = document.querySelector('div#ternary_wrapper')
    const showDom = document.querySelector('button#show_DOM')
    const domWrapper = document.querySelector('div#DOM-wrapper')
    const showConditions = document.querySelector('button#show_conditions')
    const conditionsWrapper = document.querySelector('div#conditions_wrapper')
    const showRegex = document.querySelector('button#show_regex')
    const regexWrapper = document.querySelector('div#regex-wrapper')
    const showObject = document.querySelector('button#show_object')
    const objectWrapper = document.querySelector('div#object-wrapper')

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
    let visible10 = false
    let visible11 = false
    let visible12 = false
    let visible13 = false
    let visible14 = false
    let visible15 = false
    let visible16 = false
    let visible17 = false
    let visible18 = false

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
            showVariables.textContent = 'Fechar explicação'
        }else{
            examplesVariables.classList.add('hiden')
            visible1 = false
            console.log('sumiu')
            showVariables.style.background = 'white'
            showVariables.textContent = 'Ver explicação'
        }
    })

    showCamelSnake.addEventListener('click',function(){
        if(visible2 === false){
            CamelSnake.classList.remove('hiden')
            visible2 = true
            showCamelSnake.textContent = 'Fechar explicação'
        }else{
            CamelSnake.classList.add('hiden')
            visible2 = false
            showCamelSnake.textContent = 'Ver explicação'
        }
    })

    showNumberString.addEventListener('click',function(){
        if(visible3 === false){
            numberStringExamples.classList.remove('hiden')
            visible3 = true
            showNumberString.textContent = 'Fechar explicação'
        }else {
            numberStringExamples.classList.add('hiden')
            visible3 = false
            showNumberString.textContent = 'Ver explicação'
        }
    })

    showValueConversions.addEventListener('click',function(){
        if(visible4 === false){
            valueconversions.classList.remove('hiden')
            visible4 = true
            showValueConversions.textContent = 'Fechar explicação'
        }else{
            valueconversions.classList.add('hiden')
            visible4 = false
            showValueConversions.textContent = 'Ver explicação'
        }
    })

    showTemplateLiterals.addEventListener('click',function(){
        if(visible5 === false){
            templateLiteralsExamples.classList.remove('hiden')
            visible5 = true
            showTemplateLiterals.textContent = 'Fechar explicação'
        }else{
            templateLiteralsExamples.classList.add('hiden')
            visible5 = false
            showTemplateLiterals.textContent = 'Ver explicação'
        }
    })

    showconvertSecNumb.addEventListener('click',function(){
        if(visible6 === false){
            convertSecNumb.classList.remove('hiden')
            visible6 = true
            console.log('apareceu')
            showconvertSecNumb.textContent = 'Fechar explicação'
        }else{
            convertSecNumb.classList.add('hiden')
            visible6 = false
            console.log('sumiu')
            showconvertSecNumb.textContent = 'Ver explicação'
        }
    })

    showConvertDot.addEventListener('click',function(){
        if(visible7 === false){
            convertionDotComma.classList.remove('hiden')
            visible7 = true
            showConvertDot.textContent = 'Fechar explicação'
        }else{
            convertionDotComma.classList.add('hiden')
            visible7 = false
            showConvertDot.textContent = 'Ver explicação'
        }
    })

    showconverterCoin.addEventListener('click',function(){
        if(visible8 === false){
            converterCoinWrapper.classList.remove('hiden')
            visible8 = true
            showconverterCoin.textContent = 'Fechar explicação'
        }else{
            converterCoinWrapper.classList.add('hiden')
            visible8 = false
            showconverterCoin.textContent = 'Ver explicação'
        }
    })

    showautoAssignment.addEventListener('click',function(){
        if(visible9 === false){
            autoAssignmentWrapper.classList.remove('hiden')
            visible9 = true
            showautoAssignment.textContent = 'Fechar explicação'
        }else{
            autoAssignmentWrapper.classList.add('hiden')
            visible9 = false
            showautoAssignment.textContent = 'Ver explicação'
        }
    })

    showIncrementWrapper.addEventListener('click',function(){
        if(visible10 === false){
            incrementWrapper.classList.remove('hiden')
            visible10 = true
            showIncrementWrapper.textContent = 'Fechar explicação'
        }else{
            incrementWrapper.classList.add('hiden')
            visible10 = false
            showIncrementWrapper.textContent = 'Ver explicação'
        }
    })

    showRelational.addEventListener('click',function(){
        if(visible11 === false){
            relationalWrapper.classList.remove('hiden')
            visible11 = true
            showRelational.textContent = 'Fechar explicação'
        }else{
            relationalWrapper.classList.add('hiden')
            visible11 = false
            showRelational.textContent = 'Ver explicação'
        }
    })

    showLogics.addEventListener('click',function(){
        if(visible12 === false){
            logicWrapper.classList.remove('hiden')
            visible12 = true
            showLogics.textContent = 'Fechar explicação'
        }else{
            logicWrapper.classList.add('hiden')
            visible12 = false
            showLogics.textContent = 'Ver explicação'
        }
    })

    showArithmeticOperator.addEventListener('click',function(){
        if(visible13 === false){
            arithmeticOperator.classList.remove('hiden')
            visible13 = true
            showArithmeticOperator.textContent = 'Fechar explicação'
        }else{
            arithmeticOperator.classList.add('hiden')
            visible13 = false
            showArithmeticOperator.textContent = 'Ver explicação'
        }
    })

    showTernary.addEventListener('click',function(){
        if(visible14 === false){
            ternaryWrapper.classList.remove('hiden')
            visible14 = true
            showTernary.textContent = 'Fechar explicação'
        }else{
            ternaryWrapper.classList.add('hiden')
            visible14 = false
            showTernary.textContent = 'Ver explicação'
        }
    })

    showDom.addEventListener('click',function(){
        if(visible15 === false){
            domWrapper.classList.remove('hiden')
            visible15 = true
            showDom.textContent = 'Fechar explicação'
        }else{
            domWrapper.classList.add('hiden')
            visible15 = false
            showDom.textContent = 'Ver explicação'
        }
    })

    showConditions.addEventListener('click',function(){
        if(visible16 === false){
            conditionsWrapper.classList.remove('hiden')
            visible16 = true
            showConditions.textContent = 'Fechar explicação'
        }else{
            conditionsWrapper.classList.add('hiden')
            visible16 = false
            showConditions.textContent = 'Ver explicação'
        }
    })

    showRegex.addEventListener('click',function(){
        if(visible17 === false){
            regexWrapper.classList.remove('hiden')
            visible17 = true
            showRegex.textContent = 'Fechar explicação'
        }else{
            regexWrapper.classList.add('hiden')
            visible17 = false
            showRegex.textContent = 'Ver explicação'
        }
    })

    showObject.addEventListener('click',function(){
        if(visible18 === false){
            objectWrapper.classList.remove('hiden')
            visible18 = true
            showObject.textContent = 'Fechar explicação'
        }else{
            objectWrapper.classList.add('hiden')
            visible18 = false
            showObject.textContent = 'Ver explicação'
        }
    })








