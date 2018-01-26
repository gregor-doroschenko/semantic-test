# Semantic-UI Test

This project is an code example for an [Answer](https://stackoverflow.com/questions/48459564/jquery-not-working-in-angular-4-while-using-semanti-ui/48459692#48459692) on stackoverflow.

In this code example you can find, how to use semantic-ui with jquery in angular projects.

This solution resolves following javascript error: `$(..).dropdown() is not a function`

If you have no time for looking at source code, so here the short answer:

Step 1: `npm install --save @types/jquery`

Step 2: `import 'jquery'` is the right import for using jquery

Step 3: `(<any>$('.ui.dropdown')).dropdown();` is the right way to call jquery dropdown function

### Checkout and try

Check out this project and open in terminal the project folder. Run `ng serve` and call `http://localhost:4200` in browser.