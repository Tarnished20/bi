    function A(){
    document.write("hehe")
    return "hehe";
}

    function B(){
    document.write("haha");
    return "hihi";
}

    var x=(A(),B());
    document.write(x);

    var reg = /^\d+$/;
    var checknuber = prompt("nhap vao do bat ki")
    var a = reg.test(checknuber) ? "day la so" + checknuber : "day ko phai so";
    console.log("test Reg "+a);

    let names = new Array ('jame','kevin','brad');
    function change(names){
        names[0]='Rock'
    }
    for (let i in names){
        console.log(names[i])
    }

    change(names);
    console.log("after");
    for ( let i in names){
        console.log(names[i]);
    }

    var student = new Object();
    student.name="bob";
    student.age="-18"
    console.log("ten hoc sinh la "+student.name +" hien nay "+student.age+" tuoi")

    function student_info(name,age){
        this.name= name;
        this.age= age;
    }
    var student1=new student_info("lily","17")
    console.log("ten hoc sinh la "+student1.name +" hien nay "+student1.age+" tuoi")

    var string1 = new String('Tim');
    var string2 = new String(' 18');
    var string3 = string1.concat(string2);
    console.log(string3);
    var string4 = string3.replace('Tim','John');
    console.log(string4);
    var stringArr = string4.split("-");
    for ( let i in stringArr){
        console.log(stringArr[i])
    }

    let arrString = stringArr.join("-");
    console.log(arrString);

    var date = new Date();
    console.log(date)
    console.log(date.getDate())
    console.log(date.getMonth())







