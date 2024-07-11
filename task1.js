class Person {
    constructor(name,age){
        this.name = name
        this.age = age
    }

    greet(){
        console.log("name: ",this.name ,"age: ",this.age)
    }
}

class Student extends Person{
    constructor(name,age,grade){
        super(name,age)
        this.grade = grade
    }

    greet(){
        console.log("name: ",this.name ,"age: ",this.age,'grade: ',this.grade)
    }
    study(hours){
        return hours
    }
}


class Teachers extends Person{
    constructor(name,age,subject){
        super(name,age)
        this.subject = subject
    }

    greet(){
        console.log("name: ",this.name ,"age: ",this.age,'subject: ',this.subject)
    }
    teach(hours){
        return hours
    }
}