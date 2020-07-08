import {Component} from  '@angular/core'

@Component({

    selector:'app-directive',
    templateUrl:'./directive.component.html'
})


export class  DirectiveComponent{
 title:String="welcome to first application"


 //code for attribute directive
    myColors:any={color:'red',
                    background:'white'
                }

    //if true= then hide
    //if false=then show            
    Ishidden:boolean=false;


    //HIDE AND SHOW BASED  ON BUTTON CLICK
    hideShow(){
        this.Ishidden=!this.Ishidden;

    }


    //--sTRUCTURAL DIRECTIVE---//

    myArray:any=[1,2,4,5]

    //--nested array-->

    countries:any[]=[{name:'usa',code:'white'},
                        {name:'Australia',code:'orange'}
                    ]

//nested json

peopleByCountry:any=[

    {'country':'India','people':[
                                    {"name":'Anjali'},
                                    {"name":'jadhav'}
                                ]

    },

        {'country':'us',

            'people':[
                        {'name':'lidiya'},
                        {'name':'bregenza'}
                    ]

        },


    {'country':'uk',

            'people':[
                    {'name':'wwwww'},
                    {'name':'sssss'}
                ]

    }



]    








}