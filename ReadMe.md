Install node.js and run 

```
npm install
npm install bower -g
bower install 
```

To run
```
npm start
```

Sample tasks
- Add optional Middle Name field
- Add validation messages for required fields - e.g. Please fill in this field
- Improve layout of a form (make fields nicely alligned)
- Resolve issue with broken datepicker in angular 1.6 - https://github.com/angular/material/issues/10070
- Add placeholder 'mm/dd/yyyy' for datepickers, but keep the label
- Hide calendar icon for datepickers
- Add missing countries to Country Of Birth dropdown
- Make document section dynamic
⋅⋅* For Passport require  Passport Number and Expiry Date
⋅⋅* For birth certificate require Certificate Number
⋅⋅* For driver license require Driver Lincense Number and Driver licnese Version and optional Expiry Date
- Add tax number format validation (#)##-###-###
- Change tax end date to two dropdowns - month and day instead of datepicker
- Make save button disabled when form is invalid state
- Save user data to local storage when user clicked save