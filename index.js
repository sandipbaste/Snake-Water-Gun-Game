
let user = prompt("Enter S, W or G:")
let cpuI = Math.floor(Math.random() * 3) // Math.floor = 1.2313 asel tar 1 consider hot, 2.6797 asel tar 3 consider
//Math.random() * 3 = 0 to 2 ase 3 random numberach randomly yetil 

let cpu = ["S", "W", "G"][cpuI]

const match =(cpu, user)=>{
    if (cpu == user) {
        return "Nobody Win"
    }
    else if(cpu=="S" && user=="W"){
        return "cpu";
    }
    else if(cpu=="S" && user=="G"){
        return "user";
    }
    else if(cpu=="W" && user=="S"){
        return "User"
    }
    else if(cpu=="W" && user=="G"){
        return "cpu"
    }
    else if(cpu=="G" && user=="W"){
        return "user"
    }
    else if(cpu==="G" && user=="S"){
        return "cpu"
    }
}
let result = match(cpu, user)
document.write(`cpu :${cpu} <br> user: ${user} <br>  The Winner is: ${result.toUpperCase()}`)