describe('Проверка авторизации', function () {

    it('Верный логин и верный пароль', function () {
         cy.visit('https://login.qa.studio/'); //Зашли на сайт
         cy.get('#forgotEmailButton').should('have.css','color','rgb(0, 85, 152)'); // Проверяю цвет кнопки восттановить
         
         cy.get('#mail').type('german@dolnikov.ru'); //Ввели верный логин
         cy.get('#pass').type('iLoveqastudio1'); // Ввелли верный пароль
         cy.get('#loginButton').click(); // нажал кнопку войти


         cy.get('#messageHeader').contains('Авторизация прошла успешно'); //Проверяю, что после авторизации вижу текст
         cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
     })

     it('Проверка восстановления пароля', function () {
        cy.visit('https://login.qa.studio/'); //Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css','color','rgb(0, 85, 152)'); // Проверяю цвет кнопки восттановить
        
        
        cy.get('#forgotEmailButton').click(); // нажимаю кнопку восстановить пароль

        cy.get('#mailForgot').type('german@dolnikov.ru'); // ввёл почту для восстановления
        cy.get('#restoreEmailButton').click(); // Нажал отправить код


        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); //Проверяю, на совпадение текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
    })

     it('Верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio/'); //Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css','color','rgb(0, 85, 152)'); // Проверяю цвет кнопки восттановить
        
        cy.get('#mail').type('german@dolnikov.ru'); //Ввели верный логин
        cy.get('#pass').type('iLoveqastudio7'); // Ввелли неверный пароль
        cy.get('#loginButton').click(); // нажал кнопку войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //Проверяю, что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
    })

    it('НЕверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); //Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css','color','rgb(0, 85, 152)'); // Проверяю цвет кнопки восттановить
        
        cy.get('#mail').type('notgerman@dolnikov.ru'); //Ввели НЕверный логин
        cy.get('#pass').type('iLoveqastudio1'); // Ввелли верный пароль
        cy.get('#loginButton').click(); // нажал кнопку войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //Проверяю, что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
    })

    it('Проверка что логине есть @ ', function () {
        cy.visit('https://login.qa.studio/'); //Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css','color','rgb(0, 85, 152)'); // Проверяю цвет кнопки восттановить
        
        cy.get('#mail').type('germandolnikov.ru'); //Ввелb логин без "@"
        cy.get('#pass').type('iLoveqastudio1'); // Ввелли верный пароль
        cy.get('#loginButton').click(); // нажал кнопку войти

        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); //Проверяю, что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
    })


    it('Приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/'); //Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css','color','rgb(0, 85, 152)'); // Проверяю цвет кнопки восттановить
        
        cy.get('#mail').type('GerMan@Dolnikov.ru'); //Ввели Верный логин только со строчными буквами
        cy.get('#pass').type('iLoveqastudio1'); // Ввелли верный пароль
        cy.get('#loginButton').click(); // нажал кнопку войти

        cy.get('#messageHeader').contains('Авторизация прошла успешно'); //Проверяю, что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
    })

    


    
    

    
 })

 


// План
// + Найти поле логин и ввести верный логин 
// + Найти поле пароль и ввести правильный пароль
// + Найти кнопку войти и нажать на неё 
// + Проверить, что авторизация прошла успешно    