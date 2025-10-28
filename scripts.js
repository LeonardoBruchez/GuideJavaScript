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

    showIncrementWrapper.addEventListener('click',function(){
        if(visible10 === false){
            incrementWrapper.classList.remove('hiden')
            visible10 = true
        }else{
            incrementWrapper.classList.add('hiden')
            visible10 = false
        }
    })

    showRelational.addEventListener('click',function(){
        if(visible11 === false){
            relationalWrapper.classList.remove('hiden')
            visible11 = true
        }else{
            relationalWrapper.classList.add('hiden')
            visible11 = false
        }
    })

    showLogics.addEventListener('click',function(){
        if(visible12 === false){
            logicWrapper.classList.remove('hiden')
            visible12 = true
        }else{
            logicWrapper.classList.add('hiden')
            visible12 = false
        }
    })

    showArithmeticOperator.addEventListener('click',function(){
        if(visible13 === false){
            arithmeticOperator.classList.remove('hiden')
            visible13 = true
        }else{
            arithmeticOperator.classList.add('hiden')
            visible13 = false
        }
    })

    showTernary.addEventListener('click',function(){
        if(visible14 === false){
            ternaryWrapper.classList.remove('hiden')
            visible14 = true
        }else{
            ternaryWrapper.classList.add('hiden')
            visible14 = false
        }
    })

    showDom.addEventListener('click',function(){
        if(visible15 === false){
            domWrapper.classList.remove('hiden')
            visible15 = true
        }else{
            domWrapper.classList.add('hiden')
            visible15 = false
        }
    })

    showConditions.addEventListener('click',function(){
        if(visible16 === false){
            conditionsWrapper.classList.remove('hiden')
            visible16 = true
        }else{
            conditionsWrapper.classList.add('hiden')
            visible16 = false
        }
    })

    showRegex.addEventListener('click',function(){
        if(visible17 === false){
            regexWrapper.classList.remove('hiden')
            visible17 = true
        }else{
            regexWrapper.classList.add('hiden')
            visible17 = false
        }
    })

    showObject.addEventListener('click',function(){
        if(visible18 === false){
            objectWrapper.classList.remove('hiden')
            visible18 = true
        }else{
            objectWrapper.classList.add('hiden')
            visible18 = false
        }
    })








