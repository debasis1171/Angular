import { Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { NewsComponent } from './news/news.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { UsingmattableComponent } from './usingmattable/usingmattable.component';

import { AddStudentComponent } from './add-student/add-student.component';
import { AddStudentComponent1 } from './add-student1/add-student1.component';

export const routes: Routes = [

    {
        path:'home',
        component:HomeComponent
    },
    {
        path:'student',
        component: StudentComponent
    },
    {
     path:'news',
        component: NewsComponent
    },
    {
        path:'about',
           component: AboutComponent
       },
       {
        path:'contact',
           component:ContactComponent
       },
      {
       path:'usingmattable',
         component:UsingmattableComponent
      },
      {
      path:'add-student',
      component: AddStudentComponent
      },

      {
        path:'student/edit/:id',
        component: AddStudentComponent
      },
      {
        path:'student/add',
        component: AddStudentComponent1
      }
];
